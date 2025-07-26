'use client';

const financialProducts = [
  {
    id: 'hangkebao',
    name: '杭科保',
    subtitle: '科技型企业专属担保产品',
    maxAmount: '200万元',
    guaranteeFee: '不超过1%',
    description: '专为科技型企业设计的融资担保产品，支持技术创新和产业化项目',
    features: [
      '最高额度200万元',
      '担保费率不超过1%',
      '审批流程简化',
      '专业团队服务'
    ],
    advantages: [
      '低成本融资',
      '快速审批',
      '专业指导',
      '风险分担'
    ],
    applyConditions: [
      '注册地在杭州市',
      '高新技术企业或科技型中小企业',
      '有明确的技术创新项目',
      '符合国家产业政策'
    ],
    icon: '🏛️',
    color: 'from-accent-500 to-accent-600'
  },
  {
    id: 'hangxindai',
    name: '杭信贷',
    subtitle: '外贸企业纯信用融资',
    maxAmount: '500万元',
    guaranteeFee: '纯信用、免抵押',
    description: '针对中小微外贸企业的纯信用、免抵押的融资服务产品',
    features: [
      '纯信用放贷',
      '无需抵押担保',
      '针对外贸企业',
      '灵活还款方式'
    ],
    advantages: [
      '无抵押要求',
      '信用评估',
      '快速放款',
      '灵活期限'
    ],
    applyConditions: [
      '中小微外贸企业',
      '有稳定的出口业务',
      '信用记录良好',
      '财务状况稳定'
    ],
    icon: '🌐',
    color: 'from-accent-500 to-accent-600'
  },
  {
    id: 'gaoqibao',
    name: '高企保',
    subtitle: '高新技术企业融资担保',
    maxAmount: '500万元',
    guaranteeFee: '不超过1%',
    description: '专为高新技术企业提供的融资担保服务，支持技术研发和产业化',
    features: [
      '最高额度500万元',
      '担保费率不超过1%',
      '专业技术评估',
      '全程跟踪服务'
    ],
    advantages: [
      '高额度支持',
      '低费率优惠',
      '专业评估',
      '持续服务'
    ],
    applyConditions: [
      '高新技术企业认定',
      '有核心技术或知识产权',
      '财务状况良好',
      '发展前景明确'
    ],
    icon: '🚀',
    color: 'from-accent-500 to-accent-600'
  }
];

export default function FinancialProducts() {
  return (
    <div className="mb-16 mt-20">
      <h2 className="text-3xl font-bold text-title mb-4">
        科技金融产品
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        为不同类型的科技企业提供专业的融资担保服务，助力企业发展
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {financialProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-custom shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* 产品头部 */}
            <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">{product.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-white text-opacity-90 text-sm">{product.subtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-white text-opacity-80 text-sm">最高额度</p>
                  <p className="text-xl font-bold">{product.maxAmount}</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-opacity-80 text-sm">担保费率</p>
                  <p className="text-xl font-bold">{product.guaranteeFee}</p>
                </div>
              </div>
              
              <p className="text-white text-opacity-90 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* 产品特色 */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-title mb-4">产品特色</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* 产品优势 */}
              <h4 className="text-lg font-semibold text-title mb-4">产品优势</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.advantages.map((advantage, index) => (
                  <span
                    key={index}
                    className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {advantage}
                  </span>
                ))}
              </div>

              {/* 申请条件 */}
              <h4 className="text-lg font-semibold text-title mb-4">申请条件</h4>
              <ul className="space-y-2 mb-6">
                {product.applyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="text-accent-500 mr-2 font-bold">•</span>
                    {condition}
                  </li>
                ))}
              </ul>

              {/* 申请按钮 */}
              <button className="w-full bg-accent-500 text-white py-3 px-4 rounded-custom font-medium hover:bg-accent-600 transition-colors">
                立即申请
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}