import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { achievements, demands } from '@/lib/db/schema';
import { sql, count } from 'drizzle-orm';

// GET - 获取地图统计数据
export async function GET(request: NextRequest) {
  try {
    // 获取需求按地区分布
    const demandsData = await db
      .select({
        region: demands.region,
        count: count(demands.id)
      })
      .from(demands)
      .where(sql`${demands.status} = 'active'`)
      .groupBy(demands.region);

    // 获取成果按地区分布  
    const achievementsData = await db
      .select({
        region: achievements.region,
        count: count(achievements.id)
      })
      .from(achievements)
      .where(sql`${achievements.status} = 'active'`)
      .groupBy(achievements.region);

    // 地区名称映射
    const regionNames: { [key: string]: string } = {
      'beijing': '北京',
      'shanghai': '上海', 
      'guangdong': '广东',
      'jiangsu': '江苏',
      'zhejiang': '浙江',
      'sichuan': '四川',
      'hubei': '湖北',
      'shandong': '山东'
    };

    // 合并数据
    const allRegions = new Set([
      ...demandsData.map(d => d.region),
      ...achievementsData.map(d => d.region)
    ]);

    const regionStats = Array.from(allRegions)
      .filter(region => region) // 过滤掉null值
      .map((region, index) => {
        const demandItem = demandsData.find(d => d.region === region);
        const achievementItem = achievementsData.find(d => d.region === region);
        
        const demands = Number(demandItem?.count || 0);
        const achievements = Number(achievementItem?.count || 0);
        
        return {
          name: regionNames[region] || region,
          code: region,
          demands,
          achievements,
          total: demands + achievements,
          color: getColor(index)
        };
      })
      .sort((a, b) => b.total - a.total);

    return NextResponse.json({
      success: true,
      data: regionStats
    });

  } catch (error) {
    console.error('获取地图统计数据失败:', error);
    return NextResponse.json(
      { success: false, error: '获取地图统计数据失败' },
      { status: 500 }
    );
  }
}

function getColor(index: number): string {
  const colors = [
    '#00FFB9', '#00E6A7', '#00CC95', '#00B383', 
    '#009971', '#008866', '#007755', '#006644'
  ];
  return colors[index % colors.length];
}