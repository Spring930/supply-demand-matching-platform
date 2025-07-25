// 成果详情页面

'use client';

import { useParams, useRouter } from 'next/navigation';
import { MOCK_ACHIEVEMENTS, INDUSTRIES, REGIONS, SUBJECT_TYPES, ACHIEVEMENT_TYPES } from '@/lib/constants';
import { SmartMatching } from '@/components/common/smart-matching';

export default function AchievementDetailPage() {
  const params = useParams();
  const router = useRouter();
  const achievementId = params.id as string;

  // 查找对应的成果
  const achievement = MOCK_ACHIEVEMENTS.find(a => a.id === achievementId);

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">成果未找到</h1>
          <button 
            onClick={() => router.back()}
            className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors"
          >
            返回列表
          </button>
        </div>
      </div>
    );
  }

  const industry = INDUSTRIES.find(i => i.value === achievement.industry);
  const region = REGIONS.find(r => r.value === achievement.region);
  const subject = SUBJECT_TYPES.find(s => s.value === achievement.subject);
  const type = ACHIEVEMENT_TYPES.find(t => t.value === achievement.type);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 绿色头部区域 */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{achievement.title}</h1>
          <p className="text-xl mb-8">{achievement.researchUnit}</p>
          <button className="bg-white text-accent-600 px-8 py-3 rounded-custom hover:bg-gray-100 transition-colors font-medium border-2 border-white">
            智能匹配
          </button>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-12">
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

        {/* 成果概述 */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
              <h2 className="text-2xl font-bold text-title">成果概述</h2>
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 研发单位 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">🏢</span>
                <span className="font-medium text-accent-800">研发单位</span>
              </div>
              <div className="text-gray-800 font-medium">{achievement.researchUnit}</div>
            </div>

            {/* 产业领域 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">🏭</span>
                <span className="font-medium text-accent-800">产业领域</span>
              </div>
              <div className="text-gray-800 font-medium">
                {industry?.icon} {industry?.label}
              </div>
            </div>

            {/* 入库日期 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">📅</span>
                <span className="font-medium text-accent-800">入库日期</span>
              </div>
              <div className="text-gray-800 font-medium">{achievement.publishDate}</div>
            </div>

            {/* 技术成熟度 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">⚡</span>
                <span className="font-medium text-accent-800">技术成熟度</span>
              </div>
              <div className="text-gray-800 font-medium">{achievement.maturityLevel}</div>
            </div>

            {/* 标签 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">🏷️</span>
                <span className="font-medium text-accent-800">标签</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {achievement.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-custom">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 联系人 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">👤</span>
                <span className="font-medium text-accent-800">联系人</span>
              </div>
              <div className="text-gray-800 font-medium">{achievement.contactPerson}</div>
            </div>
          </div>
        </div>

        {/* 成果详情 */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
              <h2 className="text-2xl font-bold text-title">成果详情</h2>
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
            </div>
          </div>

          <div className="bg-white rounded-custom shadow-md p-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="whitespace-pre-line">
                {achievement.fullDescription}
              </div>
            </div>

            {/* 应用场景 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-title mb-4">应用场景</h3>
              <p className="text-gray-700 leading-relaxed">
                {achievement.applicationScenarios}
              </p>
            </div>

            {/* 主要成果 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-title mb-4">主要成果</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievement.achievements.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 合作方式 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-title mb-4">合作方式</h3>
              <p className="text-gray-700 leading-relaxed">
                {achievement.cooperationMode}
              </p>
            </div>

            {/* 成果统计 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="text-accent-500 mr-1">👁️</span>
                  浏览量: {achievement.viewCount}
                </span>
                <span className="flex items-center">
                  <span className="text-accent-500 mr-1">➕</span>
                  关注数: {achievement.followCount}
                </span>
                <span className="flex items-center">
                  <span className="text-accent-500 mr-1">📍</span>
                  地区: {region?.label}
                </span>
                <span className="flex items-center">
                  <span className="text-accent-500 mr-1">{subject?.icon}</span>
                  主体: {subject?.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 智能匹配功能 */}
        <SmartMatching />
      </div>
    </div>
  );
}