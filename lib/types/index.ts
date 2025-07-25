// 供需对接平台类型定义

// 用户角色类型
export enum UserRole {
  INDIVIDUAL = 'individual',      // 个人用户
  ENTERPRISE = 'enterprise',      // 企业用户
  INSTITUTION = 'institution',    // 机构用户
  EXPERT = 'expert',             // 专家用户
}

// 用户信息
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: UserRole;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 需求状态
export enum DemandStatus {
  DRAFT = 'draft',               // 草稿
  PUBLISHED = 'published',       // 已发布
  IN_PROGRESS = 'in_progress',   // 进行中
  COMPLETED = 'completed',       // 已完成
  CANCELLED = 'cancelled',       // 已取消
}

// 需求类型
export enum DemandType {
  TECHNOLOGY = 'technology',     // 技术需求
  FUNDING = 'funding',          // 资金需求
  TALENT = 'talent',            // 人才需求
  COOPERATION = 'cooperation',   // 合作需求
  CONSULTATION = 'consultation', // 咨询需求
}

// 需求信息
export interface Demand {
  id: string;
  title: string;
  description: string;
  type: DemandType;
  status: DemandStatus;
  budget?: number;
  deadline?: Date;
  tags: string[];
  location: Location;
  authorId: string;
  author: User;
  applicants: number;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// 成果状态
export enum AchievementStatus {
  DRAFT = 'draft',               // 草稿
  PUBLISHED = 'published',       // 已发布
  MATCHED = 'matched',           // 已匹配
  TRANSFERRED = 'transferred',   // 已转化
}

// 成果类型
export enum AchievementType {
  PATENT = 'patent',             // 专利
  PAPER = 'paper',               // 论文
  SOFTWARE = 'software',         // 软件
  TECHNOLOGY = 'technology',     // 技术
  PRODUCT = 'product',           // 产品
}

// 成果信息
export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  status: AchievementStatus;
  tags: string[];
  images: string[];
  documents: string[];
  location: Location;
  authorId: string;
  author: User;
  matchScore?: number;
  viewCount: number;
  favoriteCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// 地理位置
export interface Location {
  country: string;
  province: string;
  city: string;
  district?: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// 匹配结果
export interface MatchResult {
  id: string;
  demandId: string;
  achievementId: string;
  score: number;
  reasons: string[];
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

// 热力图数据
export interface HeatmapData {
  location: Location;
  value: number;
  type: 'demand' | 'achievement';
  category: string;
}

// 统计数据
export interface Statistics {
  totalDemands: number;
  totalAchievements: number;
  totalMatches: number;
  totalUsers: number;
  recentTrends: {
    date: string;
    demands: number;
    achievements: number;
    matches: number;
  }[];
}

// API响应格式
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// 分页参数
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// 分页响应
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// 搜索过滤器
export interface SearchFilters {
  keyword?: string;
  type?: string[];
  location?: Partial<Location>;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  priceRange?: {
    min: number;
    max: number;
  };
}

// 服务中心模块类型
export interface ServiceModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  featured: boolean;
}

// 国际化语言
export type Language = 'zh' | 'en';

// 主题模式
export type ThemeMode = 'light' | 'dark' | 'system';