'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// 模拟需求数据
const mockDemands = [
  {
    id: '1',
    title: 'AI智能客服系统开发',
    description: '需要开发一套智能客服系统，支持多轮对话和意图识别...',
    image: '/api/placeholder/300/200',
    author: '阿里巴巴',
    location: '杭州',
    budget: '50-100万',
    tags: ['AI', '客服', '对话系统'],
    likes: 128,
    comments: 45,
    isHot: true,
  },
  {
    id: '2',
    title: '新能源汽车电池技术',
    description: '寻求新能源汽车电池管理系统的技术合作伙伴...',
    image: '/api/placeholder/300/200',
    author: '比亚迪',
    location: '深圳',
    budget: '100-200万',
    tags: ['新能源', '电池', '汽车'],
    likes: 256,
    comments: 78,
    isHot: true,
  },
  {
    id: '3',
    title: '区块链溯源平台',
    description: '需要构建食品供应链区块链溯源平台...',
    image: '/api/placeholder/300/200',
    author: '京东数科',
    location: '北京',
    budget: '面议',
    tags: ['区块链', '溯源', '供应链'],
    likes: 89,
    comments: 32,
    isHot: false,
  },
  {
    id: '4',
    title: '医疗影像AI诊断',
    description: '开发基于深度学习的医疗影像诊断系统...',
    image: '/api/placeholder/300/200',
    author: '腾讯医疗',
    location: '深圳',
    budget: '200-500万',
    tags: ['医疗', 'AI', '影像诊断'],
    likes: 345,
    comments: 112,
    isHot: true,
  },
  {
    id: '5',
    title: '智慧城市解决方案',
    description: '城市数字化转型整体解决方案需求...',
    image: '/api/placeholder/300/200',
    author: '华为',
    location: '深圳',
    budget: '1000万+',
    tags: ['智慧城市', '数字化', '物联网'],
    likes: 567,
    comments: 203,
    isHot: true,
  },
  {
    id: '6',
    title: '工业机器人控制系统',
    description: '高精度工业机器人控制系统技术需求...',
    image: '/api/placeholder/300/200',
    author: '富士康',
    location: '深圳',
    budget: '80-150万',
    tags: ['工业机器人', '控制系统', '自动化'],
    likes: 134,
    comments: 56,
    isHot: false,
  },
];

const hotSearches = [
  'AI人工智能', '新能源汽车', '区块链技术', '医疗健康', '智能制造',
  '物联网', '大数据分析', '云计算', '5G通信', '生物医药'
];

const searchHistory = [
  'AI图像识别', '新能源电池', '智能客服', '区块链溯源'
];

export default function DemandsBrowsePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('comprehensive');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearch(false);
    // 这里会触发搜索逻辑
  };

  const filteredDemands = mockDemands.filter(demand => {
    if (!searchQuery) return true;
    return demand.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           demand.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  if (showSearch) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 搜索页面头部 */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowSearch(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ←
              </button>
              <Input
                placeholder="搜索需求..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="flex-1"
                autoFocus
              />
              <Button onClick={() => handleSearch(searchQuery)}>搜索</Button>
            </div>
          </div>
        </div>

        {/* 搜索结果或搜索页面内容 */}
        <div className="container mx-auto px-4 py-6">
          {searchQuery ? (
            <>
              {/* 搜索结果筛选条件 */}
              <div className="flex items-center space-x-4 mb-6 bg-white p-4 rounded-custom shadow-sm">
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    filterBy === 'comprehensive' ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setFilterBy('comprehensive')}
                >
                  综合
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    filterBy === 'followers' ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setFilterBy('followers')}
                >
                  关注量
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    filterBy === 'region' ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setFilterBy('region')}
                >
                  地区
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    filterBy === 'industry' ? 'bg-accent-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setFilterBy('industry')}
                >
                  行业
                </button>
              </div>

              {/* 搜索结果 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDemands.map((demand) => (
                  <Card key={demand.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative aspect-video">
                      <div className="w-full h-48 bg-gray-200 rounded-t-custom flex items-center justify-center">
                        <span className="text-4xl">📋</span>
                      </div>
                      {demand.isHot && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                          🔥 热门
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-title mb-2 text-truncate">{demand.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 text-truncate-2">{demand.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{demand.author}</span>
                        <span>{demand.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-accent-600 font-medium">{demand.budget}</span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            ❤️ {demand.likes}
                          </span>
                          <span className="flex items-center">
                            💬 {demand.comments}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* 搜索历史 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-title mb-4">搜索历史</h3>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(item)}
                      className="px-3 py-2 bg-gray-100 rounded-custom text-sm text-gray-700 hover:bg-gray-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* 今日最热 */}
              <div>
                <h3 className="text-lg font-semibold text-title mb-4">今日最热需求</h3>
                <div className="flex flex-wrap gap-2">
                  {hotSearches.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(item)}
                      className="px-3 py-2 bg-accent-50 text-accent-700 rounded-custom text-sm hover:bg-accent-100"
                    >
                      🔥 {item}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部搜索栏 */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div 
            className="bg-gray-100 rounded-full px-4 py-2 flex items-center cursor-pointer"
            onClick={() => setShowSearch(true)}
          >
            <span className="text-gray-500">🔍</span>
            <span className="ml-2 text-gray-500">搜索需求...</span>
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="container mx-auto px-4 py-6">
        {/* 需求网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {mockDemands.map((demand) => (
            <Card key={demand.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative aspect-video">
                <div className="w-full h-48 bg-gray-200 rounded-t-custom flex items-center justify-center">
                  <span className="text-4xl">📋</span>
                </div>
                {demand.isHot && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    🔥 热门
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-title mb-2 text-truncate">{demand.title}</h3>
                <p className="text-gray-600 text-sm mb-3 text-truncate-2">{demand.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{demand.author}</span>
                  <span>{demand.location}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {demand.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600 font-medium">{demand.budget}</span>
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center text-gray-500 hover:text-red-500">
                      ❤️ {demand.likes}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-500">
                      💬 {demand.comments}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-yellow-500">
                      ⭐ 关注
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 底部导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-around py-2">
            <button
              className={`flex flex-col items-center py-2 px-4 ${
                activeTab === 'home' ? 'text-accent-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('home')}
            >
              <span className="text-xl">🏠</span>
              <span className="text-xs mt-1">首页热门</span>
            </button>
            <button
              className={`flex flex-col items-center py-2 px-4 ${
                activeTab === 'messages' ? 'text-accent-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('messages')}
            >
              <span className="text-xl">💬</span>
              <span className="text-xs mt-1">消息</span>
            </button>
            <button
              className={`flex flex-col items-center py-2 px-4 ${
                activeTab === 'profile' ? 'text-accent-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              <span className="text-xl">👤</span>
              <span className="text-xs mt-1">我</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}