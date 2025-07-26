'use client';

import Image from 'next/image';
import { REGIONS } from '@/lib/constants';
import type { MOCK_COOPERATIONS } from '@/lib/constants';

type CooperationData = typeof MOCK_COOPERATIONS[number];

interface CooperationCardProps {
  cooperation: CooperationData;
}

// 机构类型映射
const COOPERATION_TYPES = {
  university: { label: '高等院校', icon: '🎓', color: '#004A36' },
  enterprise: { label: '企业', icon: '🏢', color: '#00FFB9' },
  research_institute: { label: '科研院所', icon: '🔬', color: '#002E21' },
  government: { label: '政府机构', icon: '🏛️', color: '#9AA0A6' },
};

// 合作状态映射
const COOPERATION_STATUS = {
  active: { label: '积极合作', color: '#00FFB9', bgColor: '#E6FFF9' },
  selective: { label: '选择合作', color: '#9AA0A6', bgColor: '#F8F9FA' },
  inactive: { label: '暂停合作', color: '#BDC1C6', bgColor: '#F1F3F4' },
};

// 合作领域映射
const COOPERATION_AREAS = {
  technology_transfer: { label: '技术转移', icon: '🔄' },
  joint_research: { label: '联合研发', icon: '🔬' },
  talent_exchange: { label: '人才交流', icon: '👥' },
  student_internship: { label: '学生实习', icon: '🎓' },
  equipment_sharing: { label: '设备共享', icon: '⚙️' },
  investment: { label: '投资合作', icon: '💰' },
  consulting: { label: '咨询服务', icon: '💡' },
};

export default function CooperationCard({ cooperation }: CooperationCardProps) {
  const getRegionInfo = (region: string) => {
    return REGIONS.find(r => r.value === region);
  };

  const typeInfo = COOPERATION_TYPES[cooperation.type];
  const statusInfo = COOPERATION_STATUS[cooperation.status];
  const regionInfo = getRegionInfo(cooperation.region);

  return (
    <div className="bg-white rounded-custom shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* 卡片头部 */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-16 h-16 bg-gray-100 rounded-custom overflow-hidden flex-shrink-0">
              <Image
                src={cooperation.logo || 'https://placehold.co/64x64/E0E2E3/9AA0A6?text=Logo'}
                alt={cooperation.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="text-lg font-semibold text-title line-clamp-1">
                  {cooperation.shortName || cooperation.name}
                </h3>
                {cooperation.isRecommended && (
                  <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded-full font-medium">
                    推荐
                  </span>
                )}
                {cooperation.isVerified && (
                  <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full font-medium">
                    认证
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span style={{ color: typeInfo?.color }}>
                  {typeInfo?.icon} {typeInfo?.label}
                </span>
                <span>•</span>
                <span>{regionInfo?.label || cooperation.city}</span>
                <span>•</span>
                <span>{cooperation.establishedYear}年成立</span>
              </div>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-medium">{cooperation.rating}</span>
              <span className="text-xs text-gray-500">
                ({cooperation.cooperationCount}次合作)
              </span>
            </div>
            <div 
              className="text-xs px-2 py-1 rounded-full"
              style={{ 
                color: statusInfo.color, 
                backgroundColor: statusInfo.bgColor 
              }}
            >
              {statusInfo.label}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {cooperation.description}
        </p>

        {/* 合作领域 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {cooperation.cooperationAreas.slice(0, 4).map((area) => {
            const areaInfo = COOPERATION_AREAS[area];
            return (
              <span
                key={area}
                className="bg-accent-50 text-accent-700 text-xs px-2 py-1 rounded-full"
              >
                {areaInfo?.icon} {areaInfo?.label}
              </span>
            );
          })}
          {cooperation.cooperationAreas.length > 4 && (
            <span className="text-xs text-gray-500">
              +{cooperation.cooperationAreas.length - 4}
            </span>
          )}
        </div>

        {/* 专业领域 */}
        <div className="flex flex-wrap gap-1">
          {cooperation.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
          {cooperation.specialties.length > 3 && (
            <span className="text-xs text-gray-500">
              +{cooperation.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* 成就数据 */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-title">
              {cooperation.successfulProjects}
            </div>
            <div className="text-xs text-gray-600">成功项目</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-title">
              {cooperation.cooperationCount}
            </div>
            <div className="text-xs text-gray-600">合作次数</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-title">
              {new Date().getFullYear() - cooperation.establishedYear}
            </div>
            <div className="text-xs text-gray-600">年发展</div>
          </div>
        </div>
      </div>

      {/* 行动按钮 */}
      <div className="p-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors text-sm font-medium">
            立即合作
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-custom hover:bg-gray-50 transition-colors text-sm font-medium">
            查看详情
          </button>
        </div>
        
        {/* 联系信息 */}
        <div className="mt-3 text-xs text-gray-500 flex items-center justify-between">
          <span>联系人: {cooperation.contactInfo.contactPerson}</span>
          <span>{cooperation.contactInfo.phone}</span>
        </div>
      </div>
    </div>
  );
}