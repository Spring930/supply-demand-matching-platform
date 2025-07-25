'use client';

import { Metadata } from 'next';
import { useState, useEffect } from 'react';

// 模拟地区数据
const REGION_DATA = [
  { name: '北京', code: 'BJ', demands: 248, achievements: 156, newThisMonth: 32, mainIndustries: ['人工智能', '新材料'], color: '#00FFB9' },
  { name: '上海', code: 'SH', demands: 245, achievements: 142, newThisMonth: 28, mainIndustries: ['生物技术', '智能制造'], color: '#00E6A7' },
  { name: '广东', code: 'GD', demands: 276, achievements: 189, newThisMonth: 45, mainIndustries: ['电子信息', '新能源'], color: '#00CC95' },
  { name: '江苏', code: 'JS', demands: 298, achievements: 167, newThisMonth: 38, mainIndustries: ['智能制造', '新材料'], color: '#00B383' },
  { name: '浙江', code: 'ZJ', demands: 271, achievements: 143, newThisMonth: 29, mainIndustries: ['数字经济', '生物医药'], color: '#009971' },
  { name: '四川', code: 'SC', demands: 272, achievements: 134, newThisMonth: 31, mainIndustries: ['电子信息', '航空航天'], color: '#008866' },
  { name: '湖北', code: 'HB', demands: 261, achievements: 128, newThisMonth: 26, mainIndustries: ['光电子', '生物技术'], color: '#007755' },
  { name: '山东', code: 'SD', demands: 285, achievements: 158, newThisMonth: 33, mainIndustries: ['海洋科技', '新能源'], color: '#006644' },
];

// 行业需求分布数据
const INDUSTRY_DATA = [
  { name: '新能源', value: 27, color: '#FF8C00', demands: 312 },
  { name: '人工智能', value: 23, color: '#00FFB9', demands: 268 },
  { name: '生物技术', value: 18, color: '#4169E1', demands: 210 },
  { name: '智能制造', value: 15, color: '#32CD32', demands: 175 },
  { name: '新材料', value: 12, color: '#FFD700', demands: 140 },
  { name: '其他', value: 5, color: '#9AA0A6', demands: 58 },
];

// 热门需求数据
const HOT_DEMANDS = [
  {
    id: '1',
    title: '高效太阳能电池技术合作需求',
    company: '阳光新能源科技有限公司',
    location: '北京',
    solutions: 10,
    status: 'urgent',
    industry: '新能源'
  },
  {
    id: '2', 
    title: '工业物联网预测性维护解决方案',
    company: '华远智能制造股份公司',
    location: '上海',
    solutions: 8,
    status: 'hot',
    industry: '智能制造'
  },
  {
    id: '3',
    title: '糖尿病早期筛查技术',
    company: '康泰医疗器械有限公司', 
    location: '广州',
    solutions: 6,
    status: 'hot',
    industry: '医疗健康'
  },
];

export default function MapPage() {
  const [selectedTab, setSelectedTab] = useState<'demands' | 'achievements'>('demands');
  const [selectedRegion, setSelectedRegion] = useState<string>('全国');
  const [selectedIndustry, setSelectedIndustry] = useState('全部行业');
  const [selectedTimeRange, setSelectedTimeRange] = useState('全部时间');
  const [selectedType, setSelectedType] = useState('全部类型');
  const [sortBy, setSortBy] = useState('按数量');

  // 获取当前显示的数据
  const getCurrentData = () => {
    if (selectedTab === 'demands') {
      return REGION_DATA.map(region => ({ ...region, value: region.demands }));
    } else {
      return REGION_DATA.map(region => ({ ...region, value: region.achievements }));
    }
  };

  const currentData = getCurrentData();
  const maxValue = Math.max(...currentData.map(d => d.value));

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
                  <span>当前层级: 全国 > {selectedRegion}</span>
                </div>
              </div>
            </div>
            
            {/* 地图容器 */}
            <div className="p-6">
              <div className="relative bg-gray-50 rounded-custom overflow-hidden" style={{ height: '400px' }}>
                {/* 简化的中国地图展示 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-4 w-full h-full p-8">
                    {REGION_DATA.slice(0, 8).map((region, index) => {
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
              {REGION_DATA.slice(0, 6).map((region) => (
                <div key={region.code} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-12">{region.code}</span>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-200 rounded-full h-6 relative">
                      <div 
                        className="bg-accent-500 h-6 rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${(region.demands / 300) * 100}%` }}
                      >
                        <span className="text-xs text-white font-medium">{region.demands}</span>
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
                  {INDUSTRY_DATA.map((item, index) => {
                    const startAngle = INDUSTRY_DATA.slice(0, index).reduce((sum, d) => sum + (d.value / 100 * 360), 0);
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
              {INDUSTRY_DATA.map((item) => (
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

      {/* 热门需求 */}
      <div className="mt-8 bg-white rounded-custom shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-xl mr-2">🔥</span>
            <h3 className="text-lg font-semibold text-title">热门需求</h3>
          </div>
          <button className="text-accent-600 hover:text-accent-700 text-sm">
            更多
          </button>
        </div>
        
        <div className="space-y-4">
          {HOT_DEMANDS.map((demand) => (
            <div key={demand.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-custom hover:bg-gray-100 transition-colors">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold text-title mr-3">{demand.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    demand.status === 'urgent' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-accent-100 text-accent-700'
                  }`}>
                    {demand.status === 'urgent' ? '紧急' : '热门'}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span>🏢 {demand.company}</span>
                  <span>📍 {demand.location}</span>
                  <span>💡 {demand.solutions}个对接方案</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">{demand.industry}</div>
                <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors text-sm">
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}