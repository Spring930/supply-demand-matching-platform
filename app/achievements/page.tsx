// 成果板块页面

import { Metadata } from 'next';
import Link from 'next/link';

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
        
        {/* 成果展示区域 - 待开发 */}
        <div className="bg-white rounded-custom shadow-md p-8 text-center">
          <div className="w-24 h-24 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🏆</span>
          </div>
          <h2 className="text-2xl font-semibold text-title mb-4">成果展示功能即将上线</h2>
          <p className="text-gray-600 mb-6">
            我们正在开发强大的成果展示功能，包括专利展示、技术成果发布、
            智能匹配推荐等功能，敬请期待！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors">
              提交成果信息
            </button>
            <button className="bg-primary-500 text-title px-6 py-3 rounded-custom hover:bg-primary-600 transition-colors">
              了解更多
            </button>
          </div>
        </div>
        
        {/* 快速导航 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-title mb-6">快速导航</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-title">需求浏览</h3>
              </div>
              <p className="text-gray-600 mb-4">浏览各类技术需求，找到适合您成果的应用场景</p>
              <Link href="/demands">
                <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors w-full">
                  浏览需求
                </button>
              </Link>
            </div>
            
            <div className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-title">服务中心</h3>
              </div>
              <p className="text-gray-600 mb-4">获取专业的技术转移转化服务，助力成果落地</p>
              <Link href="/services">
                <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors w-full">
                  查看服务
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}