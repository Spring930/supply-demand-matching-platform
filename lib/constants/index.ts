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
    // 详情页新增字段
    researchUnit: '清华大学计算机科学与技术系',
    maturityLevel: '技术成熟度较高，可产业化应用',
    contactPerson: '张教授 - zhang@tsinghua.edu.cn',
    fullDescription: `本项目基于深度学习的智能图像识别系统，采用最新的卷积神经网络架构，结合注意力机制和数据增强技术，实现了高精度的图像识别功能。

系统的核心技术包括：
1. 基于ResNet和Transformer的混合架构
2. 自适应注意力机制，提高识别精度
3. 多尺度特征融合技术
4. 数据增强和对抗训练技术

技术指标：
- 识别准确率：99.5%
- 处理速度：每秒1000张图片
- 支持目标类别：超过10,000种
- 系统稳定性：99.9%`,
    applicationScenarios: '智能安防监控、医疗影像诊断、工业质量检测、自动驾驶视觉感知、智能零售、农业病虫害识别',
    achievements: ['获得国家发明专利3项', '发表SCI论文8篇', '获得教育部科技进步一等奖', '技术转化收益超过500万元'],
    cooperationMode: '技术转让、合作开发、专利授权',
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
    // 详情页新增字段
    researchUnit: '中科院上海硅酸盐研究所',
    maturityLevel: '中试阶段，已完成产业化验证',
    contactPerson: '李研究员 - li@siccas.ac.cn',
    fullDescription: `新型锂电池正极材料制备工艺采用纳米材料改性和表面包覆技术，开发出具有高容量、长寿命、高安全性的锂电池正极材料。

技术特点：
1. 采用纳米级材料改性，提高电化学性能
2. 表面包覆技术，增强材料稳定性
3. 优化的制备工艺，降低生产成本
4. 环保制备过程，符合绿色发展要求

性能指标：
- 电池容量提升：30%
- 循环寿命延长：50%
- 安全性能：通过所有国际标准测试
- 成本降低：15%`,
    applicationScenarios: '电动汽车动力电池、储能系统、消费电子产品、航空航天设备、工业设备供电',
    achievements: ['获得发明专利5项', '产业化合作协议3项', '获得中科院科技进步二等奖', '技术许可费收入200万元'],
    cooperationMode: '技术许可、联合开发、股权投资',
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
    // 详情页新增字段
    researchUnit: '江苏农业科技有限公司',
    maturityLevel: '技术成熟，已在多个地区应用',
    contactPerson: '王工程师 - wang@jsagri.com',
    fullDescription: `智能农业物联网监测系统基于物联网技术的农业监测系统，通过传感器网络实时采集温度、湿度、土壤养分等参数。

系统组成：
1. 传感器网络：温度、湿度、土壤养分、pH值等
2. 数据采集系统：高精度、高可靠数据采集
3. 智能分析平台：基于大数据的决策支持
4. 移动应用：实时监控和远程控制

技术优势：
- 实时监测精度：±2%
- 数据传输距离：可达5公里
- 电池寿命：超过1年
- 耐候性能：-40°C至80°C`,
    applicationScenarios: '精准农业生产、温室管理、作物监测、灌溉控制、农业保险、农产品质量追溯',
    achievements: ['获得实用新型专刐6项', '在江苏、5个地区应用', '获得江苏省科技进步三等奖', '市场销售额达300万元'],
    cooperationMode: '产品销售、技术服务、合作运营',
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
    // 详情页新增字段
    researchUnit: '中山大学生命科学学院',
    maturityLevel: '实验室阶段，已完成动物实验',
    contactPerson: '陈教授 - chen@sysu.edu.cn',
    fullDescription: `基因编辑技术在癌症治疗中的应用研究利用CRISPR-Cas9基因编辑技术，开发出针对特定癌症类型的精准治疗方案。

研究内容：
1. CRISPR-Cas9系统的优化和改进
2. 癌症细胞特异性目标的识别和验证
3. 基因编辑的安全性评估和控制
4. 临床前的效果评估和优化

技术特点：
- 高精度目标识别：误切率<0.1%
- 高效的编辑效率：>80%
- 低毒印反应：其他细胞存活率>95%
- 稳定的治疗效果：动物实验效果显著`,
    applicationScenarios: '癌症精准治疗、基因治疗、精准医学、生物制药、医学研究、诊断试剂开发',
    achievements: ['发表Nature子刊论文2篇', '申请国际发明专利3项', '获得国家自然科学基金支持', '与制药企业达成合作意向'],
    cooperationMode: '联合研发、技术转让、临床试验合作',
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
    // 详情页新增字段
    researchUnit: '杭州智造科技有限公司',
    maturityLevel: '技术成熟，已在多家企业应用',
    contactPerson: '刘总工程师 - liu@hzsmartmfg.com',
    fullDescription: `智能制造执行系统软件面向智能制造的MES系统，集成了生产计划、质量管理、设备维护等功能模块。

系统功能模块：
1. 生产计划与调度管理
2. 质量管理与追溯系统
3. 设备维护与状态监控
4. 工艺参数管理与优化
5. 数据采集与分析系统
6. 报表与可视化看板

技术特点：
- 提升制造效率：40%
- 降低生产成本：25%
- 实时数据采集率：>95%
- 系统可用性：>99%`,
    applicationScenarios: '智能制造生产线、生产计划管理、质量控制系统、设备监控、工业大数据分析',
    achievements: ['获得软件著作权登记10项', '在浙江、50家企业应用', '获得浙江省科技进步一等奖', '市场销售额达2000万元'],
    cooperationMode: '软件销售、定制开发、系统集成',
  },
] as const;

