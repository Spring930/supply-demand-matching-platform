// 服务中心页面

import { Metadata } from 'next';
import Link from 'next/link';
import { TALENT_MODULES, MARKET_RESOURCE_MODULES, SERVICE_MODULES } from '@/lib/constants';

export const metadata: Metadata = {
  title: '服务中心 - 供需对接平台',
  description: '人才专区、概念验证、校企合作、金融融资、项目孵化等专业服务',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-title mb-4">服务中心</h1>
        <p className="text-gray-600">专业的技术转移转化服务，助力创新成果落地</p>
      </div>
      
      {/* 人才专区 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-title mb-6">人才专区</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TALENT_MODULES.map((module) => (
            <div key={module.id} className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-title">{module.name}</h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{module.description}</p>
              <Link href={module.path}>
                <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors w-full mt-auto">
                  {module.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* 市场资源 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-title mb-6">市场资源</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_RESOURCE_MODULES.map((module) => (
            <div key={module.id} className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-title">{module.name}</h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{module.description}</p>
              <Link href={module.path}>
                <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors w-full mt-auto">
                  {module.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}