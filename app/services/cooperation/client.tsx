'use client';

import { useState, useMemo } from 'react';
import { MOCK_COOPERATIONS } from '@/lib/constants';
import SearchFilter from '@/components/cooperation/search-filter';
import CooperationCard from '@/components/cooperation/cooperation-card';
import Pagination from '@/components/incubation/pagination';

const ITEMS_PER_PAGE = 6;

export default function CooperationPageClient() {
  const [filters, setFilters] = useState({
    keyword: '',
    region: '',
    type: '',
    status: '',
    cooperationArea: '',
  });
  const [currentPage, setCurrentPage] = useState(1);

  // 过滤合作机构数据
  const filteredCooperations = useMemo(() => {
    return MOCK_COOPERATIONS.filter((cooperation) => {
      // 关键字搜索
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const searchText = `${cooperation.name} ${cooperation.shortName || ''} ${cooperation.description} ${cooperation.specialties.join(' ')}`.toLowerCase();
        if (!searchText.includes(keyword)) {
          return false;
        }
      }

      // 区域筛选
      if (filters.region && cooperation.region !== filters.region) {
        return false;
      }

      // 机构类型筛选
      if (filters.type && cooperation.type !== filters.type) {
        return false;
      }

      // 合作状态筛选
      if (filters.status && cooperation.status !== filters.status) {
        return false;
      }

      // 合作领域筛选
      if (filters.cooperationArea && !cooperation.cooperationAreas.includes(filters.cooperationArea as any)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // 分页处理
  const totalPages = Math.ceil(filteredCooperations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCooperations = filteredCooperations.slice(startIndex, endIndex);

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
        {/* 校企合作介绍区域 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-title mb-4">
              校企合作
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              连接优质合作机构，包括高等院校、科研院所、知名企业等，
              支持技术转移、联合研发、人才交流、学生实习等多种合作模式，
              助力产学研深度融合，推动创新成果转化
            </p>
          </div>
          
          {/* 合作优势展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-custom shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-title mb-2">优质机构</h3>
              <p className="text-sm text-gray-600">汇聚知名高校、科研院所、优秀企业</p>
            </div>
            <div className="bg-white rounded-custom shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-title mb-2">多元合作</h3>
              <p className="text-sm text-gray-600">技术转移、人才交流、联合研发</p>
            </div>
            <div className="bg-white rounded-custom shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-title mb-2">成果转化</h3>
              <p className="text-sm text-gray-600">推动科研成果产业化应用落地</p>
            </div>
          </div>
          
          {/* 注册提示卡片 */}
          <div className="bg-white rounded-custom shadow-md p-6 max-w-4xl mx-auto border-l-4 border-accent-500">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3">
                <span className="text-accent-600 font-semibold">!</span>
              </div>
              <h3 className="text-lg font-semibold text-title">开启合作之旅</h3>
            </div>
            <p className="text-gray-600 mb-4">
              请先注册并完善您的机构信息，我们将为您匹配最适合的合作伙伴。
              已注册用户可以直接浏览下方合作机构列表，选择心仪的机构发起合作申请。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors font-medium">
                立即注册申请
              </button>
              <button className="bg-white border-2 border-accent-500 text-accent-600 px-6 py-3 rounded-custom hover:bg-accent-50 transition-colors font-medium">
                了解合作流程
              </button>
            </div>
          </div>
        </div>

        {/* 合作机构列表展示区域 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-title mb-6 text-center">
            优质合作机构
          </h2>
          
          {/* 搜索筛选区域 */}
          <SearchFilter onFilterChange={handleFilterChange} />
          
          {/* 结果统计 */}
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              共找到 <span className="font-semibold text-title">{filteredCooperations.length}</span> 个合作机构
              {filters.keyword && (
                <span className="ml-2">
                  关键字: <span className="font-medium text-accent-600">"{filters.keyword}"</span>
                </span>
              )}
              {filters.region && (
                <span className="ml-2">
                  区域: <span className="font-medium text-accent-600">{filters.region}</span>
                </span>
              )}
              {filters.type && (
                <span className="ml-2">
                  类型: <span className="font-medium text-accent-600">{filters.type}</span>
                </span>
              )}
            </p>
          </div>

          {/* 合作机构列表 */}
          {currentCooperations.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentCooperations.map((cooperation) => (
                  <CooperationCard key={cooperation.id} cooperation={cooperation} />
                ))}
              </div>

              {/* 分页组件 */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            /* 空状态 */
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-custom flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-title mb-2">未找到合适的合作机构</h3>
              <p className="text-gray-600 mb-4">
                请尝试调整筛选条件或关键字，或者
              </p>
              <button 
                onClick={() => handleFilterChange({
                  keyword: '',
                  region: '',
                  type: '',
                  status: '',
                  cooperationArea: '',
                })}
                className="bg-accent-500 text-white px-6 py-3 rounded-custom hover:bg-accent-600 transition-colors font-medium"
              >
                查看全部机构
              </button>
            </div>
          )}
        </div>

        {/* 合作成功案例统计 */}
        <div className="bg-white rounded-custom shadow-md p-8 text-center">
          <h3 className="text-xl font-bold text-title mb-6">合作成果统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {MOCK_COOPERATIONS.length}+
              </div>
              <div className="text-sm text-gray-600">合作机构</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {MOCK_COOPERATIONS.reduce((sum, c) => sum + c.successfulProjects, 0)}+
              </div>
              <div className="text-sm text-gray-600">成功项目</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {MOCK_COOPERATIONS.reduce((sum, c) => sum + c.cooperationCount, 0)}+
              </div>
              <div className="text-sm text-gray-600">合作次数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {Math.round(MOCK_COOPERATIONS.reduce((sum, c) => sum + c.rating, 0) / MOCK_COOPERATIONS.length * 10) / 10}
              </div>
              <div className="text-sm text-gray-600">平均评分</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}