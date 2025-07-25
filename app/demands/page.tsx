// 需求板块页面

import { Metadata } from 'next';
import Link from 'next/link';
// import SmartMatching from '../../components/common/smart-matching';

export const metadata: Metadata = {
  title: '需求板块 - 供需对接平台',
  description: '发布需求、揭榜挂帅、需求跟随，发现合适的技术解决方案',
};

export default function DemandsPage() {
  return (
    <div>
      {/* 智能匹配功能 */}
      {/* <SmartMatching /> */}
      
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-title mb-4">需求板块</h1>
        <p className="text-gray-600">发布您的需求，寻找您的机会</p>
      </div>
      
      {/* 需求板块内容将在后续开发中实现 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-custom shadow-md p-6">
          <h3 className="text-lg font-semibold text-title mb-2">需求发布</h3>
          <p className="text-gray-600 mb-4">发布您的技术需求，获得专业解决方案</p>
          <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors">
            立即发布
          </button>
        </div>
        
        <div className="bg-white rounded-custom shadow-md p-6">
          <h3 className="text-lg font-semibold text-title mb-2">揭榜挂帅</h3>
          <p className="text-gray-600 mb-4">参与重大技术挑战，展示您的实力</p>
          <button className="bg-secondary-500 text-white px-4 py-2 rounded-custom hover:bg-secondary-600 transition-colors">
            查看榜单
          </button>
        </div>
        
        <div className="bg-white rounded-custom shadow-md p-6">
          <h3 className="text-lg font-semibold text-title mb-2">浏览大家的需求</h3>
          <p className="text-gray-600 mb-4">获取最新动态，关注感兴趣的需求</p>
          <Link href="/demands/browse">
            <button className="bg-primary-500 text-white px-4 py-2 rounded-custom hover:bg-primary-600 transition-colors">
              立即浏览
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}