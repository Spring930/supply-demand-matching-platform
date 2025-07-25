// 服务中心页面

import { Metadata } from 'next';
import { SERVICE_MODULES } from '@/lib/constants';

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
      
      {/* 特色服务 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-title mb-6">特色服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_MODULES.filter(module => module.featured).map((module) => (
            <div key={module.id} className="bg-white rounded-custom shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mr-4">
                  <span className="text-2xl">
                    {module.icon === 'Users' && '👥'}
                    {module.icon === 'TestTube' && '🧪'}
                    {module.icon === 'GraduationCap' && '🎓'}
                    {module.icon === 'DollarSign' && '💰'}
                    {module.icon === 'Rocket' && '🚀'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-title">{module.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors">
                了解更多
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* 全部服务 */}
      <div>
        <h2 className="text-2xl font-semibold text-title mb-6">全部服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_MODULES.map((module) => (
            <div key={module.id} className="bg-white rounded-custom shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-custom flex items-center justify-center mr-6">
                <span className="text-3xl">
                  {module.icon === 'Users' && '👥'}
                  {module.icon === 'TestTube' && '🧪'}
                  {module.icon === 'GraduationCap' && '🎓'}
                  {module.icon === 'DollarSign' && '💰'}
                  {module.icon === 'Rocket' && '🚀'}
                  {module.icon === 'MessageCircle' && '💬'}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-title mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
              <button className="bg-secondary-500 text-white px-4 py-2 rounded-custom hover:bg-secondary-600 transition-colors">
                进入
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}