import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { achievements } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET - 获取单个成果详情
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const achievementId = parseInt(id);
    
    if (isNaN(achievementId)) {
      return NextResponse.json(
        { success: false, error: '无效的成果ID' },
        { status: 400 }
      );
    }

    const achievement = await db
      .select()
      .from(achievements)
      .where(eq(achievements.id, achievementId))
      .limit(1);

    if (achievement.length === 0) {
      return NextResponse.json(
        { success: false, error: '成果不存在' },
        { status: 404 }
      );
    }

    // 映射数据库字段到前端期望的字段
    const result = achievement[0];
    const mappedAchievement = {
      ...result,
      researchUnit: result.organization || result.contact, // 研发单位映射
      publishDate: result.createdAt.toISOString().split('T')[0], // 发布日期
      viewCount: 0, // 默认值，后续实现计数功能
      followCount: 0, // 默认值，后续实现关注功能
      achievements: result.technicalAdvantage ? result.technicalAdvantage.split('\n').filter(Boolean) : [], // 技术优势作为主要成果
      applicationScenarios: result.applicationField || '待完善', // 应用场景
    };

    return NextResponse.json(mappedAchievement);

  } catch (error) {
    console.error('获取成果详情失败:', error);
    return NextResponse.json(
      { success: false, error: '获取成果详情失败' },
      { status: 500 }
    );
  }
}