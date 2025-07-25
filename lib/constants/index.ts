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
  { value: 'patent', label: '专利', color: '#00FFB9', icon: '📋' },
  { value: 'paper', label: '论文', color: '#004A36', icon: '📄' },
  { value: 'software', label: '软件', color: '#002E21', icon: '💻' },
  { value: 'technology', label: '技术', color: '#E0E2E3', icon: '⚙️' },
  { value: 'product', label: '产品', color: '#9AA0A6', icon: '🛠️' },
] as const;

// 地区分类
export const REGIONS = [
  { value: 'beijing', label: '北京', code: 'BJ' },
  { value: 'shanghai', label: '上海', code: 'SH' },
  { value: 'guangdong', label: '广东', code: 'GD' },
  { value: 'jiangsu', label: '江苏', code: 'JS' },
  { value: 'zhejiang', label: '浙江', code: 'ZJ' },
  { value: 'sichuan', label: '四川', code: 'SC' },
  { value: 'hubei', label: '湖北', code: 'HB' },
  { value: 'hunan', label: '湖南', code: 'HN' },
] as const;

// 行业分类
export const INDUSTRIES = [
  { value: 'ai', label: '人工智能', icon: '🤖' },
  { value: 'biotech', label: '生物技术', icon: '🧬' },
  { value: 'newenergy', label: '新能源', icon: '⚡' },
  { value: 'newmaterials', label: '新材料', icon: '🧪' },
  { value: 'medical', label: '医疗健康', icon: '🏥' },
  { value: 'aerospace', label: '航空航天', icon: '🚀' },
  { value: 'electronics', label: '电子信息', icon: '📱' },
  { value: 'manufacturing', label: '智能制造', icon: '🏭' },
  { value: 'environment', label: '环保节能', icon: '🌱' },
  { value: 'agriculture', label: '现代农业', icon: '🌾' },
] as const;

// 主体分类
export const SUBJECT_TYPES = [
  { value: 'university', label: '高等院校', icon: '🎓' },
  { value: 'research', label: '科研院所', icon: '🔬' },
  { value: 'enterprise', label: '企业', icon: '🏢' },
  { value: 'individual', label: '个人', icon: '👤' },
  { value: 'team', label: '团队', icon: '👥' },
] as const;

