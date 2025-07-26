// 需求详情页面

'use client';

import { useParams, useRouter } from 'next/navigation';
import { MOCK_DEMANDS, INDUSTRIES, REGIONS } from '@/lib/constants';

export default function DemandDetailPage() {
  const params = useParams();
  const router = useRouter();
  const demandId = params.id as string;

  // 查找对应的需求
  const demand = MOCK_DEMANDS.find(d => d.id === demandId);

  if (!demand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">需求未找到</h1>
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

  const industry = INDUSTRIES.find(i => i.value === demand.industry);
  const region = REGIONS.find(r => r.value === demand.region);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 绿色头部区域 */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{demand.title}</h1>
          <p className="text-xl mb-8">{demand.organization}</p>
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
            返回需求列表
          </button>
        </div>

        {/* 需求概述 */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
              <h2 className="text-2xl font-bold text-title">需求概述</h2>
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 需求单位 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">🏢</span>
                <span className="font-medium text-accent-800">需求单位</span>
              </div>
              <div className="text-gray-800 font-medium">{demand.organization}</div>
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
              <div className="text-gray-800 font-medium">{demand.publishDate}</div>
            </div>

            {/* 拟交易价格 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">💰</span>
                <span className="font-medium text-accent-800">拟交易价格</span>
              </div>
              <div className="text-gray-800 font-medium">
                {demand.budget ? `${demand.budget}万元` : '面议'}
              </div>
            </div>

            {/* 需求时效 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">⏰</span>
                <span className="font-medium text-accent-800">需求时效</span>
              </div>
              <div className="text-gray-800 font-medium">长期</div>
            </div>

            {/* 联系人 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">👤</span>
                <span className="font-medium text-accent-800">联系人</span>
              </div>
              <div className="text-gray-800 font-medium">
                {demand.contact || '暂不公开'}
              </div>
            </div>
          </div>
        </div>

        {/* 需求详情 */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
              <h2 className="text-2xl font-bold text-title">需求详情</h2>
              <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
            </div>
          </div>

          <div className="bg-white rounded-custom shadow-md p-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {demand.fullDescription || (demand as any).description}
            </div>

            {/* 需求标签 */}
            {demand.tags && demand.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">相关标签</h3>
                <div className="flex flex-wrap gap-2">
                  {demand.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-accent-100 text-accent-800 text-sm rounded-custom"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 需求信息补充 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>{region?.label}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">👁️</span>
                  <span>{demand.viewCount} 次浏览</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📊</span>
                  <span>{demand.applicantCount || 0} 人申请</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⭐</span>
                  <span>{demand.urgency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部智能匹配区域 */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">智能匹配</h3>
              <p className="text-xl text-accent-100">
                分析当前企业需求的产业领域方向，从科技成果中匹配最相关的内容，生成可视化的需求分析报告
              </p>
            </div>
            <div className="flex-shrink-0 ml-8">
              <button className="bg-white text-accent-600 px-8 py-4 rounded-custom hover:bg-gray-100 transition-colors font-medium text-lg">
                开始匹配
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}