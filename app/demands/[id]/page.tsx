// 需求详情页面

'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { INDUSTRIES, REGIONS } from '@/lib/constants';
import type { Demand } from '@/lib/db/schema';

export default function DemandDetailPage() {
  const params = useParams();
  const router = useRouter();
  const demandId = params.id as string;
  
  const [demand, setDemand] = useState<Demand | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 获取需求详情
  useEffect(() => {
    fetchDemandDetail();
  }, [demandId]);

  const fetchDemandDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/demands/${demandId}`);
      const result = await response.json();
      
      if (result.success) {
        setDemand(result.data);
      } else {
        setError(result.error || '需求不存在');
      }
    } catch (err) {
      setError('网络错误，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">加载需求详情中...</p>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error || !demand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-custom flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">❌</span>
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">{error || '需求未找到'}</h1>
          <div className="space-x-4">
            <button 
              onClick={fetchDemandDetail}
              className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors"
            >
              重新加载
            </button>
            <button 
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-6 py-3 rounded-custom hover:bg-gray-600 transition-colors"
            >
              返回列表
            </button>
          </div>
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
          <p className="text-xl mb-8">{demand.organization || '未指定单位'}</p>
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
              <div className="text-gray-800 font-medium">{demand.organization || '未指定'}</div>
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
              <div className="text-gray-800 font-medium">{new Date(demand.createdAt).toLocaleDateString('zh-CN')}</div>
            </div>

            {/* 拟交易价格 */}
            <div className="bg-accent-50 rounded-custom p-4">
              <div className="flex items-center mb-2">
                <span className="text-accent-600 mr-2">💰</span>
                <span className="font-medium text-accent-800">拟交易价格</span>
              </div>
              <div className="text-gray-800 font-medium">
                {demand.budget || '面议'}
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
                {demand.contactPerson || '暂不公开'}
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
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {demand.fullDescription || demand.description}
            </div>

            {/* 需求要求 */}
            {demand.requirements && demand.requirements.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">技术要求</h3>
                <div className="grid gap-3">
                  {demand.requirements.map((req, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-custom border-l-4 border-blue-500">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span className="text-gray-800">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 需求标签 */}
            {demand.tags && demand.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">相关标签</h3>
                <div className="flex flex-wrap gap-2">
                  {demand.tags.map((tag, index) => (
                    <span 
                      key={index} 
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
                  <span className="mr-2">📋</span>
                  <span>需求类型: {demand.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📞</span>
                  <span>联系方式: {demand.contact}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⭐</span>
                  <span>紧急程度: {demand.urgency === 'urgent' ? '紧急' : demand.urgency === 'high' ? '重要' : '一般'}</span>
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