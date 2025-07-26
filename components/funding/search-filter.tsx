'use client';

import { useState } from 'react';
import { REGIONS } from '@/lib/constants';

interface SearchFilterProps {
  onFilterChange: (filters: {
    keyword: string;
    region: string;
    category: string;
    level: string;
  }) => void;
}

// 融资类别选项
const FUNDING_CATEGORIES = [
  { value: 'tech-guarantee', label: '科技担保', icon: '🏛️' },
  { value: 'credit-loan', label: '信用贷款', icon: '💳' },
  { value: 'investment', label: '股权投资', icon: '📈' },
  { value: 'subsidy', label: '政府补贴', icon: '🏛️' },
  { value: 'angel', label: '天使投资', icon: '👼' },
  { value: 'venture', label: '风险投资', icon: '💼' },
];

// 企业级别选项
const ENTERPRISE_LEVELS = [
  { value: 'high-tech', label: '高新技术企业', icon: '🚀' },
  { value: 'sme-tech', label: '科技型中小企业', icon: '🏢' },
  { value: 'startup', label: '初创企业', icon: '🌱' },
  { value: 'growth', label: '成长型企业', icon: '📊' },
  { value: 'mature', label: '成熟企业', icon: '🏭' },
  { value: 'listed', label: '上市企业', icon: '📈' },
];

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    category: '',
    level: '',
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
      category: '',
      level: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-custom shadow-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-title mb-2">融资服务搜索</h3>
          <p className="text-gray-600">根据您的需求筛选合适的融资服务</p>
        </div>
        <button 
          onClick={handleReset}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-custom font-medium transition-colors"
        >
          重置筛选
        </button>
      </div>

      <div className="space-y-8">
        {/* 关键字搜索 */}
        <div>
          <label className="block text-sm font-semibold text-title mb-3">
            关键字搜索
          </label>
          <div className="relative">
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
              placeholder="输入企业名称、产品名称或融资需求关键词"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 筛选选项 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 所属区域 */}
          <div>
            <label className="block text-sm font-semibold text-title mb-3">
              所属区域
            </label>
            <select
              value={filters.region}
              onChange={(e) => handleFilterChange('region', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            >
              <option value="">全部区域</option>
              {REGIONS.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>

          {/* 融资类别 */}
          <div>
            <label className="block text-sm font-semibold text-title mb-3">
              融资类别
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            >
              <option value="">全部类别</option>
              {FUNDING_CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.icon} {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* 企业级别 */}
          <div>
            <label className="block text-sm font-semibold text-title mb-3">
              企业级别
            </label>
            <select
              value={filters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
            >
              <option value="">全部级别</option>
              {ENTERPRISE_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.icon} {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 快速筛选标签 */}
        <div>
          <label className="block text-sm font-semibold text-title mb-4">
            快速筛选
          </label>
          
          {/* 热门类别标签 */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">热门类别</p>
            <div className="flex flex-wrap gap-2">
              {['tech-guarantee', 'credit-loan', 'investment', 'subsidy'].map((categoryValue) => {
                const category = FUNDING_CATEGORIES.find(c => c.value === categoryValue);
                return (
                  <button
                    key={categoryValue}
                    onClick={() => handleFilterChange('category', categoryValue)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filters.category === categoryValue
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category?.icon} {category?.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 企业级别标签 */}
          <div>
            <p className="text-sm text-gray-600 mb-2">企业级别</p>
            <div className="flex flex-wrap gap-2">
              {['high-tech', 'sme-tech', 'startup', 'growth'].map((levelValue) => {
                const level = ENTERPRISE_LEVELS.find(l => l.value === levelValue);
                return (
                  <button
                    key={levelValue}
                    onClick={() => handleFilterChange('level', levelValue)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filters.level === levelValue
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level?.icon} {level?.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 搜索按钮 */}
        <div className="flex justify-center">
          <button className="bg-accent-500 text-white px-8 py-3 rounded-custom font-medium hover:bg-accent-600 transition-colors">
            搜索融资服务
          </button>
        </div>
      </div>
    </div>
  );
}