import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { achievements, type NewAchievement } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// GET - 获取成果列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const achievementsList = await db
      .select()
      .from(achievements)
      .where(eq(achievements.status, 'active'))
      .orderBy(desc(achievements.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      data: achievementsList,
      pagination: {
        page,
        limit,
        total: achievementsList.length
      }
    });
  } catch (error) {
    console.error('获取成果列表失败:', error);
    return NextResponse.json(
      { success: false, error: '获取成果列表失败' },
      { status: 500 }
    );
  }
}

// POST - 发布新成果
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 验证必填字段
    const requiredFields = ['title', 'summary', 'fullDescription', 'type', 'contact', 'contactPerson'];
    for (const field of requiredFields) {
      if (!body[field]) {
        const fieldNames = {
          title: '成果标题',
          summary: '成果概述', 
          fullDescription: '成果详情',
          type: '成果类型',
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
    const achievementData: NewAchievement = {
      userId: 1, // 暂时使用固定用户ID，后续需要从认证中获取
      title: body.title,
      summary: body.summary,
      description: body.fullDescription, // 将fullDescription作为主要描述
      fullDescription: body.fullDescription,
      type: body.type,
      industry: body.industry || null,
      region: body.region || null,
      subject: body.subject || null,
      organization: body.organization || null,
      contact: body.contact,
      contactPerson: body.contactPerson,
      maturityLevel: body.maturityLevel || null,
      applicationField: body.applicationField || null,
      technicalAdvantage: body.technicalAdvantage || null,
      cooperationMode: body.cooperationMode || null,
      intellectualProperty: body.intellectualProperty || null,
      tags: body.tags?.filter((tag: string) => tag.trim()) || [],
      attachments: body.attachments?.filter((att: string) => att.trim()) || [],
      isHot: 0,
      status: body.status || 'active',
    };

    // 插入数据库
    const [newAchievement] = await db
      .insert(achievements)
      .values(achievementData)
      .returning();

    return NextResponse.json({
      success: true,
      data: newAchievement,
      message: newAchievement.status === 'draft' ? '草稿保存成功' : '成果发布成功'
    }, { status: 201 });

  } catch (error) {
    console.error('发布成果失败:', error);
    return NextResponse.json(
      { success: false, error: '发布成果失败，请稍后重试' },
      { status: 500 }
    );
  }
}