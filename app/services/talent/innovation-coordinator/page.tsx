// 创新协同员专区页面

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '创新协同员专区 - 供需对接平台',
  description: '专业创新协同员，为您提供创新项目协调和团队协作服务',
};

const COORDINATOR_STEPS = [
  {
    id: '01',
    title: '创新注册',
    subtitle: '注册成为认证创新协同员',
    description: '完成平台注册认证，获得创新协同员资质，享受平台提供的项目对接和协调工具支持',
    icon: '🚀',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '02',
    title: '项目对接',
    subtitle: '智能匹配创新项目资源',
    description: '利用平台AI匹配系统，精准对接创新项目与团队资源，构建高效的创新协作网络',
    icon: '🤝',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '03',
    title: '协同管理',
    subtitle: '跟进项目执行与成果转化',
    description: '全程跟踪创新项目进展，协调各方资源，确保创新成果顺利转化为实际应用价值',
    icon: '📈',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
];

export default function InnovationCoordinatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面头部 */}
        <div className="mb-12">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link 
              href="/services" 
              className="inline-flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回服务中心
            </Link>
          </div>
          
          {/* 页面标题 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent-500 rounded-custom flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-title mb-4">创新协同员专区</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              专业创新协同员，致力于创新项目协调与团队协作。通过系统化的协同流程，推动创新成果高效转化。
            </p>
          </div>
        </div>

        {/* 步骤卡片 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COORDINATOR_STEPS.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 卡片容器 */}
                <div className={`
                  relative ${step.color} 
                  rounded-custom shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:-translate-y-2
                  p-8 h-full overflow-hidden
                `}>
                  {/* 背景装饰 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-full -translate-y-16 translate-x-16 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-50 rounded-full translate-y-12 -translate-x-12 z-10"></div>
                  
                  {/* 步骤编号 */}
                  <div className="flex items-center justify-between mb-6 relative z-20">
                    <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-4xl font-bold text-accent-600 relative z-30 mr-2">
                      {step.id}
                    </div>
                  </div>

                  {/* 卡片内容 */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-title mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* 操作按钮 */}
                  <div className="mt-8 relative z-10">
                    {step.id === '01' ? (
                      <Link href="/services/talent/innovation-coordinator/register">
                        <button className="
                          w-full bg-accent-500 hover:bg-accent-600 
                          text-white font-medium py-3 px-6 
                          rounded-custom border border-accent-500 hover:border-accent-600
                          transition-all duration-300
                          hover:scale-105 active:scale-95
                        ">
                          开始签约驭风
                        </button>
                      </Link>
                    ) : (
                      <div className="
                        w-full bg-primary-100 border border-primary-200
                        text-primary-600 font-medium py-3 px-6 
                        rounded-custom flex items-center justify-center
                        cursor-not-allowed opacity-80
                      ">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        请先完成创新协同员注册
                      </div>
                    )}
                  </div>

                  {/* 连接线（不是最后一个卡片） */}
                  {index < COORDINATOR_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-500/50 z-20 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 专区特色介绍 */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-custom shadow-lg p-8">
            <h2 className="text-2xl font-bold text-title mb-6 text-center">创新协同员专区特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">精准项目匹配</h3>
                  <p className="text-gray-600 text-sm">利用AI智能算法，精准匹配创新项目与团队资源，提高协作效率</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">创新资源整合</h3>
                  <p className="text-gray-600 text-sm">整合多方创新资源，构建完整的创新生态协作网络</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">全程项目跟踪</h3>
                  <p className="text-gray-600 text-sm">提供全程项目跟踪工具，实时监控项目进展和成果转化</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">专业认证体系</h3>
                  <p className="text-gray-600 text-sm">建立专业的创新协同员认证体系，确保服务质量和专业水准</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}