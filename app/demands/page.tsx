'use client';

import { Metadata } from 'next';
import { useState, useMemo } from 'react';
import { MOCK_DEMANDS, DEMAND_TYPES, REGIONS, INDUSTRIES, SUBJECT_TYPES } from '@/lib/constants';

export default function DemandsPage() {
  const [selectedTab, setSelectedTab] = useState<'featured' | 'hot' | 'challenge'>('featured');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [followedDemands, setFollowedDemands] = useState<Set<string>>(new Set());

  // 跟随/取消跟随需求
  const toggleFollow = (demandId: string) => {
    setFollowedDemands(prev => {
      const newSet = new Set(prev);
      if (newSet.has(demandId)) {
        newSet.delete(demandId);
      } else {
        newSet.add(demandId);
      }
      return newSet;
    });
  };

  // 筛选需求
  const filteredDemands = useMemo(() => {
    return MOCK_DEMANDS.filter(demand => {
      return (selectedRegion === 'all' || demand.region === selectedRegion) &&
             (selectedIndustry === 'all' || demand.industry === selectedIndustry) &&
             (selectedType === 'all' || demand.type === selectedType);
    });
  }, [selectedRegion, selectedIndustry, selectedType]);

  // 获取推荐需求
  const getRecommendedDemands = () => {
    switch (selectedTab) {
      case 'hot':
        return filteredDemands
          .filter(d => d.category === 'hot')
          .sort((a, b) => b.viewCount - a.viewCount);
      case 'challenge':
        return filteredDemands
          .filter(d => d.category === 'challenge')
          .sort((a, b) => parseInt(b.budget.split('-')[1]) - parseInt(a.budget.split('-')[1]));
      default:
        return filteredDemands
          .filter(d => d.category === 'featured')
          .sort((a, b) => b.followCount - a.followCount);
    }
  };

  const displayDemands = getRecommendedDemands();

  // 获取状态颜色和文本
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'urgent':
        return { bg: 'bg-red-100', text: 'text-red-600', label: '🔥 紧急' };
      case 'hot':
        return { bg: 'bg-orange-100', text: 'text-orange-600', label: '🔥 热门' };
      case 'challenge':
        return { bg: 'bg-purple-100', text: 'text-purple-600', label: '🏆 挑战' };
      default:
        return { bg: 'bg-accent-100', text: 'text-accent-600', label: '⭐ 精选' };
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-title mb-4">需求板块</h1>
            <p className="text-gray-600">发布您的需求，寻找您的机会</p>
          </div>
          <button className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors flex items-center space-x-2 shadow-md">
            <span className="text-xl">🚀</span>
            <span className="font-medium">发布需求</span>
          </button>
        </div>
      </div>

      {/* 需求筛选 */}
      <div className="bg-white rounded-custom shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-title mb-4">需求筛选</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 地区筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">地区</label>
            <select 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="all">全部地区</option>
              {REGIONS.map(region => (
                <option key={region.value} value={region.value}>{region.label}</option>
              ))}
            </select>
          </div>

          {/* 行业筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">行业</label>
            <select 
              value={selectedIndustry} 
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="all">全部行业</option>
              {INDUSTRIES.map(industry => (
                <option key={industry.value} value={industry.value}>{industry.icon} {industry.label}</option>
              ))}
            </select>
          </div>

          {/* 需求类型筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">需求类型</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="all">全部类型</option>
              {DEMAND_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          {/* 预算范围 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">预算</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500">
              <option value="all">全部预算</option>
              <option value="low">100万以下</option>
              <option value="mid">100-1000万</option>
              <option value="high">1000万以上</option>
            </select>
          </div>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-custom p-1">
          {[
            { key: 'featured', label: '需求精选', icon: '⭐' },
            { key: 'hot', label: '热搜榜', icon: '🔥' },
            { key: 'challenge', label: '揭榜挂帅', icon: '🏆' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key as any)}
              className={`flex-1 px-4 py-2 rounded-custom text-sm font-medium transition-colors ${
                selectedTab === tab.key
                  ? 'bg-accent-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 需求列表 */}
      <div className="space-y-6">
        {displayDemands.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-custom flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">暂无匹配的需求</h3>
            <p className="text-gray-500">请尝试调整筛选条件</p>
          </div>
        ) : (
          displayDemands.map((demand) => {
            const statusStyle = getStatusStyle(demand.status);
            return (
              <div key={demand.id} className="bg-white rounded-custom shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* 头部信息 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">🎯</span>
                        <h3 className="text-xl font-semibold text-title">{demand.title}</h3>
                        <span className={`ml-2 px-2 py-1 ${statusStyle.bg} ${statusStyle.text} text-xs rounded-custom`}>
                          {statusStyle.label}
                        </span>
                      </div>
                      <p className="text-accent-600 font-medium mb-2">{demand.summary}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>🏢 {demand.demander}</span>
                        <span>📅 {demand.publishDate}</span>
                        <span>👁️ {demand.viewCount}</span>
                        <span>➕ {demand.followCount + (followedDemands.has(demand.id) ? 1 : 0)}</span>
                      </div>
                    </div>
                    
                    {/* 跟随按钮 */}
                    <button
                      onClick={() => toggleFollow(demand.id)}
                      className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        followedDemands.has(demand.id)
                          ? 'bg-accent-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-accent-100'
                      }`}
                    >
                      {followedDemands.has(demand.id) ? '✓' : '+'}
                    </button>
                  </div>

                  {/* 需求描述 */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700 block mb-2">需求描述</span>
                    <p className="text-gray-700 leading-relaxed">
                      {demand.description}
                    </p>
                  </div>

                  {/* 需求要求 */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700 block mb-2">技术要求</span>
                    <div className="flex flex-wrap gap-2">
                      {demand.requirements.map(req => (
                        <span key={req} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-custom border">
                          ✓ {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 标签 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {demand.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-custom">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 项目信息 */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">预算范围:</span>
                        <div className="font-medium text-green-600">{demand.budget}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">截止时间:</span>
                        <div className="font-medium text-orange-600">{demand.deadline}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">联系方式:</span>
                        <div className="font-medium text-blue-600">{demand.contact}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">所属行业:</span>
                        <div className="font-medium">
                          {INDUSTRIES.find(i => i.value === demand.industry)?.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 底部操作 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center text-gray-500">
                        {INDUSTRIES.find(i => i.value === demand.industry)?.icon}
                        <span className="ml-1">{INDUSTRIES.find(i => i.value === demand.industry)?.label}</span>
                      </span>
                      <span className="flex items-center text-gray-500">
                        📍 {REGIONS.find(r => r.value === demand.region)?.label}
                      </span>
                    </div>
                    
                    <div>
                      <button className="px-4 py-2 bg-accent-500 text-white rounded-custom hover:bg-accent-600 transition-colors text-sm">
                        了解详情
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 发布需求按钮 */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 bg-accent-500 text-white rounded-full shadow-lg hover:bg-accent-600 transition-colors flex items-center justify-center">
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}