'use client';

import { useState } from 'react';
import { REGIONS, INCUBATOR_TYPES, INCUBATOR_LEVELS, INCUBATOR_FOCUS_AREAS } from '@/lib/constants';

interface SearchFilterProps {
  onFilterChange: (filters: {
    keyword: string;
    region: string;
    type: string;
    level: string;
    focusArea: string;
  }) => void;
}

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    type: '',
    level: '',
    focusArea: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      keyword: '',
      region: '',
      type: '',
      level: '',
      focusArea: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-custom shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-title">搜索筛选</h3>
        <button 
          onClick={handleReset}
          className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
        >
          重置筛选
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* 关键字搜索 */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            关键字搜索
          </label>
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => handleFilterChange('keyword', e.target.value)}
            placeholder="输入孵化器名称、描述或关键词"
            className="w-full px-4 py-2 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* 所属区域 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            所属区域
          </label>
          <select
            value={filters.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          >
            <option value="">全部区域</option>
            {REGIONS.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        {/* 孵化器类型 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            孵化器类型
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          >
            <option value="">全部类型</option>
            {INCUBATOR_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* 孵化器级别 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            孵化器级别
          </label>
          <select
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          >
            <option value="">全部级别</option>
            {INCUBATOR_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 聚焦领域标签 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          聚焦领域
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilterChange('focusArea', '')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filters.focusArea === ''
                ? 'bg-accent-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部领域
          </button>
          {INCUBATOR_FOCUS_AREAS.map((area) => (
            <button
              key={area.value}
              onClick={() => handleFilterChange('focusArea', area.value)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filters.focusArea === area.value
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {area.icon} {area.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}