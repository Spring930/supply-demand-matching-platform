'use client';

import Image from 'next/image';
import { 
  INCUBATOR_TYPES, 
  INCUBATOR_LEVELS, 
  INCUBATOR_FOCUS_AREAS, 
  INCUBATOR_SERVICES, 
  REGIONS 
} from '@/lib/constants';
import type { MOCK_INCUBATORS } from '@/lib/constants';

type IncubatorData = typeof MOCK_INCUBATORS[number];

interface IncubatorCardProps {
  incubator: IncubatorData;
}

export default function IncubatorCard({ incubator }: IncubatorCardProps) {
  const getTypeInfo = (type: string) => {
    return INCUBATOR_TYPES.find(t => t.value === type);
  };

  const getLevelInfo = (level: string) => {
    return INCUBATOR_LEVELS.find(l => l.value === level);
  };

  const getRegionInfo = (region: string) => {
    return REGIONS.find(r => r.value === region);
  };

  const typeInfo = getTypeInfo(incubator.type);
  const levelInfo = getLevelInfo(incubator.level);
  const regionInfo = getRegionInfo(incubator.region);

  return (
    <div className="bg-white rounded-custom shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* 卡片头部 */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-100 rounded-custom overflow-hidden flex-shrink-0">
              <Image
                src={incubator.logo}
                alt={incubator.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-title line-clamp-1">
                  {incubator.shortName}
                </h3>
                {incubator.isRecommended && (
                  <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded-full font-medium">
                    推荐
                  </span>
                )}
                {incubator.isHot && (
                  <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full font-medium">
                    热门
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span style={{ color: levelInfo?.color }}>
                  {levelInfo?.label}
                </span>
                <span>•</span>
                <span style={{ color: typeInfo?.color }}>
                  {typeInfo?.icon} {typeInfo?.label}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-medium">{incubator.rating}</span>
              <span className="text-xs text-gray-500">
                ({incubator.reviewCount})
              </span>
            </div>
            <div className="text-xs text-gray-500">
              {regionInfo?.label}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {incubator.description}
        </p>

        {/* 聚焦领域 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {incubator.focusAreas.slice(0, 3).map((area) => {
            const areaInfo = INCUBATOR_FOCUS_AREAS.find(a => a.value === area);
            return (
              <span
                key={area}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {areaInfo?.icon} {areaInfo?.label}
              </span>
            );
          })}
          {incubator.focusAreas.length > 3 && (
            <span className="text-xs text-gray-500">
              +{incubator.focusAreas.length - 3}
            </span>
          )}
        </div>

        {/* 核心服务 */}
        <div className="flex flex-wrap gap-1">
          {incubator.services.slice(0, 4).map((service) => {
            const serviceInfo = INCUBATOR_SERVICES.find(s => s.value === service);
            return (
              <span
                key={service}
                className="bg-accent-50 text-accent-700 text-xs px-2 py-1 rounded-full"
              >
                {serviceInfo?.icon} {serviceInfo?.label}
              </span>
            );
          })}
          {incubator.services.length > 4 && (
            <span className="text-xs text-gray-500">
              +{incubator.services.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* 成就数据 */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-title">
              {incubator.achievements.totalProjects}
            </div>
            <div className="text-xs text-gray-600">孵化项目</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-title">
              {incubator.achievements.successfulExits}
            </div>
            <div className="text-xs text-gray-600">成功退出</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-title">
              {incubator.achievements.totalFunding}
            </div>
            <div className="text-xs text-gray-600">总投资额</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-title">
              {incubator.achievements.averageIncubationTime}
            </div>
            <div className="text-xs text-gray-600">平均孵化时长</div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <button className="flex-1 bg-accent-500 text-white px-4 py-2 rounded-custom hover:bg-accent-600 transition-colors font-medium text-sm">
            立即申请
          </button>
          <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-custom hover:bg-gray-50 transition-colors font-medium text-sm">
            了解详情
          </button>
        </div>
      </div>
    </div>
  );
}