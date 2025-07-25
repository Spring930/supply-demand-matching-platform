// 成果详情页面

'use client';

import { useParams, useRouter } from 'next/navigation';
import { MOCK_ACHIEVEMENTS, INDUSTRIES, REGIONS, SUBJECT_TYPES, ACHIEVEMENT_TYPES } from '@/lib/constants';
import { useState } from 'react';

export default function AchievementDetailPage() {
  const params = useParams();
  const router = useRouter();
  const achievementId = params.id as string;
  
  // 查找对应的成果
  const achievement = MOCK_ACHIEVEMENTS.find(a => a.id === achievementId);
  const [isFollowed, setIsFollowed] = useState(false);
  const [showPlainDescription, setShowPlainDescription] = useState(false);
  
  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-title mb-4">成果未找到</h1>
          <button 
            onClick={() => router.back()}
            className="text-accent-600 hover:text-accent-800 transition-colors"
          >
            返回成果列表
          </button>
        </div>
      </div>
    );
  }

  // 获取相关数据
  const industry = INDUSTRIES.find(i => i.value === achievement.industry);
  const region = REGIONS.find(r => r.value === achievement.region);
  const subject = SUBJECT_TYPES.find(s => s.value === achievement.subject);
  const achievementType = ACHIEVEMENT_TYPES.find(t => t.value === achievement.type);

  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  const toggleDescription = () => {
    setShowPlainDescription(!showPlainDescription);
  };

  return (
    <div className="min-h-screen bg-gray-50">


      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* 返回按钮 */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-accent-600 hover:text-accent-800 transition-colors"
          >
            <span className="mr-2">←</span>
            返回成果列表
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 成果概述 */}
            <div className="bg-white rounded-custom shadow-md p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                  <h2 className="text-2xl font-bold text-title">成果概述</h2>
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">研发单位</h3>
                  <p className="text-gray-700">{achievement.author}</p>
                </div>
                
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">{industry?.icon}</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">产业领域</h3>
                  <p className="text-gray-700">{industry?.label}</p>
                </div>
                
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">入库日期</h3>
                  <p className="text-gray-700">{achievement.publishDate}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">技术成熟度</h3>
                  <p className="text-gray-700">中期试验</p>
                </div>
                
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">🏷️</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">标签</h3>
                  <p className="text-gray-700">{achievementType?.label}</p>
                </div>
                
                <div className="bg-accent-50 rounded-custom p-4 text-center">
                  <div className="text-accent-600 mb-2">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="font-semibold text-title mb-1">联系人</h3>
                  <p className="text-gray-700">未公开</p>
                </div>
              </div>
            </div>

            {/* 成果详情 */}
            <div className="bg-white rounded-custom shadow-md p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                  <h2 className="text-2xl font-bold text-title">成果详情</h2>
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {showPlainDescription ? achievement.plainDescription : achievement.description}
                </p>
                
                {achievement.useCases && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-title mb-3">应用场景</h3>
                    <div className="flex flex-wrap gap-2">
                      {achievement.useCases.map((useCase, index) => (
                        <span 
                          key={index}
                          className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {achievement.tags && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-title mb-3">关键词</h3>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 智能匹配 */}
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-custom p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-custom flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-2">智能匹配</h3>
                <p className="text-accent-100 text-sm">
                  分析当前企业需求的产业领域方向，从科技成果中匹配相关的内容，生成可视化的需求分析报告
                </p>
              </div>
              <button className="w-full bg-white bg-opacity-20 text-white py-3 rounded-custom hover:bg-opacity-30 transition-colors backdrop-blur-sm">
                开始匹配
              </button>
            </div>

            {/* 成果统计 */}
            <div className="bg-white rounded-custom shadow-md p-6">
              <h3 className="text-lg font-semibold text-title mb-4">成果数据</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">浏览量</span>
                  <span className="font-semibold text-accent-600">{achievement.viewCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">关注数</span>
                  <span className="font-semibold text-accent-600">{achievement.followCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">所在地区</span>
                  <span className="font-semibold text-gray-700">{region?.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">主体类型</span>
                  <span className="font-semibold text-gray-700">{subject?.label}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button 
                  onClick={toggleFollow}
                  className={`w-full py-3 rounded-custom transition-colors font-medium ${
                    isFollowed 
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                      : 'bg-accent-500 text-white hover:bg-accent-600'
                  }`}
                >
                  {isFollowed ? '已关注' : '+ 关注成果'}
                </button>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="bg-white rounded-custom shadow-md p-6">
              <h3 className="text-lg font-semibold text-title mb-4">联系方式</h3>
              <p className="text-gray-600 text-sm mb-4">
                如需了解更多详情或洽谈合作，请联系相关负责人。
              </p>
              <button className="w-full bg-accent-500 text-white py-3 rounded-custom hover:bg-accent-600 transition-colors">
                申请联系方式
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}