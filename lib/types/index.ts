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

// 合作机构类型
export enum CooperationType {
  UNIVERSITY = 'university',           // 高等院校
  ENTERPRISE = 'enterprise',           // 企业
  RESEARCH_INSTITUTE = 'research_institute', // 科研院所
  GOVERNMENT = 'government',           // 政府机构
}

// 合作状态
export enum CooperationStatus {
  ACTIVE = 'active',               // 积极寻求合作
  SELECTIVE = 'selective',         // 选择性合作
  INACTIVE = 'inactive',           // 暂停合作
}

// 合作领域
export enum CooperationArea {
  TECHNOLOGY_TRANSFER = 'technology_transfer',     // 技术转移
  JOINT_RESEARCH = 'joint_research',               // 联合研发
  TALENT_EXCHANGE = 'talent_exchange',             // 人才交流
  STUDENT_INTERNSHIP = 'student_internship',       // 学生实习
  EQUIPMENT_SHARING = 'equipment_sharing',         // 设备共享
  INVESTMENT = 'investment',                       // 投资合作
  CONSULTING = 'consulting',                       // 咨询服务
}

// 合作机构信息
export interface Cooperation {
  id: string;
  name: string;                    // 机构名称
  shortName?: string;              // 机构简称
  type: CooperationType;           // 机构类型
  region: string;                  // 所属区域
  city: string;                    // 城市
  description: string;             // 机构介绍
  logo?: string;                   // 机构logo
  establishedYear: number;         // 成立年份
  scale: 'small' | 'medium' | 'large'; // 机构规模
  
  // 联系信息
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    website?: string;
    contactPerson: string;         // 联系人
    position?: string;             // 联系人职位
  };
  
  // 合作相关
  cooperationAreas: CooperationArea[];  // 合作领域
  status: CooperationStatus;            // 合作状态
  successfulProjects: number;           // 成功合作项目数
  
  // 优势与特色
  advantages: string[];                 // 机构优势
  specialties: string[];                // 专业领域
  
  // 统计信息
  rating: number;                       // 评分(1-5)
  cooperationCount: number;             // 合作次数
  
  // 时间信息
  createdAt: Date;
  updatedAt: Date;
  
  // 推荐标签
  isRecommended?: boolean;              // 是否推荐
  isVerified?: boolean;                 // 是否认证
}

// 合作筛选器
export interface CooperationFilters {
  keyword?: string;                     // 关键字搜索
  type?: CooperationType;               // 机构类型
  region?: string;                      // 所属区域
  cooperationArea?: CooperationArea;    // 合作领域
  status?: CooperationStatus;           // 合作状态
  scale?: 'small' | 'medium' | 'large'; // 机构规模
  establishedYearRange?: {              // 成立年份范围
    start: number;
    end: number;
  };
  ratingRange?: {                       // 评分范围
    min: number;
    max: number;
  };
}