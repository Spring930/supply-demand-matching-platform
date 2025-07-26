// 生态设计师专区页面

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '生态设计师专区 - 供需对接平台',
  description: '专业生态设计师，为您提供可持续发展设计和生态系统构建服务',
};

const ECO_DESIGNER_STEPS = [
  {
    id: '01',
    title: '生态认证',
    subtitle: '获得专业生态设计师认证',
    description: '通过平台专业认证体系，成为认证生态设计师，获得生态设计项目的参与资格和专业工具支持',
    icon: '🌱',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '02',
    title: '方案设计',
    subtitle: '构建可持续发展解决方案',
    description: '运用生态设计原理，为客户提供环保、可持续的设计方案，平衡经济效益与生态保护',
    icon: '🎨',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '03',
    title: '实施评估',
    subtitle: '跟踪项目效果与生态影响',
    description: '全程跟踪设计方案实施效果，定期评估生态影响，持续优化设计方案的生态价值',
    icon: '📊',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
];

export default function EcoDesignerPage() {
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
                <span className="text-3xl">🌿</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-title mb-4">生态设计师专区</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              专业生态设计师，致力于可持续发展设计和生态系统构建。通过科学的生态设计原理，创造环保与经济并重的解决方案。
            </p>
          </div>
        </div>

        {/* 步骤卡片 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ECO_DESIGNER_STEPS.map((step, index) => (
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
                      <Link href="/services/talent/eco-designer/certification">
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
                        请先完成生态设计师认证
                      </div>
                    )}
                  </div>

                  {/* 连接线（不是最后一个卡片） */}
                  {index < ECO_DESIGNER_STEPS.length - 1 && (
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
            <h2 className="text-2xl font-bold text-title mb-6 text-center">生态设计师专区特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">可持续设计理念</h3>
                  <p className="text-gray-600 text-sm">基于生态循环原理，创造环保可持续的设计解决方案</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🔬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">科学评估体系</h3>
                  <p className="text-gray-600 text-sm">建立科学的生态影响评估体系，量化设计方案的生态价值</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🤝</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">跨界协作网络</h3>
                  <p className="text-gray-600 text-sm">构建设计师、环保专家、企业的协作网络，实现生态设计的产业化</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-title mb-2">长期价值追踪</h3>
                  <p className="text-gray-600 text-sm">提供长期的生态价值追踪服务，确保设计方案的持续生态效益</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 生态设计原则 */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-custom p-8">
            <h2 className="text-2xl font-bold text-title mb-6 text-center">生态设计核心原则</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-500 rounded-custom flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-lg font-semibold text-title mb-2">循环再生</h3>
                <p className="text-gray-600 text-sm">设计遵循自然循环规律，实现资源的循环利用</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-500 rounded-custom flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-title mb-2">生态平衡</h3>
                <p className="text-gray-600 text-sm">维护生态系统平衡，实现经济发展与环保的协调</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-500 rounded-custom flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-title mb-2">可持续性</h3>
                <p className="text-gray-600 text-sm">确保设计方案的长期可持续性和生态效益</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}