// 模拟成果数据（实际项目中应从后端获取）
export const MOCK_ACHIEVEMENTS = [
  {
    id: '1',
    title: '基于深度学习的智能图像识别系统',
    summary: '一种高精度的图像识别技术，准确率达99.5%',
    description: '该系统采用最新的卷积神经网络架构，结合注意力机制和数据增强技术。',
    plainDescription: '这是一个能够识别图片内容的AI系统，就像人眼一样能够准确识别图片中的物体。可以用在摄像头监控、医院看病时分析医学影像、工厂检测产品质量等地方。准确率非常高，几乎不会出错。',
    type: 'technology',
    industry: 'ai',
    region: 'beijing',
    subject: 'university',
    author: '清华大学计算机科学与技术系',
    publishDate: '2024-01-15',
    viewCount: 1285,
    followCount: 156,
    useCases: ['智能安防', '医疗诊断', '工业检测', '自动驾驶'],
    tags: ['深度学习', '图像识别', 'AI', '计算机视觉'],
    status: 'published',
    isHot: true,
  },
  {
    id: '2',
    title: '新型锂电池正极材料制备工艺',
    summary: '提高电池容量30%，延长使用寿命50%',
    description: '通过纳米材料改性和表面包覆技术，开发出具有高容量、长寿命、高安全性的锂电池正极材料。',
    plainDescription: '这是一种让手机、电动车电池更好用的新材料。用了这种材料做的电池，电量能增加30%，电池寿命能延长50%，而且更安全不容易爆炸。',
    type: 'technology',
    industry: 'newenergy',
    region: 'shanghai',
    subject: 'research',
    author: '中科院上海硅酸盐研究所',
    publishDate: '2024-01-20',
    viewCount: 892,
    followCount: 234,
    useCases: ['电动汽车', '储能系统', '消费电子', '航空航天'],
    tags: ['锂电池', '新材料', '能源', '纳米技术'],
    status: 'published',
    isHot: true,
  },
  {
    id: '3',
    title: '智能农业物联网监测系统专利',
    summary: '实现农田环境的实时监测和智能调控',
    description: '基于物联网技术的农业监测系统，通过传感器网络实时采集温度、湿度、土壤养分等参数。',
    plainDescription: '这是一个帮助农民种地的智能系统。它会自动监测农田的温度、湿度、土壤肥力等情况，然后告诉农民什么时候该浇水、施肥，让农作物长得更好，产量更高。',
    type: 'patent',
    industry: 'agriculture',
    region: 'jiangsu',
    subject: 'enterprise',
    author: '江苏农业科技有限公司',
    publishDate: '2024-01-25',
    viewCount: 654,
    followCount: 89,
    useCases: ['精准农业', '温室管理', '作物监测', '灌溉控制'],
    tags: ['物联网', '智能农业', '传感器', '大数据'],
    status: 'published',
    isHot: false,
  },
  {
    id: '4',
    title: '基因编辑技术在癌症治疗中的应用研究',
    summary: 'CRISPR技术精准编辑癌细胞基因，治疗效果显著',
    description: '利用CRISPR-Cas9基因编辑技术，开发出针对特定癌症类型的精准治疗方案。',
    plainDescription: '这是一种治疗癌症的新方法，就像用分子级别的“剪刀”把癌细胞里的坏基因剪掉，让癌细胞变回正常细胞或者直接死掉。这种方法非常精准，只针对癌细胞，不伤害正常细胞。',
    type: 'paper',
    industry: 'biotech',
    region: 'guangdong',
    subject: 'university',
    author: '中山大学生命科学学院',
    publishDate: '2024-02-01',
    viewCount: 1156,
    followCount: 287,
    useCases: ['癌症治疗', '基因治疗', '精准医学', '生物制药'],
    tags: ['CRISPR', '基因编辑', '癌症', '生物技术'],
    status: 'published',
    isHot: true,
  },
  {
    id: '5',
    title: '智能制造执行系统软件',
    summary: '提升制造效率40%，降低成本25%',
    description: '面向智能制造的MES系统，集成了生产计划、质量管理、设备维护等功能模块。',
    plainDescription: '这是一个帮助工厂变得更智能的软件系统。它能帮工厂安排生产计划、检查产品质量、维护机器设备，让工厂生产效率提高40%，成本降低25%。就像给工厂装了一个超级大脑。',
    type: 'software',
    industry: 'manufacturing',
    region: 'zhejiang',
    subject: 'enterprise',
    author: '杭州智造科技有限公司',
    publishDate: '2024-02-05',
    viewCount: 743,
    followCount: 124,
    useCases: ['智能制造', '生产管理', '质量控制', '设备监控'],
    tags: ['MES系统', '智能制造', '数字化', '工业4.0'],
    status: 'published',
    isHot: false,
  },
] as const;

