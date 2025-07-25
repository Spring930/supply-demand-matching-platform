// 地图可视化页面

import { Metadata } from 'next';
// import SmartMatching from '../../components/common/smart-matching';

export const metadata: Metadata = {
  title: '地图可视化 - 供需对接平台',
  description: '全国供需分布热力图，多维度筛选和地理位置可视化分析',
};

export default function MapPage() {
  return (
    <div>
      {/* 智能匹配功能 */}
      {/* <SmartMatching /> */}
      
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-title mb-4">地图可视化</h1>
        <p className="text-gray-600">查看全国供需分布，发现区域合作机会</p>
      </div>
      
      {/* 地图可视化内容将在后续开发中实现 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-custom shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-title mb-4">筛选条件</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  区域选择
                </label>
                <select className="w-full border border-gray-300 rounded-custom px-3 py-2">
                  <option>全国</option>
                  <option>华北地区</option>
                  <option>华东地区</option>
                  <option>华南地区</option>
                  <option>华中地区</option>
                  <option>西南地区</option>
                  <option>西北地区</option>
                  <option>东北地区</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  数据类型
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    技术需求
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    科技成果
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    合作项目
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-custom shadow-md p-6">
            <h3 className="text-lg font-semibold text-title mb-4">统计信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">总需求数</span>
                <span className="font-semibold text-accent-500">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">总成果数</span>
                <span className="font-semibold text-secondary-500">856</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">匹配成功</span>
                <span className="font-semibold text-title">342</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-custom shadow-md p-6">
            <div className="h-96 bg-gray-100 rounded-custom flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">地图组件将在后续开发中实现</p>
                <p className="text-sm text-gray-500 mt-2">
                  支持省市区县多级热力图、实时数据更新
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}