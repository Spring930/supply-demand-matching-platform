'use client';

import { useState } from 'react';

import FinancialProducts from '@/components/funding/financial-products';
import SearchFilter from '@/components/funding/search-filter';

export default function FundingPageClient() {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    category: '',
    level: '',
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* 页面容器 */}
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-title mb-4">
            金融融资服务
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            为您的创新项目提供全方位的金融支持服务，从概念验证到融资对接，
            助力您的项目获得资金支持并实现产业化发展
          </p>
        </div>

        {/* 融资服务搜索区域 */}
        <SearchFilter onFilterChange={handleFilterChange} />

        {/* 科技金融产品介绍区域 */}
        <FinancialProducts />
      </div>
    </div>
  );
}