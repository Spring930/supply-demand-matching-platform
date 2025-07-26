import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_DEMANDS, REGIONS } from '@/lib/constants';

// 从MOCK_DEMANDS中选择热门需求来展示
const featuredDemands = MOCK_DEMANDS.filter(demand => 
  demand.status === 'featured' || demand.status === 'hot'
).slice(0, 3);

// 获取地区信息的辅助函数
const getRegionLabel = (regionCode: string) => {
  const region = REGIONS.find(r => r.value === regionCode);
  return region ? region.label : regionCode;
};

// 格式化预算显示
const formatBudget = (budget: number | string) => {
  if (typeof budget === 'number') {
    return `${budget}万元`;
  }
  return budget;
};

const featuredAchievements = [
  {
    id: 1,
    title: '高精度3D打印技术',
    description: '自主研发的高精度3D打印技术，可实现微米级精度，适用于医疗器械制造...',
    type: '技术成果',
    institution: '清华大学',
    level: '国际先进',
    tags: ['3D打印', '精密制造', '医疗'],
  },
  {
    id: 2,
    title: '智能农业监测系统',
    description: '基于物联网的智能农业监测系统，实时监测土壤、气候等环境参数...',
    type: '产品成果',
    institution: '中科院',
    level: '国内领先',
    tags: ['物联网', '农业', '监测'],
  },
  {
    id: 3,
    title: '新型抗癌药物分子设计',
    description: '通过AI辅助药物设计，成功开发出新型抗癌药物分子，已获得专利保护...',
    type: '专利成果',
    institution: '北京大学',
    level: '国际先进',
    tags: ['生物医药', 'AI', '药物设计'],
  },
];

const platformStats = [
  { label: '累计需求', value: '12,456', icon: '📋' },
  { label: '科技成果', value: '8,932', icon: '🔬' },
  { label: '成功匹配', value: '3,421', icon: '🤝' },
  { label: '注册用户', value: '45,678', icon: '👥' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-title mb-6 animate-fade-in">
              找风口 用驭风
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
              驭风 您的供需高效对接与落地平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
                发布需求
              </Button>
              <Button size="lg" variant="outline">
                展示成果
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-title mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Demands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-title mb-4">热门需求</h2>
            <p className="text-gray-600 text-lg">精选优质技术需求，寻找最佳解决方案</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredDemands.map((demand) => (
              <Card key={demand.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="primary">技术需求</Badge>
                    <span className="text-sm text-gray-500">{getRegionLabel(demand.region)}</span>
                  </div>
                  <CardTitle className="text-lg">{demand.title}</CardTitle>
                  <CardDescription className="text-truncate-2">
                    {demand.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">预算：</span>
                      <span className="font-medium text-accent-600">{formatBudget(demand.budget || '面议')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">截止：</span>
                      <span className="font-medium">{demand.deadline}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {demand.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/demands/${demand.id}`} className="block">
                      <Button className="w-full mt-4" variant="outline">
                        查看详情
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/demands">
              <Button variant="primary" size="lg">
                查看更多需求 →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-title mb-4">精选成果</h2>
            <p className="text-gray-600 text-lg">展示前沿科技成果，寻找产业化机会</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{achievement.type}</Badge>
                    <span className="text-sm text-secondary-600 font-medium">{achievement.level}</span>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription className="text-truncate-2">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">机构：</span>
                      <span className="font-medium">{achievement.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {achievement.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      查看详情
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/achievements">
              <Button variant="primary" size="lg">
                查看更多成果 →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gradient-to-r from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-title mb-4">专业服务</h2>
            <p className="text-gray-600 text-lg">全方位服务支持，助力创新成果转化落地</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: '人才专区', icon: '👥', desc: '专业人才匹配' },
              { name: '概念验证', icon: '🧪', desc: '技术概念验证' },
              { name: '校企合作', icon: '🎓', desc: '产学研合作' },
              { name: '金融融资', icon: '💰', desc: '投融资对接' },
              { name: '项目孵化', icon: '🚀', desc: '创新项目孵化' },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-title mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="primary" size="lg">
                探索全部服务 →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-title text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">开启您的创新之旅</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            加入我们的平台，无论您是需求方还是成果方，都能找到最合适的合作伙伴。
            让科技创新真正转化为生产力。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
              立即注册
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-title">
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}