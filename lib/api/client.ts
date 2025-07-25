// API客户端工具

import { ApiResponse, PaginatedResponse, PaginationParams, SearchFilters } from '@/lib/types';

// API基础配置
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// API客户端类
export class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  // 通用请求方法
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET请求
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const searchParams = params ? new URLSearchParams(params).toString() : '';
    const url = searchParams ? `${endpoint}?${searchParams}` : endpoint;
    
    return this.request<T>(url, { method: 'GET' });
  }

  // POST请求
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT请求
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE请求
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // 分页查询
  async getPaginated<T>(
    endpoint: string,
    params: PaginationParams & SearchFilters
  ): Promise<ApiResponse<PaginatedResponse<T>>> {
    return this.get<PaginatedResponse<T>>(endpoint, params);
  }

  // 文件上传
  async uploadFile(endpoint: string, file: File): Promise<ApiResponse<{ url: string }>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.request<{ url: string }>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {}, // 让浏览器自动设置Content-Type
    });
  }
}

// 默认API客户端实例
export const apiClient = new ApiClient();

// 需求相关API
export const demandsApi = {
  // 获取需求列表
  getList: (params: PaginationParams & SearchFilters) =>
    apiClient.getPaginated('/demands', params),
  
  // 获取需求详情
  getById: (id: string) =>
    apiClient.get(`/demands/${id}`),
  
  // 创建需求
  create: (data: any) =>
    apiClient.post('/demands', data),
  
  // 更新需求
  update: (id: string, data: any) =>
    apiClient.put(`/demands/${id}`, data),
  
  // 删除需求
  delete: (id: string) =>
    apiClient.delete(`/demands/${id}`),
  
  // 获取热门需求
  getHot: () =>
    apiClient.get('/demands/hot'),
  
  // 搜索需求
  search: (query: string, filters?: SearchFilters) =>
    apiClient.get('/demands/search', { query, ...filters }),
};

// 成果相关API
export const achievementsApi = {
  // 获取成果列表
  getList: (params: PaginationParams & SearchFilters) =>
    apiClient.getPaginated('/achievements', params),
  
  // 获取成果详情
  getById: (id: string) =>
    apiClient.get(`/achievements/${id}`),
  
  // 创建成果
  create: (data: any) =>
    apiClient.post('/achievements', data),
  
  // 更新成果
  update: (id: string, data: any) =>
    apiClient.put(`/achievements/${id}`, data),
  
  // 删除成果
  delete: (id: string) =>
    apiClient.delete(`/achievements/${id}`),
  
  // 获取推荐成果
  getRecommended: () =>
    apiClient.get('/achievements/recommended'),
  
  // 智能匹配
  getMatches: (id: string) =>
    apiClient.get(`/achievements/${id}/matches`),
};

// 用户相关API
export const usersApi = {
  // 获取用户信息
  getProfile: () =>
    apiClient.get('/users/profile'),
  
  // 更新用户信息
  updateProfile: (data: any) =>
    apiClient.put('/users/profile', data),
  
  // 获取用户统计
  getStats: () =>
    apiClient.get('/users/stats'),
};

// 地图相关API
export const mapApi = {
  // 获取热力图数据
  getHeatmapData: (filters?: SearchFilters) =>
    apiClient.get('/map/heatmap', filters),
  
  // 获取区域统计
  getRegionStats: (region: string) =>
    apiClient.get(`/map/regions/${region}/stats`),
};

// 统计相关API
export const statisticsApi = {
  // 获取平台统计
  getPlatformStats: () =>
    apiClient.get('/statistics/platform'),
  
  // 获取趋势数据
  getTrends: (period: string) =>
    apiClient.get('/statistics/trends', { period }),
};