// 供需对接平台常量定义

// 路由常量
export const ROUTES = {
  HOME: '/',
  DEMANDS: '/demands',
  ACHIEVEMENTS: '/achievements',
  MAP: '/map',
  SERVICES: '/services',
  PROFILE: '/profile',
  LOGIN: '/sign-in',
  REGISTER: '/sign-up',
} as const;

// 需求类型选项
export const DEMAND_TYPES = [
  { value: 'technology', label: '技术需求', color: '#00FFB9' },
  { value: 'funding', label: '资金需求', color: '#004A36' },
  { value: 'talent', label: '人才需求', color: '#002E21' },
  { value: 'cooperation', label: '合作需求', color: '#E0E2E3' },
  { value: 'consultation', label: '咨询需求', color: '#9AA0A6' },
] as const;

// 成果类型选项
export const ACHIEVEMENT_TYPES = [
  { value: 'patent', label: '专利', color: '#00FFB9' },
  { value: 'paper', label: '论文', color: '#004A36' },
  { value: 'software', label: '软件', color: '#002E21' },
  { value: 'technology', label: '技术', color: '#E0E2E3' },
  { value: 'product', label: '产品', color: '#9AA0A6' },
] as const;

// 用户角色选项
export const USER_ROLES = [
  { value: 'individual', label: '个人用户' },
  { value: 'enterprise', label: '企业用户' },
  { value: 'institution', label: '机构用户' },
  { value: 'expert', label: '专家用户' },
] as const;

// 服务中心模块
export const SERVICE_MODULES = [
  {
    id: 'talent',
    name: '人才专区',
    description: '专业人才匹配与招聘服务',
    icon: 'Users',
    path: '/services/talent',
    featured: true,
  },
  {
    id: 'validation',
    name: '概念验证',
    description: '技术概念验证与测试服务',
    icon: 'TestTube',
    path: '/services/validation',
    featured: true,
  },
  {
    id: 'cooperation',
    name: '校企合作',
    description: '高校与企业深度合作平台',
    icon: 'GraduationCap',
    path: '/services/cooperation',
    featured: true,
  },
  {
    id: 'funding',
    name: '金融融资',
    description: '投融资对接与金融服务',
    icon: 'DollarSign',
    path: '/services/funding',
    featured: true,
  },
  {
    id: 'incubation',
    name: '项目孵化',
    description: '创新项目孵化与加速服务',
    icon: 'Rocket',
    path: '/services/incubation',
    featured: true,
  },
  {
    id: 'consulting',
    name: '咨询服务',
    description: '专业技术与商业咨询',
    icon: 'MessageCircle',
    path: '/services/consulting',
    featured: false,
  },
] as const;

// 地图配置
export const MAP_CONFIG = {
  DEFAULT_CENTER: { lat: 39.9042, lng: 116.4074 }, // 北京
  DEFAULT_ZOOM: 5,
  MIN_ZOOM: 3,
  MAX_ZOOM: 18,
  HEATMAP_RADIUS: 20,
  HEATMAP_BLUR: 15,
} as const;

// 响应式断点
export const BREAKPOINTS = {
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1440,
} as const;

// 动画配置
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_OUT: [0.0, 0.0, 0.2, 1],
    EASE_IN_OUT: [0.4, 0.0, 0.2, 1],
  },
} as const;

// 性能配置
export const PERFORMANCE_CONFIG = {
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100,
  PAGE_SIZE: 20,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  SUPPORTED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.ms-excel'],
} as const;

// 搜索配置
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  MAX_SUGGESTIONS: 5,
  HIGHLIGHT_CLASS: 'bg-accent-100 text-accent-900',
} as const;

// 国际化配置
export const I18N_CONFIG = {
  DEFAULT_LANGUAGE: 'zh' as const,
  SUPPORTED_LANGUAGES: [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ],
} as const;

// 主题配置
export const THEME_CONFIG = {
  DEFAULT_THEME: 'light' as const,
  THEMES: ['light', 'dark', 'system'] as const,
} as const;

// 状态选项
export const STATUS_OPTIONS = {
  DEMAND: [
    { value: 'draft', label: '草稿', color: '#9AA0A6' },
    { value: 'published', label: '已发布', color: '#00FFB9' },
    { value: 'in_progress', label: '进行中', color: '#004A36' },
    { value: 'completed', label: '已完成', color: '#002E21' },
    { value: 'cancelled', label: '已取消', color: '#E0E2E3' },
  ],
  ACHIEVEMENT: [
    { value: 'draft', label: '草稿', color: '#9AA0A6' },
    { value: 'published', label: '已发布', color: '#00FFB9' },
    { value: 'matched', label: '已匹配', color: '#004A36' },
    { value: 'transferred', label: '已转化', color: '#002E21' },
  ],
} as const;

// 错误消息
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接错误，请稍后重试',
  AUTHENTICATION_FAILED: '身份验证失败，请重新登录',
  UNAUTHORIZED: '您没有权限执行此操作',
  NOT_FOUND: '请求的资源不存在',
  VALIDATION_ERROR: '输入数据验证失败',
  SERVER_ERROR: '服务器内部错误，请稍后重试',
} as const;

// 成功消息
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: '登录成功',
  LOGOUT_SUCCESS: '退出登录成功',
  SAVE_SUCCESS: '保存成功',
  DELETE_SUCCESS: '删除成功',
  UPDATE_SUCCESS: '更新成功',
  PUBLISH_SUCCESS: '发布成功',
} as const;