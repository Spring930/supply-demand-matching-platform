// 成果板块页面

import { Metadata } from 'next';
// import SmartMatching from '../../components/common/smart-matching';

export const metadata: Metadata = {
  title: '成果板块 - 供需对接平台',
  description: '展示科技成果、专利技术，实现智能匹配与成果转化',
};

export default function AchievementsPage() {
  return (
    <div>
      {/* 智能匹配功能 */}
      {/* <SmartMatching /> */}
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-title mb-4">成果板块</h1>
          <p className="text-gray-600">展示您的科技成果，找到合适的应用场景</p>
        </div>
        
        {/* 人才分区 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-title mb-6">人才专区</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-title">技术经纪人专区</h3>
              </div>
              <p className="text-gray-600 mb-4">专业技术经纪人，为您提供技术转移和商业化服务</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-custom hover:bg-blue-600 transition-colors w-full">
                进入专区
              </button>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-title">创新协同员专区</h3>
              </div>
              <p className="text-gray-600 mb-4">协同创新专家，协助产学研合作和跨领域协同</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-custom hover:bg-green-600 transition-colors w-full">
                进入专区
              </button>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-title">生态设计师专区</h3>
              </div>
              <p className="text-gray-600 mb-4">专业生态设计师，构建创新生态系统和平台</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-custom hover:bg-purple-600 transition-colors w-full">
                进入专区
              </button>
            </div>
          </div>
        </div>
        
        {/* 市场资源分区 */}
        <div>
          <h2 className="text-2xl font-bold text-title mb-6">市场资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-title">概念验证</h3>
              </div>
              <p className="text-gray-600 mb-4">通过AI智能匹配验证您的方案在市场上是否成立</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-custom hover:bg-orange-600 transition-colors w-full">
                开始验证
              </button>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-title">校企合作</h3>
              </div>
              <p className="text-gray-600 mb-4">提供企业合作对接、咨询与学校合作服务</p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-custom hover:bg-indigo-600 transition-colors w-full">
                寻找合作
              </button>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-title">金融融资</h3>
              </div>
              <p className="text-gray-600 mb-4">根据价格、水平、投资倾向提供贷款担保等</p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-custom hover:bg-yellow-600 transition-colors w-full">
                获取融资
              </button>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-title">项目孵化</h3>
              </div>
              <p className="text-gray-600 mb-4">提供投资机构与投资人的推荐与对接</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-custom hover:bg-red-600 transition-colors w-full">
                申请孵化
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}