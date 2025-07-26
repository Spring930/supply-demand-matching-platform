import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { demands, type NewDemand } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// GET - 获取需求列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const demandsList = await db
      .select()
      .from(demands)
      .where(eq(demands.status, 'active'))
      .orderBy(desc(demands.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      data: demandsList,
      pagination: {
        page,
        limit,
        total: demandsList.length
      }
    });
  } catch (error) {
    console.error('获取需求列表失败:', error);
    return NextResponse.json(
      { success: false, error: '获取需求列表失败' },
      { status: 500 }
    );
  }
}

// POST - 发布新需求
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 验证必填字段
    const requiredFields = ['title', 'summary', 'fullDescription', 'type', 'contact', 'contactPerson'];
    for (const field of requiredFields) {
      if (!body[field]) {
        const fieldNames = {
          title: '需求标题',
          summary: '需求概述', 
          fullDescription: '需求详情',
          type: '需求类型',
          contact: '联系方式',
          contactPerson: '联系人'
        };
        return NextResponse.json(
          { success: false, error: `${fieldNames[field as keyof typeof fieldNames]} 是必填字段` },
          { status: 400 }
        );
      }
    }

    // 准备插入数据
    const demandData: NewDemand = {
      userId: 1, // 暂时使用固定用户ID，后续需要从认证中获取
      title: body.title,
      summary: body.summary,
      description: body.fullDescription, // 将fullDescription作为主要描述
      fullDescription: body.fullDescription,
      type: body.type,
      industry: body.industry || null,
      region: body.region || null,
      organization: body.organization || null,
      contact: body.contact,
      contactPerson: body.contactPerson,
      budget: body.budget || null,
      deadline: body.deadline || null,
      requirements: body.requirements?.filter((req: string) => req.trim()) || [],
      tags: body.tags?.filter((tag: string) => tag.trim()) || [],
      urgency: body.urgency || 'general',
      status: 'active',
    };

    // 插入数据库
    const [newDemand] = await db
      .insert(demands)
      .values(demandData)
      .returning();

    return NextResponse.json({
      success: true,
      data: newDemand,
      message: '需求发布成功'
    }, { status: 201 });

  } catch (error) {
    console.error('发布需求失败:', error);
    return NextResponse.json(
      { success: false, error: '发布需求失败，请稍后重试' },
      { status: 500 }
    );
  }
}