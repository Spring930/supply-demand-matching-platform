'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from '@/components/ui/modal';

// 智能匹配类型
interface MatchingResult {
  id: string;
  title: string;
  description: string;
  type: 'achievement' | 'demand' | 'region' | 'enterprise' | 'manufacturer' | 'university' | 'investor' | 'validation' | 'incubator';
  tags: string[];
  matchScore: number;
  location?: string;
  contact?: string;
}

// 模拟匹配结果数据
const mockMatchingResults: MatchingResult[] = [
  {
    id: '1',
    title: 'AI图像识别算法',
    description: '基于深度学习的高精度图像识别算法，准确率达99.5%',
    type: 'achievement',
    tags: ['AI', '图像识别', '深度学习'],
    matchScore: 95,
    location: '北京',
    contact: 'contact@ai-lab.com'
  },
  {
    id: '2',
    title: '智能制造设备需求',
    description: '寻找智能制造设备供应商，用于汽车零部件生产',
    type: 'demand',
    tags: ['智能制造', '汽车', '设备'],
    matchScore: 92,
    location: '上海',
    contact: 'procurement@auto-company.com'
  },
  {
    id: '3',
    title: '深圳南山区',
    description: '科技创新集聚区，拥有完善的产业链和政策支持',
    type: 'region',
    tags: ['科技园区', '政策支持', '产业链'],
    matchScore: 88,
    location: '深圳',
  },
  {
    id: '4',
    title: '华为技术有限公司',
    description: '全球领先的ICT解决方案提供商，寻求技术合作',
    type: 'enterprise',
    tags: ['ICT', '技术合作', '全球化'],
    matchScore: 90,
    location: '深圳',
    contact: 'partners@huawei.com'
  },
  {
    id: '5',
    title: '富士康科技集团',
    description: '全球最大的电子产品代工制造商',
    type: 'manufacturer',
    tags: ['电子制造', '代工', '规模化'],
    matchScore: 85,
    location: '深圳',
  },
  {
    id: '6',
    title: '清华大学',
    description: '国内顶尖理工科大学，拥有丰富的科研资源',
    type: 'university',
    tags: ['科研', '理工科', '产学研'],
    matchScore: 93,
    location: '北京',
  }
];

const matchingCategories = [
  { key: 'achievement', name: '推荐匹配的成果', icon: '🔬', color: 'bg-blue-100 text-blue-700' },
  { key: 'demand', name: '推荐匹配的需求', icon: '📋', color: 'bg-green-100 text-green-700' },
  { key: 'region', name: '推荐匹配的国内落地区域', icon: '🌍', color: 'bg-purple-100 text-purple-700' },
  { key: 'enterprise', name: '推荐合作的企业', icon: '🏢', color: 'bg-orange-100 text-orange-700' },
  { key: 'manufacturer', name: '生产厂家', icon: '🏭', color: 'bg-red-100 text-red-700' },
  { key: 'university', name: '校方', icon: '🎓', color: 'bg-indigo-100 text-indigo-700' },
  { key: 'investor', name: '投资人', icon: '💰', color: 'bg-yellow-100 text-yellow-700' },
  { key: 'validation', name: '技术概念验证企业', icon: '🧪', color: 'bg-pink-100 text-pink-700' },
  { key: 'incubator', name: '项目孵化器企业', icon: '🚀', color: 'bg-teal-100 text-teal-700' },
];

interface SmartMatchingProps {
  className?: string;
}

export function SmartMatching({ className = '' }: SmartMatchingProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [matchingResults, setMatchingResults] = React.useState<MatchingResult[]>([]);

  const handleStartMatching = () => {
    // 模拟AI匹配过程
    setMatchingResults([]);
    setIsModalOpen(true);
    
    // 模拟加载过程
    setTimeout(() => {
      setMatchingResults(mockMatchingResults);
    }, 1000);
  };

  const filteredResults = selectedCategory === 'all' 
    ? matchingResults 
    : matchingResults.filter(result => result.type === selectedCategory);

  const getCategoryInfo = (type: string) => {
    return matchingCategories.find(cat => cat.key === type) || matchingCategories[0];
  };

  return (
    <>
      <div className={`bg-gradient-to-r from-accent-500 to-secondary-500 py-16 ${className}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">智能匹配</h2>
          <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
            基于AI算法为您精准匹配最合适的合作伙伴、落地区域和资源
          </p>
          <Button 
            size="xl" 
            onClick={handleStartMatching}
            className="bg-white text-accent-600 hover:bg-accent-50 shadow-lg"
          >
            <span className="text-2xl mr-2">🤖</span>
            立即智能匹配
          </Button>
        </div>
      </div>

      {/* 智能匹配结果模态框 */}
      <Modal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        size="xl"
        closeOnOverlayClick={false}
      >
        <ModalHeader>
          <ModalTitle className="text-2xl">智能匹配结果</ModalTitle>
          <ModalDescription>
            基于您的需求和偏好，为您推荐以下匹配结果
          </ModalDescription>
        </ModalHeader>
        
        <ModalContent>
          {/* 分类筛选 */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                全部
              </Button>
              {matchingCategories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className="flex items-center gap-1"
                >
                  <span>{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* 匹配结果 */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {matchingResults.length === 0 ? (
              <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-accent-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">正在为您智能匹配...</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">该分类下暂无匹配结果</p>
              </div>
            ) : (
              filteredResults.map((result) => {
                const categoryInfo = getCategoryInfo(result.type);
                return (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={categoryInfo.color}>
                            {categoryInfo.icon} {categoryInfo.name}
                          </Badge>
                          <Badge variant="outline">
                            匹配度: {result.matchScore}%
                          </Badge>
                        </div>
                        {result.location && (
                          <span className="text-sm text-gray-500">{result.location}</span>
                        )}
                      </div>
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <CardDescription>{result.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {result.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            查看详情
                          </Button>
                          {result.contact && (
                            <Button size="sm" variant="primary">
                              立即联系
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SmartMatching;