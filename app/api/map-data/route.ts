import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { achievements, demands } from '@/lib/db/schema';
import { sql } from 'drizzle-orm';

// GET - 获取地图数据
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'demands'; // demands 或 achievements
    const industry = searchParams.get('industry');
    const timeRange = searchParams.get('timeRange');
    
    // 根据类型选择表
    const table = type === 'demands' ? demands : achievements;
    
    // 构建基础查询
    let query = db
      .select({
        region: table.region,
        count: sql<number>`count(*)`,
      })
      .from(table)
      .where(sql`${table.status} = 'active'`);
    
    // 添加行业筛选
    if (industry && industry !== '全部行业') {
      query = query.where(sql`${table.industry} = ${industry}`);
    }
    
    // 添加时间范围筛选
    if (timeRange && timeRange !== '全部时间') {
      const now = new Date();
      let startDate = new Date();
      
      switch (timeRange) {
        case '近一个月':
          startDate.setMonth(now.getMonth() - 1);
          break;
        case '近三个月':
          startDate.setMonth(now.getMonth() - 3);
          break;
        case '近半年':
          startDate.setMonth(now.getMonth() - 6);
          break;
      }
      
      query = query.where(sql`${table.createdAt} >= ${startDate.toISOString()}`);
    }
    
    // 按地区分组
    const regionData = await query
      .groupBy(table.region)
      .orderBy(sql`count(*) DESC`);

    // 获取行业分布数据
    const industryQuery = db
      .select({
        industry: table.industry,
        count: sql<number>`count(*)`,
      })
      .from(table)
      .where(sql`${table.status} = 'active'`)
      .groupBy(table.industry)
      .orderBy(sql`count(*) DESC`);
    
    const industryData = await industryQuery;

    // 地区名称映射
    const regionNames: { [key: string]: string } = {
      'beijing': '北京',
      'shanghai': '上海', 
      'guangdong': '广东',
      'jiangsu': '江苏',
      'zhejiang': '浙江',
      'sichuan': '四川',
      'hubei': '湖北',
      'shandong': '山东',
      'hunan': '湖南',
      'fujian': '福建',
      'anhui': '安徽',
      'henan': '河南'
    };

    // 行业名称映射
    const industryNames: { [key: string]: string } = {
      'ai': '人工智能',
      'biotech': '生物技术',
      'newenergy': '新能源',
      'manufacturing': '智能制造',
      'materials': '新材料',
      'agriculture': '农业科技',
      'fintech': '金融科技',
      'education': '教育科技',
      'healthcare': '医疗健康',
      'environment': '环保技术'
    };

    // 转换地区数据格式
    const formattedRegionData = regionData.map((item, index) => ({
      name: regionNames[item.region || ''] || item.region || '未知',
      code: item.region || 'UNKNOWN',
      value: Number(item.count),
      demands: type === 'demands' ? Number(item.count) : 0,
      achievements: type === 'achievements' ? Number(item.count) : 0,
      newThisMonth: Math.floor(Number(item.count) * 0.1), // 估算本月新增
      mainIndustries: ['人工智能', '新材料'], // 简化处理
      color: getRegionColor(index)
    }));

    // 转换行业数据格式
    const total = industryData.reduce((sum, item) => sum + Number(item.count), 0);
    const formattedIndustryData = industryData.map((item, index) => ({
      name: industryNames[item.industry || ''] || item.industry || '其他',
      value: Math.round((Number(item.count) / total) * 100),
      demands: Number(item.count),
      color: getIndustryColor(index)
    }));

    // 获取总体统计
    const totalDemandsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(demands)
      .where(sql`${demands.status} = 'active'`);
    
    const totalAchievementsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(achievements)
      .where(sql`${achievements.status} = 'active'`);

    const totalDemands = totalDemandsResult[0]?.count || 0;
    const totalAchievements = totalAchievementsResult[0]?.count || 0;

    return NextResponse.json({
      success: true,
      data: {
        regionData: formattedRegionData,
        industryData: formattedIndustryData,
        summary: {
          totalDemands: Number(totalDemands),
          totalAchievements: Number(totalAchievements),
          totalMatches: 0, // TODO: 实现匹配统计
          activeRegions: formattedRegionData.length
        }
      }
    });

  } catch (error) {
    console.error('获取地图数据失败:', error);
    return NextResponse.json(
      { success: false, error: '获取地图数据失败' },
      { status: 500 }
    );
  }
}

// 获取地区颜色
function getRegionColor(index: number): string {
  const colors = [
    '#00FFB9', '#00E6A7', '#00CC95', '#00B383', 
    '#009971', '#008866', '#007755', '#006644',
    '#005533', '#004422', '#003311', '#002200'
  ];
  return colors[index % colors.length];
}

// 获取行业颜色
function getIndustryColor(index: number): string {
  const colors = [
    '#FF8C00', '#00FFB9', '#4169E1', '#32CD32',
    '#FFD700', '#9AA0A6', '#FF69B4', '#20B2AA',
    '#FFA500', '#8A2BE2'
  ];
  return colors[index % colors.length];
}