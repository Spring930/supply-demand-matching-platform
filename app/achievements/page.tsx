// 成果板块页面

'use client';

import { Metadata } from 'next';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_ACHIEVEMENTS, ACHIEVEMENT_TYPES, REGIONS, INDUSTRIES, SUBJECT_TYPES } from '@/lib/constants';

// export const metadata: Metadata = {
//   title: '成果板块 - 供需对接平台',
//   description: '展示科技成果、专利技术，实现智能匹配与成果转化',
// };

export default function AchievementsPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'featured' | 'hot'>('featured');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showPlainDescription, setShowPlainDescription] = useState<Record<string, boolean>>({});
  const [followedAchievements, setFollowedAchievements] = useState<Set<string>>(new Set());

  // 切换描述显示模式
  const toggleDescription = (achievementId: string) => {
    setShowPlainDescription(prev => ({
      ...prev,
      [achievementId]: !prev[achievementId]
    }));
  };

  // 跟随/取消跟随成果
  const toggleFollow = (achievementId: string) => {
    setFollowedAchievements(prev => {
      const newSet = new Set(prev);
      if (newSet.has(achievementId)) {
        newSet.delete(achievementId);
      } else {
        newSet.add(achievementId);
      }
      return newSet;
    });
  };

  // 筛选成果
  const filteredAchievements = useMemo(() => {
    return MOCK_ACHIEVEMENTS.filter(achievement => {
      return (selectedRegion === 'all' || achievement.region === selectedRegion) &&
             (selectedIndustry === 'all' || achievement.industry === selectedIndustry) &&
             (selectedSubject === 'all' || achievement.subject === selectedSubject) &&
             (selectedType === 'all' || achievement.type === selectedType);
    });
  }, [selectedRegion, selectedIndustry, selectedSubject, selectedType]);

  // 获取推荐成果
  const getRecommendedAchievements = () => {
    switch (selectedTab) {
      case 'hot':
        return filteredAchievements
          .sort((a, b) => b.viewCount - a.viewCount)
          .slice(0, 10);
      default:
        return filteredAchievements.filter(a => a.isHot);
    }
  };

  const displayAchievements = getRecommendedAchievements();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-title mb-4">成果板块</h1>
            <p className="text-gray-600">发现优秀成果，探索创新应用场景</p>
          </div>
          <button 
            onClick={() => router.push('/achievements/publish')}
            className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors flex items-center space-x-2 shadow-md"
          >
            <span className="text-xl">📝</span>
            <span className="font-medium">发布成果</span>
          </button>
        </div>
      </div>

      {/* 筛选器 */}
      <div className="bg-white rounded-custom shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-title mb-4">成果筛选</h2>
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

          {/* 主体筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">主体</label>
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="all">全部主体</option>
              {SUBJECT_TYPES.map(subject => (
                <option key={subject.value} value={subject.value}>{subject.icon} {subject.label}</option>
              ))}
            </select>
          </div>

          {/* 类型筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">类型</label>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="all">全部类型</option>
              {ACHIEVEMENT_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.icon} {type.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-custom p-1">
          {[
            { key: 'featured', label: '成果精选', icon: '⭐' },
            { key: 'hot', label: '热搜榜', icon: '🔥' }
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

      {/* 成果列表 */}
      <div className="space-y-6">
        {displayAchievements.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-custom flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">暂无匹配的成果</h3>
            <p className="text-gray-500">请尝试调整筛选条件</p>
          </div>
        ) : (
          displayAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-custom shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* 头部信息 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">
                        {ACHIEVEMENT_TYPES.find(t => t.value === achievement.type)?.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-title">{achievement.title}</h3>
                      {achievement.isHot && (
                        <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-custom">
                          🔥 热门
                        </span>
                      )}
                    </div>
                    <p className="text-accent-600 font-medium mb-2">{achievement.summary}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>👤 {achievement.author}</span>
                      <span>📅 {achievement.publishDate}</span>
                      <span>👁️ {achievement.viewCount}</span>
                      <span>➕ {achievement.followCount + (followedAchievements.has(achievement.id) ? 1 : 0)}</span>
                    </div>
                  </div>
                  
                  {/* 跟随按钮 */}
                  <button
                    onClick={() => toggleFollow(achievement.id)}
                    className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      followedAchievements.has(achievement.id)
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-accent-100'
                    }`}
                  >
                    {followedAchievements.has(achievement.id) ? '✓' : '+'}
                  </button>
                </div>

                {/* 描述内容 */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700 block mb-2">成果描述</span>
                  <p className="text-gray-700 leading-relaxed">
                    {showPlainDescription[achievement.id] 
                      ? achievement.plainDescription 
                      : achievement.description}
                  </p>
                </div>

                {/* 标签和应用场景 */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {achievement.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-custom">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">应用场景：</span>
                    <span className="text-sm text-gray-600 ml-2">
                      {achievement.useCases.join(' • ')}
                    </span>
                  </div>
                </div>

                {/* 底部操作 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center text-gray-500">
                      {INDUSTRIES.find(i => i.value === achievement.industry)?.icon}
                      <span className="ml-1">{INDUSTRIES.find(i => i.value === achievement.industry)?.label}</span>
                    </span>
                    <span className="flex items-center text-gray-500">
                      📍 {REGIONS.find(r => r.value === achievement.region)?.label}
                    </span>
                    <span className="flex items-center text-gray-500">
                      {SUBJECT_TYPES.find(s => s.value === achievement.subject)?.icon}
                      <span className="ml-1">{SUBJECT_TYPES.find(s => s.value === achievement.subject)?.label}</span>
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => toggleDescription(achievement.id)}
                      className="px-4 py-2 bg-accent-500 text-white rounded-custom hover:bg-accent-600 transition-colors text-sm"
                    >
                      通俗解释
                    </button>
                    <button 
                      onClick={() => router.push(`/achievements/${achievement.id}`)}
                      className="px-4 py-2 bg-secondary-500 text-white rounded-custom hover:bg-secondary-600 transition-colors text-sm"
                    >
                      了解详情
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 发布成果按钮 */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => router.push('/achievements/publish')}
          className="w-14 h-14 bg-accent-500 text-white rounded-full shadow-lg hover:bg-accent-600 transition-colors flex items-center justify-center"
        >
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}