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
          <button 
            onClick={() => {
              const smartMatchingSection = document.querySelector('[data-smart-matching]');
              if (smartMatchingSection) {
                smartMatchingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-accent-600 px-8 py-3 rounded-custom hover:bg-gray-100 transition-colors font-medium border-2 border-white"
          >
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
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent-500 transform rotate-45 mr-4"></div>
              <h2 className="text-3xl font-bold text-title tracking-wide">成果概述</h2>
              <div className="w-3 h-3 bg-accent-500 transform rotate-45 ml-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 研发单位 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">🏢</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">研发单位</span>
              </div>
              <div className="text-gray-800 font-medium text-lg leading-relaxed">{achievement.researchUnit}</div>
            </div>

            {/* 产业领域 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">🏭</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">产业领域</span>
              </div>
              <div className="text-gray-800 font-medium text-lg leading-relaxed">
                {industry?.icon} {industry?.label}
              </div>
            </div>

            {/* 入库日期 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">📅</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">入库日期</span>
              </div>
              <div className="text-gray-800 font-medium text-lg leading-relaxed">{achievement.publishDate}</div>
            </div>

            {/* 技术成熟度 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">⚡</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">技术成熟度</span>
              </div>
              <div className="text-gray-800 font-medium text-lg leading-relaxed">{achievement.maturityLevel}</div>
            </div>

            {/* 标签 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">🏷️</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">标签</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-accent-200 text-accent-700 text-sm rounded-full font-medium hover:bg-accent-300 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 联系人 */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-custom p-6 border border-accent-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-3">
                <span className="text-accent-600 mr-3 text-xl">👤</span>
                <span className="font-semibold text-accent-800 text-sm uppercase tracking-wide">联系人</span>
              </div>
              <div className="text-gray-800 font-medium text-lg leading-relaxed">{achievement.contactPerson}</div>
            </div>
          </div>
        </div>

        {/* 成果详情 */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent-500 transform rotate-45 mr-4"></div>
              <h2 className="text-3xl font-bold text-title tracking-wide">成果详情</h2>
              <div className="w-3 h-3 bg-accent-500 transform rotate-45 ml-4"></div>
            </div>
          </div>

          <div className="bg-white rounded-custom shadow-lg p-10 border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="whitespace-pre-line text-base leading-8">
                {achievement.fullDescription}
              </div>
            </div>

            {/* 应用场景 */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-title mb-6 flex items-center">
                <span className="text-accent-500 mr-2">📊</span>
                应用场景
              </h3>
              <p className="text-gray-700 leading-8 text-base">
                {achievement.applicationScenarios}
              </p>
            </div>

            {/* 主要成果 */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-title mb-6 flex items-center">
                <span className="text-accent-500 mr-2">🏆</span>
                主要成果
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievement.achievements.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-accent-50 rounded-custom">
                    <span className="text-accent-500 mr-3 text-lg mt-1">✓</span>
                    <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 合作方式 */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-title mb-6 flex items-center">
                <span className="text-accent-500 mr-2">🤝</span>
                合作方式
              </h3>
              <p className="text-gray-700 leading-8 text-base">
                {achievement.cooperationMode}
              </p>
            </div>

            {/* 成果统计 */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center p-4 bg-accent-50 rounded-custom">
                  <span className="text-accent-500 mr-2 text-lg">👁️</span>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-title">{achievement.viewCount}</div>
                    <div className="text-sm text-gray-500">浏览量</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-accent-50 rounded-custom">
                  <span className="text-accent-500 mr-2 text-lg">➕</span>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-title">{achievement.followCount}</div>
                    <div className="text-sm text-gray-500">关注数</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-accent-50 rounded-custom">
                  <span className="text-accent-500 mr-2 text-lg">📍</span>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-title">{region?.label}</div>
                    <div className="text-sm text-gray-500">地区</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-accent-50 rounded-custom">
                  <span className="text-accent-500 mr-2 text-lg">{subject?.icon}</span>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-title">{subject?.label}</div>
                    <div className="text-sm text-gray-500">主体</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 智能匹配功能 */}
        <div data-smart-matching>
          <SmartMatching />
        </div>
      </div>
    </div>
  );
}