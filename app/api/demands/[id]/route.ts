import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { demands } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET - 获取单个需求详情
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const demandId = parseInt(id);
    
    if (isNaN(demandId)) {
      return NextResponse.json(
        { success: false, error: '无效的需求ID' },
        { status: 400 }
      );
    }

    const demand = await db
      .select()
      .from(demands)
      .where(eq(demands.id, demandId))
      .limit(1);

    if (demand.length === 0) {
      return NextResponse.json(
        { success: false, error: '需求不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: demand[0]
    });

  } catch (error) {
    console.error('获取需求详情失败:', error);
    return NextResponse.json(
      { success: false, error: '获取需求详情失败' },
      { status: 500 }
    );
  }
}