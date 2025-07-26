'use client';

import Link from 'next/link';

const services = [
  {
    id: 'validation',
    title: '概念验证',
    description: '通过AI智能匹配验证您的方案在市场上是否成立',
    icon: '🧪',
    features: [
      '智能市场分析',
      '技术可行性评估',
      '商业模式验证',
      '风险评估报告'
    ],
    buttonText: '开始验证',
    path: '/services/validation'
  },
  {
    id: 'cooperation',
    title: '校企合作',
    description: '提供企业合作对接、咨询与学校合作服务',
    icon: '🎓',
    features: [
      '校企项目对接',
      '产学研合作',
      '人才培养方案',
      '技术转移服务'
    ],
    buttonText: '寻找合作',
    path: '/services/cooperation'
  },
  {
    id: 'financing',
    title: '金融融资',
    description: '根据价格、水平、投资倾向提供贷款担保等',
    icon: '💰',
    features: [
      '贷款担保服务',
      '投资对接',
      '融资方案设计',
      '资金使用指导'
    ],
    buttonText: '获取融资',
    path: '/services/funding',
    current: true
  }
];

export default function ServiceCards() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-title mb-8 text-center">
        专业服务
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-custom shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
              service.current ? 'ring-2 ring-accent-500' : ''
            }`}
          >
            {/* 服务卡片头部 */}
            <div className="p-6 pb-4">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-title">{service.title}</h3>
                  {service.current && (
                    <span className="inline-block bg-accent-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                      当前页面
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* 服务特性列表 */}
            <div className="px-6 pb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">服务特性</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 服务卡片按钮 */}
            <div className="p-6 pt-4 bg-gray-50">
              {service.current ? (
                <button className="w-full bg-accent-500 text-white py-3 px-4 rounded-custom font-medium cursor-default">
                  {service.buttonText}
                </button>
              ) : (
                <Link href={service.path}>
                  <button className="w-full bg-white border-2 border-accent-500 text-accent-600 py-3 px-4 rounded-custom font-medium hover:bg-accent-50 transition-colors">
                    {service.buttonText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}