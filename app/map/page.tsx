'use client';

import { Metadata } from 'next';
import { useState, useEffect } from 'react';

// 定义数据类型
interface RegionData {
  name: string;
  code: string;
  demands: number;
  achievements: number;
  total: number;
  color: string;
  newThisMonth?: number;
  mainIndustries?: string[];
}

interface IndustryData {
  name: string;
  value: number;
  color: string;
  demands: number;
}

// 默认的行业数据（用于备用）
const DEFAULT_INDUSTRY_DATA: IndustryData[] = [
  { name: '新能源', value: 27, color: '#FF8C00', demands: 312 },
  { name: '人工智能', value: 23, color: '#00FFB9', demands: 268 },
  { name: '生物技术', value: 18, color: '#4169E1', demands: 210 },
  { name: '智能制造', value: 15, color: '#32CD32', demands: 175 },
  { name: '新材料', value: 12, color: '#FFD700', demands: 140 },
  { name: '其他', value: 5, color: '#9AA0A6', demands: 58 },
];



export default function MapPage() {
  const [selectedTab, setSelectedTab] = useState<'demands' | 'achievements'>('demands');
  const [selectedRegion, setSelectedRegion] = useState<string>('全国');
  const [selectedIndustry, setSelectedIndustry] = useState('全部行业');
  const [selectedTimeRange, setSelectedTimeRange] = useState('全部时间');
  const [selectedType, setSelectedType] = useState('全部类型');
  const [sortBy, setSortBy] = useState('按数量');
  
  // 状态管理
  const [regionData, setRegionData] = useState<RegionData[]>([]);
  const [industryData, setIndustryData] = useState<IndustryData[]>(DEFAULT_INDUSTRY_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取地图数据
  useEffect(() => {
    async function fetchMapData() {
      try {
        setLoading(true);
        const response = await fetch('/api/map-stats');
        
        if (!response.ok) {
          throw new Error('获取数据失败');
        }
        
        const result = await response.json();
        if (result.success) {
          // 添加默认字段
          const processedData = result.data.map((item: RegionData) => ({
            ...item,
            newThisMonth: Math.floor(item.total * 0.1),
            mainIndustries: ['人工智能', '新材料']
          }));
          setRegionData(processedData);
        } else {
          throw new Error(result.error || '获取数据失败');
        }
      } catch (err) {
        console.error('Error fetching map data:', err);
        setError(err instanceof Error ? err.message : '获取数据失败');
      } finally {
        setLoading(false);
      }
    }

    fetchMapData();
  }, []);

  // 获取当前显示的数据
  const getCurrentData = () => {
    if (selectedTab === 'demands') {
      return regionData.map(region => ({ ...region, value: region.demands }));
    } else {
      return regionData.map(region => ({ ...region, value: region.achievements }));
    }
  };

  const currentData = getCurrentData();
  const maxValue = currentData.length > 0 ? Math.max(...currentData.map(d => d.value)) : 0;

  // 加载状态
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500 mx-auto mb-4"></div>
          <p className="text-gray-600">加载地图数据中...</p>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ 数据加载失败</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面头部 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-title mb-4">供需地图分布</h1>
            <p className="text-gray-600">实时展示全国各地区供需分布情况</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedTab('achievements')}
              className={`px-4 py-2 rounded-custom transition-colors ${
                selectedTab === 'achievements'
                  ? 'bg-accent-500 text-white'
                  : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
              }`}
            >
              成果分布
            </button>
            <button
              onClick={() => setSelectedTab('demands')}
              className={`px-4 py-2 rounded-custom transition-colors ${
                selectedTab === 'demands'
                  ? 'bg-accent-500 text-white'
                  : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
              }`}
            >
              需求分布
            </button>
          </div>
        </div>
      </div>

      {/* 筛选器 */}
      <div className="bg-white rounded-custom shadow-md p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">行业:</label>
            <select 
              value={selectedIndustry} 
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option>全部行业</option>
              <option>人工智能</option>
              <option>生物技术</option>
              <option>新能源</option>
              <option>智能制造</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">时间:</label>
            <select 
              value={selectedTimeRange} 
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option>全部时间</option>
              <option>近一个月</option>
              <option>近三个月</option>
              <option>近半年</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">类型:</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option>全部类型</option>
              <option>技术需求</option>
              <option>资金需求</option>
              <option>人才需求</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">密度:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option>按数量</option>
              <option>按密度</option>
              <option>按增长率</option>
            </select>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 地图区域 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-custom shadow-md">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-title">
                  全国{selectedTab === 'demands' ? '需求' : '成果'}分布图
                </h2>
                <div className="flex items-center text-sm text-gray-600">
                  <span>{`当前层级: 全国 > ${selectedRegion}`}</span>
                </div>
              </div>
            </div>
            
            {/* 地图容器 */}
            <div className="p-6">
              <div className="relative bg-gray-50 rounded-custom overflow-hidden" style={{ height: '400px' }}>
                {/* 简化的中国地图展示 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-4 w-full h-full p-8">
                    {currentData.slice(0, 8).map((region, index) => {
                      const intensity = (region[selectedTab === 'demands' ? 'demands' : 'achievements'] / maxValue);
                      return (
                        <div
                          key={region.code}
                          className="relative bg-white rounded-custom shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-accent-500"
                          onClick={() => setSelectedRegion(region.name)}
                          style={{ 
                            backgroundColor: `rgba(0, 255, 185, ${0.1 + intensity * 0.6})`,
                            minHeight: '80px'
                          }}
                        >
                          <div className="p-3 h-full flex flex-col justify-center">
                            <div className="text-sm font-semibold text-title mb-1">{region.name}</div>
                            <div className="text-xs text-gray-600 mb-2">
                              {selectedTab === 'demands' ? '需求' : '成果'}: {region[selectedTab === 'demands' ? 'demands' : 'achievements']}个
                            </div>
                            <div className="text-xs text-accent-600">
                              本月新增: {region.newThisMonth}个
                            </div>
                          </div>
                          
                          {/* 点击显示详情按钮 */}
                          {selectedRegion === region.name && (
                            <div className="absolute bottom-2 right-2">
                              <button className="text-xs bg-accent-500 text-white px-2 py-1 rounded">
                                查看详情
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* 地图图例 */}
              <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: 'rgba(0, 255, 185, 0.3)' }}></div>
                    <span className="text-gray-600">需求密度</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
                    <span className="text-gray-600">热点区域</span>
                  </div>
                </div>
                <div className="text-gray-500">
                  数据更新时间: 2023-09-30
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧统计区域 */}
        <div className="space-y-6">
          {/* 需求汇总 */}
          <div className="bg-white rounded-custom shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-title">需求汇总</h3>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>按需求数量</option>
                <option>按成果数量</option>
              </select>
            </div>
            
            {/* 柱状图 */}
            <div className="space-y-2">
              {currentData.slice(0, 6).map((region) => (
                <div key={region.code} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-16 truncate" title={region.name}>{region.name}</span>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-200 rounded-full h-6 relative">
                      <div 
                        className="bg-accent-500 h-6 rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${maxValue > 0 ? (region.value / maxValue) * 100 : 0}%` }}
                      >
                        <span className="text-xs text-white font-medium">{region.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>点击地区名称查看详情</span>
                <span>更新时间: 2023-09-30</span>
              </div>
            </div>
          </div>

          {/* 行业需求分布 */}
          <div className="bg-white rounded-custom shadow-md p-6">
            <h3 className="text-lg font-semibold text-title mb-4">行业需求分布</h3>
            
            {/* 饼图区域 */}
            <div className="relative mb-4">
              <div className="w-48 h-48 mx-auto relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {industryData.map((item, index) => {
                    const startAngle = industryData.slice(0, index).reduce((sum, d) => sum + (d.value / 100 * 360), 0);
                    const endAngle = startAngle + (item.value / 100 * 360);
                    const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
                    const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
                    const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
                    const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
                    const largeArcFlag = item.value > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={item.name}
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        stroke="white"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            
            {/* 图例 */}
            <div className="space-y-2">
              {industryData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              数据来源: 平台统计　　更新时间: 2023-09-30
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}