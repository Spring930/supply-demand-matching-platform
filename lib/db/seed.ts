import { db } from './drizzle';
import { users, demands, achievements } from './schema';
import { hashPassword } from '@/lib/auth/session';

async function seed() {
  const email = 'test@test.com';
  const password = 'admin123';
  const passwordHash = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values([
      {
        email: email,
        passwordHash: passwordHash,
        name: 'Test User',
      },
    ])
    .returning();

  console.log('Initial user created.');

  // 创建示例成果数据
  const sampleAchievements = [
    {
      userId: user.id,
      title: '基于深度学习的智能图像识别系统',
      summary: '高精度图像识别，准确率达99.5%',
      description: '基于最新的深度学习技术，开发的智能图像识别系统能够实现高精度的目标识别、分类和检测。',
      fullDescription: `本项目基于深度学习的智能图像识别系统，采用最新的卷积神经网络架构，结合注意力机制和数据增强技术，实现了高精度的图像识别功能。\n\n系统的核心技术包括：\n1. 基于ResNet和Transformer的混合架构\n2. 自适应注意力机制，提高识别精度\n3. 多尺度特征融合技术\n4. 数据增强和对抗训练技术`,
      type: 'technology',
      industry: 'ai',
      region: 'beijing',
      subject: 'university',
      organization: '清华大学计算机科学与技术系',
      contact: 'zhang@tsinghua.edu.cn',
      contactPerson: '张教授',
      maturityLevel: '技术成熟度较高，可产业化应用',
      applicationField: '智能安防监控、医疗影像诊断、工业质量检测、自动驾驶视觉感知',
      technicalAdvantage: '获得国家发明专剩3项\n发表SCI论文8篇\n获得教育部科技进步一等奖\n技术转化收益超过500万元',
      cooperationMode: '技术转让、合作开发、专利授权',
      tags: ['深度学习', '图像识别', 'AI', '计算机视觉'],
    },
    {
      userId: user.id,
      title: '新型锂电池正极材料制备工艺',
      summary: '提高电池容量30%，延长使用寿命50%',
      description: '通过纳米材料改性和表面包覆技术，开发出具有高容量、长寿命、高安全性的锂电池正极材料。',
      fullDescription: '新型锂电池正极材料制备工艺采用纳米材料改性和表面包覆技术，开发出具有高容量、长寿命、高安全性的锂电池正极材料。',
      type: 'technology',
      industry: 'newenergy',
      region: 'shanghai',
      subject: 'research',
      organization: '中科院上海硅酸盐研究所',
      contact: 'li@siccas.ac.cn',
      contactPerson: '李研究员',
      maturityLevel: '中试阶段，已完成产业化验证',
      applicationField: '电动汽车动力电池、储能系统、消费电子产品',
      technicalAdvantage: '获得发明专剨5项\n产业化合作协议3项\n获得中科院科技进步二等奖',
      cooperationMode: '技术许可、联合开发、股权投资',
      tags: ['锂电池', '新材料', '能源', '纳米技术'],
    },
    {
      userId: user.id,
      title: '智能农业物联网监测系统专利',
      summary: '实现农田环境的实时监测和智能调控',
      description: '基于物联网技术的农业监测系统，通过传感器网络实时采集温度、湿度、土壤养分等参数。',
      fullDescription: '智能农业物联网监测系统基于物联网技术的农业监测系统，通过传感器网络实时采集温度、湿度、土壤养分等参数。',
      type: 'patent',
      industry: 'agriculture',
      region: 'jiangsu',
      subject: 'enterprise',
      organization: '江苏农业科技有限公司',
      contact: 'wang@jsagri.com',
      contactPerson: '王工程师',
      maturityLevel: '技术成熟，已在多个地区应用',
      applicationField: '精准农业生产、温室管理、作物监测',
      technicalAdvantage: '获得实用新型专列6项\n在江苏、5个地区应用\n市场销售额达300万元',
      cooperationMode: '产品销售、技术服务、合作运营',
      tags: ['物联网', '智能农业', '传感器', '大数据'],
    }
  ];

  await db.insert(achievements).values(sampleAchievements);
  console.log('Sample achievements created.');

  console.log('Seed data created successfully.');
}

seed()
  .catch((error) => {
    console.error('Seed process failed:', error);
    process.exit(1);
  })
  .finally(() => {
    console.log('Seed process finished. Exiting...');
    setTimeout(() => process.exit(0), 1000);
  });