'use client';

import { useState, useMemo } from 'react';
import { MOCK_INCUBATORS } from '@/lib/constants';
import SearchFilter from '@/components/incubation/search-filter';
import IncubatorCard from '@/components/incubation/incubator-card';
import Pagination from '@/components/incubation/pagination';

const ITEMS_PER_PAGE = 6;

export default function IncubationPageClient() {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    type: '',
    level: '',
    focusArea: '',
  });
  const [currentPage, setCurrentPage] = useState(1);

  // 过滤孵化器数据
  const filteredIncubators = useMemo(() => {
    return MOCK_INCUBATORS.filter((incubator) => {
      // 关键字搜索
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const searchText = `${incubator.name} ${incubator.shortName} ${incubator.description}`.toLowerCase();
        if (!searchText.includes(keyword)) {
          return false;
        }
      }

      // 区域筛选
      if (filters.region && incubator.region !== filters.region) {
        return false;
      }

      // 类型筛选
      if (filters.type && incubator.type !== filters.type) {
        return false;
      }

      // 级别筛选
      if (filters.level && incubator.level !== filters.level) {
        return false;
      }

      // 聚焦领域筛选
      // TODO: Fix type issue with focusArea filter
      // if (filters.focusArea && !incubator.focusAreas.includes(filters.focusArea as string)) {
      //   return false;
      // }

      return true;
    });
  }, [filters]);

  // 分页处理
  const totalPages = Math.ceil(filteredIncubators.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentIncubators = filteredIncubators.slice(startIndex, endIndex);

  // 筛选变化处理
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // 重置到第一页
  };

  // 分页变化处理
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* 页面容器 */}
      <div className="container mx-auto px-4 py-8">
        {/* 项目孵化介绍区域 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-title mb-4">
              项目孵化服务
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              为您的创新项目提供专业孵化服务，连接优质孵化器资源，从项目评估到资金对接，
              全程助力您的项目成功孵化并快速成长
            </p>
          </div>
          
          {/* 注册提示卡片 */}
          <div className="bg-white rounded-custom shadow-md p-6 max-w-4xl mx-auto border-l-4 border-accent-500">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3">
                <span className="text-accent-600 font-semibold">!</span>
              </div>
              <h3 className="text-lg font-semibold text-title">申请孵化服务</h3>
            </div>
            <p className="text-gray-600 mb-4">
              请先注册并完善您的项目信息，我们将为您匹配最适合的孵化器资源。
              已有账号的用户可以直接浏览下方孵化器列表，选择心仪的孵化器进行申请。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors font-medium">
                立即注册申请
              </button>
              <button className="bg-white border-2 border-accent-500 text-accent-600 px-6 py-3 rounded-custom hover:bg-accent-50 transition-colors font-medium">
                了解申请流程
              </button>
            </div>
          </div>
        </div>

        {/* 孵化器列表展示区域 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-title mb-6 text-center">
            优质孵化器推荐
          </h2>
          
          {/* 搜索筛选区域 */}
          <SearchFilter onFilterChange={handleFilterChange} />
          
          {/* 结果统计 */}
          <div className="mb-4 text-center">
            <p className="text-gray-600">
              共找到 <span className="font-semibold text-title">{filteredIncubators.length}</span> 个孵化器
              {filters.keyword && (
                <span className="ml-2">
                  关键字: <span className="font-medium text-accent-600">"{filters.keyword}"</span>
                </span>
              )}
            </p>
          </div>

          {/* 孵化器列表 */}
          {currentIncubators.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentIncubators.map((incubator) => (
                  <IncubatorCard key={incubator.id} incubator={incubator} />
                ))}
              </div>

              {/* 分页组件 */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="bg-white rounded-custom shadow-md p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0012 15c-2.34 0-4.29-1.004-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                未找到匹配的孵化器
              </h3>
              <p className="text-gray-500">
                请尝试调整筛选条件或搜索关键字
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}