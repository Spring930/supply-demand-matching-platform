// 个人中心页面

import { Metadata } from 'next';
import { LogoutButton } from '@/components/common/logout-button';

export const metadata: Metadata = {
  title: '个人中心 - 供需对接平台',
  description: '管理您的需求与成果，查看数据统计与合作进展',
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-title mb-4">个人中心</h1>
        <p className="text-gray-600">管理您的账户信息、需求成果和合作项目</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 侧边栏 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-custom shadow-md p-6 flex flex-col h-fit">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="font-semibold text-title">用户名</h3>
              <p className="text-sm text-gray-600">企业用户</p>
            </div>
            
            <nav className="space-y-2 flex-1">
              <a href="#" className="block px-4 py-2 bg-accent-50 text-accent-700 rounded-custom">
                个人信息
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-custom">
                我的需求
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-custom">
                我的成果
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-custom">
                合作项目
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-custom">
                数据统计
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-custom">
                账户设置
              </a>
            </nav>
            
            {/* 退出登录按钮 */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <LogoutButton />
            </div>
          </div>
        </div>
        
        {/* 主内容区 */}
        <div className="lg:col-span-3">
          {/* 数据看板 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-custom shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-title mb-2">12</div>
              <div className="text-gray-600">发布需求</div>
            </div>
            <div className="bg-white rounded-custom shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-title mb-2">8</div>
              <div className="text-gray-600">发布成果</div>
            </div>
            <div className="bg-white rounded-custom shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-title mb-2">5</div>
              <div className="text-gray-600">匹配成功</div>
            </div>
            <div className="bg-white rounded-custom shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-title mb-2">3</div>
              <div className="text-gray-600">进行中项目</div>
            </div>
          </div>
          
          {/* 最近活动 */}
          <div className="bg-white rounded-custom shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-title mb-4">最近活动</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-custom">
                <div className="w-10 h-10 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span>📄</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-title">发布了新需求: AI图像识别技术</div>
                  <div className="text-sm text-gray-600">2小时前</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-custom">
                <div className="w-10 h-10 bg-secondary-100 rounded-custom flex items-center justify-center mr-4">
                  <span>🔬</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-title">收到成果匹配: 深度学习算法优化</div>
                  <div className="text-sm text-gray-600">1天前</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-custom">
                <div className="w-10 h-10 bg-primary-100 rounded-custom flex items-center justify-center mr-4">
                  <span>🤝</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-title">与清华大学达成合作意向</div>
                  <div className="text-sm text-gray-600">3天前</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 快速操作 */}
          <div className="bg-white rounded-custom shadow-md p-6">
            <h3 className="text-lg font-semibold text-title mb-4">快速操作</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border-2 border-dashed border-accent-200 rounded-custom hover:border-accent-400 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">➕</div>
                  <div className="font-medium text-title">发布需求</div>
                </div>
              </button>
              
              <button className="p-4 border-2 border-dashed border-secondary-200 rounded-custom hover:border-secondary-400 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-medium text-title">发布成果</div>
                </div>
              </button>
              
              <button className="p-4 border-2 border-dashed border-primary-200 rounded-custom hover:border-primary-400 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="font-medium text-title">浏览匹配</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}