// 模拟需求数据
export const MOCK_DEMANDS = [
  {
    id: '1',
    title: '高效太阳能电池封装技术合作需求',
    summary: '寻求提高太阳能电池转换效率的封装技术方案',
    description: '我们是一家专业从事太阳能发电设备制造的企业，目前急需一种能够提高太阳能电池板转换效率的封装技术。要求技术成熟度高，可规模化生产，成本控制合理。',
    type: 'technology',
    industry: 'newenergy',
    region: 'beijing',
    demander: '阳光新能源科技有限公司',
    publishDate: '2024-02-10',
    viewCount: 1456,
    followCount: 89,
    budget: '500-1000万',
    deadline: '2024-06-30',
    requirements: ['技术成熟度TRL7以上', '可规模化生产', '成本优化方案', '专利无纠纷'],
    tags: ['太阳能', '封装技术', '新能源', '清洁技术'],
    status: 'urgent',
    category: 'featured',
    contact: '邮箱: contact@suntech.com',
  },
  {
    id: '2',
    title: '智能制造生产线数字化改造项目',
    summary: '传统生产线向智能制造转型升级技术需求',
    description: '制造企业现有生产线自动化程度不高，需要进行数字化、智能化改造。包括设备联网、数据采集、生产管控、质量追溯等全流程数字化解决方案。',
    type: 'technology',
    industry: 'manufacturing',
    region: 'shanghai',
    demander: '华东智能制造股份有限公司',
    publishDate: '2024-02-08',
    viewCount: 987,
    followCount: 156,
    budget: '1000-2000万',
    deadline: '2024-08-15',
    requirements: ['工业4.0标准', 'MES系统集成', '实时数据监控', '柔性生产'],
    tags: ['智能制造', 'MES系统', '数字化改造', '工业4.0'],
    status: 'hot',
    category: 'hot',
    contact: '电话: 021-88888888',
  },
  {
    id: '3',
    title: '新型抗癌药物筛选平台建设',
    summary: '构建高通量药物筛选和评价技术平台',
    description: '面向肿瘤精准治疗需求，建设新药筛选平台，包括细胞模型构建、高通量筛选技术、药效评价体系等，为新药研发提供技术支撑。',
    type: 'technology',
    industry: 'biotech',
    region: 'guangdong',
    demander: '南方生物医药研究院',
    publishDate: '2024-02-05',
    viewCount: 1234,
    followCount: 67,
    budget: '2000-5000万',
    deadline: '2024-12-31',
    requirements: ['GMP标准', '高通量筛选技术', '精准医疗', '临床转化'],
    tags: ['抗癌药物', '高通量筛选', '精准医疗', '新药研发'],
    status: 'challenge',
    category: 'challenge',
    contact: '微信: biomedical2024',
  },
  {
    id: '4',
    title: 'AI辅助医疗诊断系统开发',
    summary: '基于深度学习的影像诊断辅助系统',
    description: '开发基于AI的医疗影像诊断辅助系统，能够对CT、MRI等医学影像进行智能分析，提高诊断准确率和效率，减轻医生工作负担。',
    type: 'technology',
    industry: 'ai',
    region: 'beijing',
    demander: '首都医科大学附属医院',
    publishDate: '2024-02-03',
    viewCount: 1567,
    followCount: 134,
    budget: '800-1500万',
    deadline: '2024-10-30',
    requirements: ['医疗器械认证', '高准确率', '临床可用', '数据安全'],
    tags: ['AI诊断', '医学影像', '深度学习', '智能医疗'],
    status: 'featured',
    category: 'featured',
    contact: '手机: 138-0000-1234',
  },
  {
    id: '5',
    title: '碳纤维复合材料轻量化设计',
    summary: '航空航天用碳纤维复合材料结构优化',
    description: '针对航空航天领域轻量化需求，开发高性能碳纤维复合材料及其结构设计技术，实现减重30%以上，同时保证强度和可靠性。',
    type: 'technology',
    industry: 'aerospace',
    region: 'shaanxi',
    demander: '西北航空工业集团',
    publishDate: '2024-02-01',
    viewCount: 892,
    followCount: 45,
    budget: '3000-8000万',
    deadline: '2025-03-31',
    requirements: ['航空标准', '减重30%以上', '高可靠性', '批量生产'],
    tags: ['碳纤维', '复合材料', '轻量化', '航空航天'],
    status: 'challenge',
    category: 'challenge',
    contact: 'QQ: 123456789',
  },
] as const;

// 用户角色选项
export const USER_ROLES = [
  { value: 'individual', label: '个人用户' },
  { value: 'enterprise', label: '企业用户' },
  { value: 'institution', label: '机构用户' },
  { value: 'expert', label: '专家用户' },
] as const;

// 人才专区子模块
export const TALENT_MODULES = [
  {
    id: 'tech-broker',
    name: '技术经纪人专区',
    description: '专业技术经纪人，为您提供技术转移和商业化服务',
    icon: '💼',
    path: '/services/talent/tech-broker',
    buttonText: '进入专区',
  },
  {
    id: 'innovation-coordinator',
    name: '创新协同员专区',
    description: '协同创新专家，协助产学研合作和跨领域协同',
    icon: '🤝',
    path: '/services/talent/innovation-coordinator',
    buttonText: '进入专区',
  },
  {
    id: 'ecosystem-designer',
    name: '生态设计师专区',
    description: '专业生态设计师，构建创新生态系统和平台',
    icon: '🎨',
    path: '/services/talent/ecosystem-designer',
    buttonText: '进入专区',
  },
] as const;

// 市场资源模块
export const MARKET_RESOURCE_MODULES = [
  {
    id: 'validation',
    name: '概念验证',
    description: '通过AI智能匹配验证您的方案在市场上是否成立',
    icon: '🧪',
    path: '/services/validation',
    buttonText: '开始验证',
  },
  {
    id: 'cooperation',
    name: '校企合作',
    description: '提供企业合作对接、咨询与学校合作服务',
    icon: '🎓',
    path: '/services/cooperation',
    buttonText: '寻找合作',
  },
  {
    id: 'funding',
    name: '金融融资',
    description: '根据价格、水平、投资倾向提供贷款担保等',
    icon: '💰',
    path: '/services/funding',
    buttonText: '获取融资',
  },
  {
    id: 'incubation',
    name: '项目孵化',
    description: '提供投资机构与投资人的推荐与对接',
    icon: '🚀',
    path: '/services/incubation',
    buttonText: '申请孵化',
  },
] as const;

// 服务中心模块（保留原有结构用于兼容性）
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