'use client';

import { useState } from 'react';
import { REGIONS } from '@/lib/constants';

interface SearchFilterProps {
  onFilterChange: (filters: {
    keyword: string;
    region: string;
    type: string;
    status: string;
    cooperationArea: string;
  }) => void;
}

// 机构类型选项
const COOPERATION_TYPES = [
  { value: 'university', label: '高等院校', icon: '🎓' },
  { value: 'enterprise', label: '企业', icon: '🏢' },
  { value: 'research_institute', label: '科研院所', icon: '🔬' },
  { value: 'government', label: '政府机构', icon: '🏛️' },
];

// 合作状态选项
const COOPERATION_STATUS = [
  { value: 'active', label: '积极寻求合作' },
  { value: 'selective', label: '选择性合作' },
  { value: 'inactive', label: '暂停合作' },
];

// 合作领域选项
const COOPERATION_AREAS = [
  { value: 'technology_transfer', label: '技术转移', icon: '🔄' },
  { value: 'joint_research', label: '联合研发', icon: '🔬' },
  { value: 'talent_exchange', label: '人才交流', icon: '👥' },
  { value: 'student_internship', label: '学生实习', icon: '🎓' },
  { value: 'equipment_sharing', label: '设备共享', icon: '⚙️' },
  { value: 'investment', label: '投资合作', icon: '💰' },
  { value: 'consulting', label: '咨询服务', icon: '💡' },
];

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    type: '',
    status: '',
    cooperationArea: '',
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
      status: '',
      cooperationArea: '',
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
          className="text-accent-600 hover:text-accent-700 font-medium transition-colors text-sm"
        >
          重置筛选
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* 关键字搜索 */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            关键字搜索
          </label>
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => handleFilterChange('keyword', e.target.value)}
            placeholder="输入机构名称、描述或关键词"
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

        {/* 机构类型 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            机构类型
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
          >
            <option value="">全部类型</option>
            {COOPERATION_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* 合作状态 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            合作状态
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('status', '')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filters.status === ''
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全部状态
            </button>
            {COOPERATION_STATUS.map((status) => (
              <button
                key={status.value}
                onClick={() => handleFilterChange('status', status.value)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.status === status.value
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>

        {/* 合作领域 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            合作领域
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('cooperationArea', '')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filters.cooperationArea === ''
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全部领域
            </button>
            {COOPERATION_AREAS.slice(0, 4).map((area) => (
              <button
                key={area.value}
                onClick={() => handleFilterChange('cooperationArea', area.value)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.cooperationArea === area.value
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

      {/* 更多合作领域（展开显示） */}
      {COOPERATION_AREAS.length > 4 && (
        <div className="border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-2">
            {COOPERATION_AREAS.slice(4).map((area) => (
              <button
                key={area.value}
                onClick={() => handleFilterChange('cooperationArea', area.value)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.cooperationArea === area.value
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {area.icon} {area.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}