// 模拟需求数据
export const MOCK_DEMANDS = [
  {
    id: '1',
    title: '高效太阳能电池封装技术合作需求',
    summary: '寻求提高太阳能电池转换效率的封装技术方案',
    description: '我们是一家专业从事太阳能发电设备制造的企业，目前急需一种能够提高太阳能电池板转换效率的封装技术。要求技术成熟度高，可规模化生产，成本控制合理。',
    fullDescription: '主要研究内容：本项目主攻开发无毒无害、绿色环保的纸张用无氟生物基防油剂，主要开展无氟无害生物基防油剂的配方设计，全面优化制备工艺技术，提升生物基防油剂产品性能，并对新型生物基防油剂在纸张表面的应用关键技术进行攻关研发。缴效目标：（1）防油剂产品性能与当前要求：外观：乳液状；pH值：3-7；固含量：3-15%；成分：不含氟；不含邻苯二甲酸酯类物质；不含紫外线吸收剂乙醇；不含邻苯二甲酸酯类物质；不含禁止使用化学品（甲、乙类危害认定的非公开作业禁），中列出的化学品。防油剂重要成分均符合食品接触材料及制品用添加剂使用标准 (GB9685-2016)，符合重金属迁移量 (GB 31604.49-2016)、高锰酸钾消耗量 (GB31604.2-2016)、甲醛迁移量 (GB31604.48-2016) 要求，符合消毒餐饮具（GB14934-2016）的微生物限度规定。（2）产品性能及特点：应用方便，通过计量供液可用于家庭装纸容器不超过1.3 g/m2时，纸张的拉力等级不低于6级；当防油剂双面涂盛含量不大于4 g/m2时，所制备的纸张的油脂等级不低于8级，将1 mL，85°C的大豆油滴于上述纸后立保养10分钟后取去，纸张表面无明显油渍渗透，属于生物基防油剂，可用于食品级纸制品，防油剂的制备工艺及其综合涂布工艺适合食品级纸制品组装国家法规、法规、甲方标准的规定。',
    organization: '阳光新能源科技有限公司',
    type: 'technology',
    industry: 'newenergy',
    region: 'beijing',
    demander: '阳光新能源科技有限公司',
    publishDate: '2024-02-10',
    viewCount: 1456,
    followCount: 89,
    budget: 500,
    deadline: '2024-06-30',
    requirements: ['技术成熟度TRL7以上', '可规模化生产', '成本优化方案', '专利无纠纷'],
    tags: ['太阳能', '封装技术', '新能源', '清洁技术'],
    status: 'featured',
    category: 'featured',
    contact: 'contact@suntech.com',
    urgency: '紧急',
    applicantCount: 12,
  },
  {
    id: '2',
    title: '智能制造生产线数字化改造项目',
    summary: '传统生产线向智能制造转型升级技术需求',
    description: '制造企业现有生产线自动化程度不高，需要进行数字化、智能化改造。包括设备联网、数据采集、生产管控、质量追溯等全流程数字化解决方案。',
    fullDescription: '主要研究内容：本项目主攻开发无毒无害、绿色环保的纸张用无氟生物基防油剂，主要开展无氟无害生物基防油剂的配方设计，全面优化制备工艺技术，提升生物基防油剂产品性能，并对新型生物基防油剂在纸张表面的应用关键技术进行攻关研发。缴效目标：（1）防油剂产品性能与当前要求：外观：乳液状；pH值：3-7；固含量：3-15%；成分：不含氟；不含邻苯二甲酸酯类物质；不含紫外线吸收剂乙醇；不含邻苯二甲酸酯类物质；不含禁止使用化学品，中列出的化学品。防油剂重要成分均符合食品接触材料及制品用添加剂使用标准，符合重金属迁移量、高锰酸钾消耗量、甲醛迁移量要求，符合消毒餐饮具的微生物限度规定。（2）产品性能及特点：应用方便，通过计量供液可用于家庭装纸容器，纸张的拉力等级不低于6级；当防油剂双面涂盛含量不大于4 g/m2时，所制备的纸张的油脂等级不低于8级，属于生物基防油剂，可用于食品级纸制品。',
    organization: '华东智能制造股份有限公司',
    type: 'technology',
    industry: 'manufacturing',
    region: 'shanghai',
    demander: '华东智能制造股份有限公司',
    publishDate: '2024-02-08',
    viewCount: 987,
    followCount: 156,
    budget: 1500,
    deadline: '2024-08-15',
    requirements: ['工业4.0标准', 'MES系统集成', '实时数据监控', '柔性生产'],
    tags: ['智能制造', 'MES系统', '数字化改造', '工业4.0'],
    status: 'hot',
    category: 'hot',
    contact: '021-88888888',
    urgency: '一般',
    applicantCount: 28,
  },
  {
    id: '3',
    title: '新型抗癌药物筛选平台建设',
    summary: '构建高通量药物筛选和评价技术平台',
    description: '面向肿瘤精准治疗需求，建设新药筛选平台，包括细胞模型构建、高通量筛选技术、药效评价体系等，为新药研发提供技术支撑。',
    fullDescription: '主要研究内容：本项目主攻开发无毒无害、绿色环保的纸张用无氟生物基防油剂，主要开展无氟无害生物基防油剂的配方设计，全面优化制备工艺技术，提升生物基防油剂产品性能，并对新型生物基防油剂在纸张表面的应用关键技术进行攻关研发。缴效目标：防油剂产品性能与当前要求，应用方便，通过计量供液可用于家庭装纸容器，纸张的拉力等级不低于6级；当防油剂双面涂盛含量不大于4 g/m2时，所制备的纸张的油脂等级不低于8级，属于生物基防油剂，可用于食品级纸制品，防油剂的制备工艺及其综合涂布工艺适合食品级纸制品组装国家法规要求。',
    organization: '南方生物医药研究院',
    type: 'technology',
    industry: 'biotech',
    region: 'guangdong',
    demander: '南方生物医药研究院',
    publishDate: '2024-02-05',
    viewCount: 1234,
    followCount: 67,
    budget: 3500,
    deadline: '2024-12-31',
    requirements: ['GMP标准', '高通量筛选技术', '精准医疗', '临床转化'],
    tags: ['抗癌药物', '高通量筛选', '精准医疗', '新药研发'],
    status: 'challenge',
    category: 'challenge',
    contact: 'biomedical2024',
    urgency: '高',
    applicantCount: 8,
  },
  {
    id: '4',
    title: 'AI辅助医疗诊断系统开发',
    summary: '基于深度学习的影像诊断辅助系统',
    description: '开发基于AI的医疗影像诊断辅助系统，能够对CT、MRI等医学影像进行智能分析，提高诊断准确率和效率，减轻医生工作负担。',
    fullDescription: '主要研究内容：本项目主攻开发基于深度学习的医疗影像诊断辅助系统，主要开展AI算法模型设计，全面优化图像处理工艺技术，提升诊断准确率和效率，并对新型AI诊断系统在临床应用中的关键技术进行攻关研发。预期目标：（1）系统性能要求：诊断准确率：≥95%；响应时间：≤3秒；支持格式：DICOM标准；兼容性：支持CT、MRI、X光等主流设备；安全性：符合医疗数据隐私保护要求。（2）产品功能特点：智能识别病灶区域，自动生成诊断报告，提供量化分析结果，支持多模态医学影像融合分析，具备学习能力可持续优化诊断效果，符合医疗器械认证标准。',
    organization: '首都医科大学附属医院',
    type: 'technology',
    industry: 'ai',
    region: 'beijing',
    demander: '首都医科大学附属医院',
    publishDate: '2024-02-03',
    viewCount: 1567,
    followCount: 134,
    budget: 1200,
    deadline: '2024-10-30',
    requirements: ['医疗器械认证', '高准确率', '临床可用', '数据安全'],
    tags: ['AI诊断', '医学影像', '深度学习', '智能医疗'],
    status: 'featured',
    category: 'featured',
    contact: '138-0000-1234',
    urgency: '中等',
    applicantCount: 15,
  },
  {
    id: '5',
    title: '碳纤维复合材料轻量化设计',
    summary: '航空航天用碳纤维复合材料结构优化',
    description: '针对航空航天领域轻量化需求，开发高性能碳纤维复合材料及其结构设计技术，实现减重30%以上，同时保证强度和可靠性。',
    fullDescription: '主要研究内容：本项目主攻开发航空航天用高性能碳纤维复合材料，主要开展碳纤维复合材料配方设计，全面优化制备工艺技术，提升复合材料轻量化性能，并对新型碳纤维复合材料在航空航天结构件中的应用关键技术进行攻关研发。预期目标：（1）材料性能要求：减重效果：≥30%；强度保持率：≥95%；疲劳寿命：≥10万次；耐温范围：-50°C至200°C；符合航空材料标准。（2）产品特点：具有优异的力学性能，良好的工艺性能，适合批量生产，成本控制合理，通过适航认证，符合环保要求，可广泛应用于机身、机翼等关键结构部件。',
    organization: '西北航空工业集团',
    type: 'technology',
    industry: 'aerospace',
    region: 'shaanxi',
    demander: '西北航空工业集团',
    publishDate: '2024-02-01',
    viewCount: 892,
    followCount: 45,
    budget: 5500,
    deadline: '2025-03-31',
    requirements: ['航空标准', '减重30%以上', '高可靠性', '批量生产'],
    tags: ['碳纤维', '复合材料', '轻量化', '航空航天'],
    status: 'challenge',
    category: 'challenge',
    contact: '123456789',
    urgency: '高',
    applicantCount: 6,
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
    description: '专业创新协同员，为您提供创新项目协调和团队协作服务',
    icon: '⚡',
    path: '/services/talent/innovation-coordinator',
    buttonText: '进入专区',
  },
  {
    id: 'eco-designer',
    name: '生态设计师专区',
    description: '专业生态设计师，为您提供可持续发展设计和生态系统构建服务',
    icon: '🌿',
    path: '/services/talent/eco-designer',
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

// 孵化器相关常量

// 孵化器类型
export const INCUBATOR_TYPES = [
  { value: 'government', label: '政府主导', color: '#004A36', icon: '🏛️' },
  { value: 'university', label: '高校孵化器', color: '#00FFB9', icon: '🎓' },
  { value: 'enterprise', label: '企业孵化器', color: '#002E21', icon: '🏢' },
  { value: 'professional', label: '专业孵化器', color: '#9AA0A6', icon: '🔬' },
  { value: 'investment', label: '投资型孵化器', color: '#E0E2E3', icon: '💰' },
] as const;

// 孵化器级别
export const INCUBATOR_LEVELS = [
  { value: 'national', label: '国家级', color: '#002E21', priority: 1 },
  { value: 'provincial', label: '省级', color: '#004A36', priority: 2 },
  { value: 'municipal', label: '市级', color: '#00FFB9', priority: 3 },
  { value: 'district', label: '区级', color: '#9AA0A6', priority: 4 },
] as const;

// 孵化器聚焦领域
export const INCUBATOR_FOCUS_AREAS = [
  { value: 'ai', label: '人工智能', icon: '🤖' },
  { value: 'biotech', label: '生物技术', icon: '🧬' },
  { value: 'fintech', label: '金融科技', icon: '💳' },
  { value: 'healthtech', label: '医疗健康', icon: '🏥' },
  { value: 'cleantech', label: '清洁技术', icon: '🌱' },
  { value: 'edtech', label: '教育科技', icon: '📚' },
  { value: 'iot', label: '物联网', icon: '🌐' },
  { value: 'robotics', label: '机器人', icon: '🤖' },
  { value: 'blockchain', label: '区块链', icon: '⛓️' },
  { value: 'general', label: '综合领域', icon: '🔄' },
] as const;

// 孵化器服务类型
export const INCUBATOR_SERVICES = [
  { value: 'funding', label: '资金支持', icon: '💰' },
  { value: 'mentorship', label: '导师指导', icon: '👨‍🏫' },
  { value: 'networking', label: '人脉网络', icon: '🤝' },
  { value: 'workspace', label: '办公空间', icon: '🏢' },
  { value: 'legal', label: '法律服务', icon: '⚖️' },
  { value: 'marketing', label: '市场推广', icon: '📢' },
  { value: 'technology', label: '技术支持', icon: '💻' },
  { value: 'training', label: '培训课程', icon: '📋' },
] as const;

// 孵化器模拟数据
export const MOCK_INCUBATORS = [
  {
    id: '1',
    name: '中关村国家自主创新示范区创业孵化器',
    shortName: '中关村创业孵化器',
    type: 'government',
    level: 'national',
    region: 'beijing',
    address: '北京市海淀区中关村大街1号',
    establishedYear: 2009,
    focusAreas: ['ai', 'biotech', 'fintech'],
    services: ['funding', 'mentorship', 'networking', 'workspace'],
    description: '中关村国家自主创新示范区核心孵化器，专注于高新技术项目孵化，已成功孵化500+项目。',
    achievements: {
      totalProjects: 520,
      successfulExits: 85,
      totalFunding: '15.6亿元',
      averageIncubationTime: '18个月',
    },
    features: [
      '国家级孵化器认证',
      '一站式创业服务',
      '顶级导师团队',
      '完善的投资网络',
    ],
    contactInfo: {
      phone: '010-82345678',
      email: 'contact@zgc-incubator.com',
      website: 'https://www.zgc-incubator.com',
    },
    applicationRequirements: [
      '具有完整的商业计划书',
      '项目具有技术创新性',
      '团队具备相关专业背景',
      '项目处于早期阶段',
    ],
    logo: 'https://placehold.co/120x120/004A36/ffffff?text=ZGC',
    images: [
      'https://placehold.co/600x400/00FFB9/ffffff?text=Office+Space',
      'https://placehold.co/600x400/004A36/ffffff?text=Meeting+Room',
    ],
    rating: 4.8,
    reviewCount: 156,
    isRecommended: true,
    isHot: true,
    status: 'active',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: '2',
    name: '清华大学x-lab创业孵化器',
    shortName: '清华x-lab',
    type: 'university',
    level: 'national',
    region: 'beijing',
    address: '北京市海淀区清华大学',
    establishedYear: 2013,
    focusAreas: ['ai', 'iot', 'robotics'],
    services: ['mentorship', 'networking', 'technology', 'training'],
    description: '清华大学创意创新创业教育平台，致力于培养具有创新精神和实践能力的创业人才。',
    achievements: {
      totalProjects: 380,
      successfulExits: 72,
      totalFunding: '8.9亿元',
      averageIncubationTime: '15个月',
    },
    features: [
      '顶尖高校资源',
      '国际化视野',
      '产学研结合',
      '校友网络支持',
    ],
    contactInfo: {
      phone: '010-62783456',
      email: 'info@x-lab.tsinghua.edu.cn',
      website: 'https://www.x-lab.tsinghua.edu.cn',
    },
    applicationRequirements: [
      '具有创新性技术或商业模式',
      '团队成员具有相关教育背景',
      '项目具有可扩展性',
      '符合学校价值观',
    ],
    logo: 'https://placehold.co/120x120/00FFB9/ffffff?text=XLAB',
    images: [
      'https://placehold.co/600x400/004A36/ffffff?text=Lab+Space',
      'https://placehold.co/600x400/002E21/ffffff?text=Innovation+Hub',
    ],
    rating: 4.9,
    reviewCount: 203,
    isRecommended: true,
    isHot: false,
    status: 'active',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
  },
  {
    id: '3',
    name: '腾讯众创空间（上海）',
    shortName: '腾讯众创空间',
    type: 'enterprise',
    level: 'provincial',
    region: 'shanghai',
    address: '上海市徐汇区漕河泾开发区',
    establishedYear: 2015,
    focusAreas: ['ai', 'fintech', 'general'],
    services: ['funding', 'mentorship', 'networking', 'marketing'],
    description: '腾讯公司旗下创业孵化平台，依托腾讯生态资源，为创业者提供全方位支持。',
    achievements: {
      totalProjects: 290,
      successfulExits: 58,
      totalFunding: '12.3亿元',
      averageIncubationTime: '20个月',
    },
    features: [
      '腾讯生态支持',
      '流量资源对接',
      '产业链整合',
      '国际化布局',
    ],
    contactInfo: {
      phone: '021-54321098',
      email: 'shanghai@tencent-maker.com',
      website: 'https://maker.tencent.com',
    },
    applicationRequirements: [
      '项目与腾讯生态有结合点',
      '具有市场潜力',
      '团队执行力强',
      '商业模式清晰',
    ],
    logo: 'https://placehold.co/120x120/002E21/ffffff?text=TX',
    images: [
      'https://placehold.co/600x400/00FFB9/ffffff?text=Creative+Space',
      'https://placehold.co/600x400/9AA0A6/ffffff?text=Demo+Day',
    ],
    rating: 4.7,
    reviewCount: 142,
    isRecommended: false,
    isHot: true,
    status: 'active',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19',
  },
  {
    id: '4',
    name: '深圳湾科技生态园孵化器',
    shortName: '深圳湾科技园',
    type: 'professional',
    level: 'municipal',
    region: 'guangdong',
    address: '广东省深圳市南山区深圳湾科技生态园',
    establishedYear: 2018,
    focusAreas: ['biotech', 'healthtech', 'cleantech'],
    services: ['funding', 'workspace', 'legal', 'technology'],
    description: '专注于生物技术和健康科技领域的专业孵化器，提供产业化全链条服务。',
    achievements: {
      totalProjects: 165,
      successfulExits: 28,
      totalFunding: '6.7亿元',
      averageIncubationTime: '22个月',
    },
    features: [
      '专业领域聚焦',
      '产业化导向',
      '国际合作网络',
      '政策支持丰富',
    ],
    contactInfo: {
      phone: '0755-86789123',
      email: 'info@szb-biotech.com',
      website: 'https://www.szb-biotech.com',
    },
    applicationRequirements: [
      '生物技术或健康领域项目',
      '具有知识产权',
      '团队专业背景匹配',
      '符合产业发展方向',
    ],
    logo: 'https://placehold.co/120x120/9AA0A6/ffffff?text=SZB',
    images: [
      'https://placehold.co/600x400/004A36/ffffff?text=Bio+Lab',
      'https://placehold.co/600x400/00FFB9/ffffff?text=Research+Center',
    ],
    rating: 4.6,
    reviewCount: 89,
    isRecommended: true,
    isHot: false,
    status: 'active',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-16',
  },
  {
    id: '5',
    name: '杭州梦想小镇互联网创业孵化器',
    shortName: '梦想小镇',
    type: 'government',
    level: 'provincial',
    region: 'zhejiang',
    address: '浙江省杭州市余杭区梦想小镇',
    establishedYear: 2014,
    focusAreas: ['fintech', 'edtech', 'general'],
    services: ['funding', 'mentorship', 'networking', 'training'],
    description: '杭州市政府重点打造的创业孵化平台，专注于互联网和数字经济领域创新创业。',
    achievements: {
      totalProjects: 450,
      successfulExits: 89,
      totalFunding: '18.2亿元',
      averageIncubationTime: '16个月',
    },
    features: [
      '政府政策支持',
      '产业集群优势',
      '投资机构集聚',
      '创业氛围浓厚',
    ],
    contactInfo: {
      phone: '0571-89012345',
      email: 'contact@dreamtown.gov.cn',
      website: 'https://www.dreamtown.gov.cn',
    },
    applicationRequirements: [
      '互联网或数字经济项目',
      '具有创新商业模式',
      '团队具备互联网背景',
      '项目具有发展潜力',
    ],
    logo: 'https://placehold.co/120x120/E0E2E3/002E21?text=DREAM',
    images: [
      'https://placehold.co/600x400/00FFB9/ffffff?text=Dream+Town',
      'https://placehold.co/600x400/004A36/ffffff?text=Startup+Hub',
    ],
    rating: 4.5,
    reviewCount: 267,
    isRecommended: false,
    isHot: true,
    status: 'active',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-17',
  },
  {
    id: '6',
    name: '成都天府新区独角兽岛孵化器',
    shortName: '独角兽岛',
    type: 'investment',
    level: 'provincial',
    region: 'sichuan',
    address: '四川省成都市天府新区独角兽岛',
    establishedYear: 2019,
    focusAreas: ['ai', 'blockchain', 'iot'],
    services: ['funding', 'mentorship', 'workspace', 'legal'],
    description: '专注于培育独角兽企业的投资型孵化器，提供从天使轮到IPO的全程投资服务。',
    achievements: {
      totalProjects: 125,
      successfulExits: 15,
      totalFunding: '25.8亿元',
      averageIncubationTime: '24个月',
    },
    features: [
      '投资导向孵化',
      '独角兽培育',
      '国际化平台',
      '生态圈建设',
    ],
    contactInfo: {
      phone: '028-85678901',
      email: 'info@unicorn-island.com',
      website: 'https://www.unicorn-island.com',
    },
    applicationRequirements: [
      '具有独角兽潜质',
      '可扩展商业模式',
      '优秀团队构成',
      '明确退出路径',
    ],
    logo: 'https://placehold.co/120x120/004A36/ffffff?text=UNICORN',
    images: [
      'https://placehold.co/600x400/002E21/ffffff?text=Investment+Hub',
      'https://placehold.co/600x400/9AA0A6/ffffff?text=Unicorn+Space',
    ],
    rating: 4.9,
    reviewCount: 67,
    isRecommended: true,
    isHot: false,
    status: 'active',
    createdAt: '2024-01-03',
    updatedAt: '2024-01-15',
  },
] as const;