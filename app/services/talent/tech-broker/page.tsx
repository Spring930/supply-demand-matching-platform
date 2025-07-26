// 技术经纪人专区页面

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '技术经纪人专区 - 供需对接平台',
  description: '专业技术经纪人，为您提供技术转移和商业化服务',
};

const BROKER_STEPS = [
  {
    id: '01',
    title: '签约驭风',
    subtitle: '与驭风签约',
    description: '与驭风签约，可以使用由驭风提供的成果挖掘匹配等数据工具',
    icon: '📝',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '02',
    title: '资料更新',
    subtitle: '更新您的技术经纪人资料',
    description: '更新您的技术经纪人资料，并在驭风的线上平台展示',
    icon: '👤',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
  {
    id: '03',
    title: '工作记录',
    subtitle: '添加项目跟进记录',
    description: '添加项目跟进记录，并根据实际情况况进行进度情况，作为证明材料参与绩效考核',
    icon: '📊',
    color: 'bg-white border-2 border-accent-200 hover:border-accent-500',
  },
];

export default function TechBrokerPage() {
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
                <span className="text-3xl">💼</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-title mb-4">技术经纪人专区</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              专业技术经纪人，为您提供技术转移和商业化服务。通过系统化的流程，助力科技成果快速转化。
            </p>
          </div>
        </div>

        {/* 步骤卡片 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BROKER_STEPS.map((step, index) => (
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
                      <Link href="/services/talent/tech-broker/contract">
                        <button className="
                          w-full bg-accent-500 hover:bg-accent-600 
                          text-white font-medium py-3 px-6 
                          rounded-custom border border-accent-500 hover:border-accent-600
                          transition-all duration-300
                          hover:scale-105 active:scale-95
                        ">
                          开始{step.title}
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
                        请先成为签约技术经纪人
                      </div>
                    )}
                  </div>

                  {/* 连接线（不是最后一个卡片） */}
                  {index < BROKER_STEPS.length - 1 && (
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

        {/* 底部信息 */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-custom shadow-md p-8">
            <h2 className="text-2xl font-bold text-title mb-4">专业服务保障</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-title mb-2">精准匹配</h3>
                <p className="text-sm text-gray-600">基于AI算法的智能匹配系统</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-custom flex items-center justify-center mb-3">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-title mb-2">安全保障</h3>
                <p className="text-sm text-gray-600">全程数据加密和隐私保护</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-title mb-2">高效转化</h3>
                <p className="text-sm text-gray-600">专业团队全程跟进服务</p>
              </div>
            </div>
            
            {/* 联系方式 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">如需帮助，请联系我们的专业团队</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="tel:400-123-4567" 
                  className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  400-123-4567
                </a>
                <a 
                  href="mailto:broker@platform.com" 
                  className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  broker@platform.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}