'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SmartMatching } from '@/components/common/smart-matching';

// 表单数据类型定义
interface ValidationFormData {
  // 项目基本信息
  projectName: string;
  projectType: string;
  industry: string;
  projectStage: string;
  
  // 技术描述
  coreTechnology: string;
  innovationPoints: string;
  technologyReadiness: string;
  patentStatus: string;
  technicalDetails: string;
  
  // 市场分析
  targetMarket: string;
  marketSize: string;
  competitiveAdvantages: string;
  businessModel: string;
  marketAnalysis: string;
  
  // 验证需求
  validationObjectives: string;
  validationScope: string;
  expectedResults: string;
  timeline: string;
  budget: string;
  
  // 联系信息
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  organization: string;
}

// 选择选项数据
const PROJECT_TYPES = [
  { value: 'software', label: '软件技术' },
  { value: 'hardware', label: '硬件产品' },
  { value: 'ai_algorithm', label: 'AI算法' },
  { value: 'biotech', label: '生物技术' },
  { value: 'materials', label: '新材料' },
  { value: 'energy', label: '新能源' },
  { value: 'medical', label: '医疗器械' },
  { value: 'manufacturing', label: '智能制造' },
  { value: 'other', label: '其他' },
];

const INDUSTRIES = [
  { value: 'information', label: '信息技术' },
  { value: 'manufacturing', label: '先进制造' },
  { value: 'biotech', label: '生物医药' },
  { value: 'newmaterials', label: '新材料' },
  { value: 'newenergy', label: '新能源' },
  { value: 'automotive', label: '汽车' },
  { value: 'aerospace', label: '航空航天' },
  { value: 'electronics', label: '电子信息' },
  { value: 'environmental', label: '节能环保' },
  { value: 'other', label: '其他' },
];

const PROJECT_STAGES = [
  { value: 'concept', label: '概念阶段' },
  { value: 'research', label: '研发阶段' },
  { value: 'prototype', label: '原型阶段' },
  { value: 'pilot', label: '中试阶段' },
  { value: 'preproduction', label: '产业化前期' },
  { value: 'production', label: '批量生产' },
];

const TECHNOLOGY_READINESS_LEVELS = [
  { value: 'trl1', label: 'TRL 1 - 基础原理观察' },
  { value: 'trl2', label: 'TRL 2 - 技术概念形成' },
  { value: 'trl3', label: 'TRL 3 - 实验性概念验证' },
  { value: 'trl4', label: 'TRL 4 - 实验室验证' },
  { value: 'trl5', label: 'TRL 5 - 相关环境验证' },
  { value: 'trl6', label: 'TRL 6 - 相关环境演示' },
  { value: 'trl7', label: 'TRL 7 - 运行环境演示' },
  { value: 'trl8', label: 'TRL 8 - 系统完成和合格' },
  { value: 'trl9', label: 'TRL 9 - 实际系统验证' },
];

const PATENT_STATUSES = [
  { value: 'none', label: '无专利' },
  { value: 'applying', label: '专利申请中' },
  { value: 'granted', label: '已获得专利' },
  { value: 'multiple', label: '多项专利' },
];

const MARKET_SIZES = [
  { value: 'small', label: '小于1亿元' },
  { value: 'medium', label: '1-10亿元' },
  { value: 'large', label: '10-100亿元' },
  { value: 'huge', label: '大于100亿元' },
];

const VALIDATION_SCOPES = [
  { value: 'technical', label: '技术可行性验证' },
  { value: 'market', label: '市场可行性验证' },
  { value: 'commercial', label: '商业可行性验证' },
  { value: 'comprehensive', label: '综合验证' },
];

const TIMELINES = [
  { value: '1month', label: '1个月内' },
  { value: '3months', label: '3个月内' },
  { value: '6months', label: '6个月内' },
  { value: '1year', label: '1年内' },
  { value: 'flexible', label: '时间灵活' },
];

const BUDGETS = [
  { value: 'under10', label: '10万元以下' },
  { value: '10to50', label: '10-50万元' },
  { value: '50to100', label: '50-100万元' },
  { value: 'over100', label: '100万元以上' },
  { value: 'negotiable', label: '面议' },
];

export default function ValidationPageClient() {
  const [formData, setFormData] = useState<ValidationFormData>({
    projectName: '',
    projectType: '',
    industry: '',
    projectStage: '',
    coreTechnology: '',
    innovationPoints: '',
    technologyReadiness: '',
    patentStatus: '',
    technicalDetails: '',
    targetMarket: '',
    marketSize: '',
    competitiveAdvantages: '',
    businessModel: '',
    marketAnalysis: '',
    validationObjectives: '',
    validationScope: '',
    expectedResults: '',
    timeline: '',
    budget: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    organization: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field: keyof ValidationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 这里模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('申请提交成功！我们将在3个工作日内与您联系。');
      
      // 重置表单
      setFormData({
        projectName: '',
        projectType: '',
        industry: '',
        projectStage: '',
        coreTechnology: '',
        innovationPoints: '',
        technologyReadiness: '',
        patentStatus: '',
        technicalDetails: '',
        targetMarket: '',
        marketSize: '',
        competitiveAdvantages: '',
        businessModel: '',
        marketAnalysis: '',
        validationObjectives: '',
        validationScope: '',
        expectedResults: '',
        timeline: '',
        budget: '',
        contactPerson: '',
        contactEmail: '',
        contactPhone: '',
        organization: '',
      });
    } catch (error) {
      alert('提交失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= step 
                ? 'bg-accent-500 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step}
          </div>
          {step < 4 && (
            <div 
              className={`w-16 h-1 mx-2 ${
                currentStep > step ? 'bg-accent-500' : 'bg-gray-200'
              }`} 
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-50">
      {/* 页面头部 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-title mb-4">概念验证申请</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              通过AI智能匹配验证您的技术方案在市场上的可行性，
              我们将为您提供专业的概念验证服务，助力技术成果转化和产业化应用
            </p>
          </div>
        </div>
      </div>

      {/* 验证服务介绍 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧪</span>
              </div>
              <h3 className="text-lg font-semibold text-title mb-2">技术验证</h3>
              <p className="text-gray-600 text-sm">
                专业团队评估技术可行性，识别技术风险和改进方向
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-title mb-2">市场验证</h3>
              <p className="text-gray-600 text-sm">
                分析市场需求和竞争环境，评估商业化潜力
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-custom flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-title mb-2">AI匹配</h3>
              <p className="text-gray-600 text-sm">
                智能匹配最适合的验证合作伙伴和资源
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 申请表单 */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-title">
              概念验证申请表单
            </CardTitle>
            {renderStepIndicator()}
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 第一步：项目基本信息 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-title mb-4 flex items-center">
                    <span className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3 text-accent-600">1</span>
                    项目基本信息
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="项目名称"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange('projectName', e.target.value)}
                      placeholder="请输入项目名称"
                      required
                    />
                    
                    <Select
                      label="项目类型"
                      value={formData.projectType}
                      onValueChange={(value) => handleInputChange('projectType', value)}
                      options={PROJECT_TYPES}
                      placeholder="选择项目类型"
                      required
                    />
                    
                    <Select
                      label="所属行业"
                      value={formData.industry}
                      onValueChange={(value) => handleInputChange('industry', value)}
                      options={INDUSTRIES}
                      placeholder="选择所属行业"
                      required
                    />
                    
                    <Select
                      label="项目阶段"
                      value={formData.projectStage}
                      onValueChange={(value) => handleInputChange('projectStage', value)}
                      options={PROJECT_STAGES}
                      placeholder="选择项目阶段"
                      required
                    />
                  </div>
                </div>
              )}

              {/* 第二步：技术描述 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-title mb-4 flex items-center">
                    <span className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3 text-accent-600">2</span>
                    技术描述
                  </h3>
                  
                  <Textarea
                    label="核心技术"
                    value={formData.coreTechnology}
                    onChange={(e) => handleInputChange('coreTechnology', e.target.value)}
                    placeholder="详细描述您的核心技术，包括技术原理、实现方式等"
                    rows={4}
                    maxLength={1000}
                    showCount
                    required
                  />
                  
                  <Textarea
                    label="技术创新点"
                    value={formData.innovationPoints}
                    onChange={(e) => handleInputChange('innovationPoints', e.target.value)}
                    placeholder="说明技术的创新之处、与现有技术的区别和优势"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="技术成熟度等级(TRL)"
                      value={formData.technologyReadiness}
                      onValueChange={(value) => handleInputChange('technologyReadiness', value)}
                      options={TECHNOLOGY_READINESS_LEVELS}
                      placeholder="选择技术成熟度等级"
                      helperText="技术成熟度等级用于评估技术发展阶段"
                      required
                    />
                    
                    <Select
                      label="专利情况"
                      value={formData.patentStatus}
                      onValueChange={(value) => handleInputChange('patentStatus', value)}
                      options={PATENT_STATUSES}
                      placeholder="选择专利状况"
                      required
                    />
                  </div>
                  
                  <Textarea
                    label="技术详细说明"
                    value={formData.technicalDetails}
                    onChange={(e) => handleInputChange('technicalDetails', e.target.value)}
                    placeholder="技术规格、性能指标、应用场景等详细信息"
                    rows={4}
                    maxLength={1500}
                    showCount
                  />
                </div>
              )}

              {/* 第三步：市场分析 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-title mb-4 flex items-center">
                    <span className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3 text-accent-600">3</span>
                    市场分析
                  </h3>
                  
                  <Textarea
                    label="目标市场"
                    value={formData.targetMarket}
                    onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                    placeholder="描述目标客户群体、应用领域、地域范围等"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="预期市场规模"
                      value={formData.marketSize}
                      onValueChange={(value) => handleInputChange('marketSize', value)}
                      options={MARKET_SIZES}
                      placeholder="选择市场规模"
                      required
                    />
                  </div>
                  
                  <Textarea
                    label="竞争优势"
                    value={formData.competitiveAdvantages}
                    onChange={(e) => handleInputChange('competitiveAdvantages', e.target.value)}
                    placeholder="相比竞争对手的优势，如技术领先、成本优势、服务优势等"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  <Textarea
                    label="商业模式"
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    placeholder="盈利模式、价值链、合作伙伴关系等"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  <Textarea
                    label="市场分析补充"
                    value={formData.marketAnalysis}
                    onChange={(e) => handleInputChange('marketAnalysis', e.target.value)}
                    placeholder="市场趋势、政策环境、风险分析等补充信息"
                    rows={4}
                    maxLength={1000}
                    showCount
                  />
                </div>
              )}

              {/* 第四步：验证需求和联系信息 */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-title mb-4 flex items-center">
                    <span className="w-8 h-8 bg-accent-100 rounded-custom flex items-center justify-center mr-3 text-accent-600">4</span>
                    验证需求和联系信息
                  </h3>
                  
                  <Textarea
                    label="验证目标"
                    value={formData.validationObjectives}
                    onChange={(e) => handleInputChange('validationObjectives', e.target.value)}
                    placeholder="希望通过验证达到什么目标，解决什么问题"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="验证范围"
                      value={formData.validationScope}
                      onValueChange={(value) => handleInputChange('validationScope', value)}
                      options={VALIDATION_SCOPES}
                      placeholder="选择验证范围"
                      required
                    />
                    
                    <Select
                      label="期望完成时间"
                      value={formData.timeline}
                      onValueChange={(value) => handleInputChange('timeline', value)}
                      options={TIMELINES}
                      placeholder="选择时间要求"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="预算范围"
                      value={formData.budget}
                      onValueChange={(value) => handleInputChange('budget', value)}
                      options={BUDGETS}
                      placeholder="选择预算范围"
                      required
                    />
                  </div>
                  
                  <Textarea
                    label="预期验证结果"
                    value={formData.expectedResults}
                    onChange={(e) => handleInputChange('expectedResults', e.target.value)}
                    placeholder="希望获得什么样的验证结果或报告"
                    rows={3}
                    maxLength={800}
                    showCount
                    required
                  />
                  
                  {/* 联系信息 */}
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-medium text-title mb-4">联系信息</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="联系人姓名"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                        placeholder="请输入联系人姓名"
                        required
                      />
                      
                      <Input
                        label="所属机构"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="请输入所属机构名称"
                        required
                      />
                      
                      <Input
                        label="联系邮箱"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        placeholder="请输入联系邮箱"
                        required
                      />
                      
                      <Input
                        label="联系电话"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        placeholder="请输入联系电话"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 表单导航按钮 */}
              <div className="flex justify-between items-center pt-8 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-8"
                >
                  上一步
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    className="px-8"
                  >
                    下一步
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8"
                  >
                    {isSubmitting ? '提交中...' : '提交申请'}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* AI智能匹配区域 */}
      <div className="bg-gradient-to-r from-accent-500 to-secondary-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">AI智能匹配验证资源</h2>
          <p className="text-accent-100 text-lg mb-8 max-w-3xl mx-auto">
            基于您提交的项目信息，我们的AI算法将为您匹配最适合的验证机构、专家团队和合作伙伴
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-custom p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-white font-semibold mb-2">专业验证机构</h3>
              <p className="text-accent-100 text-sm">匹配权威的第三方验证机构</p>
            </div>
            <div className="bg-white/10 rounded-custom p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">👨‍🔬</div>
              <h3 className="text-white font-semibold mb-2">行业专家团队</h3>
              <p className="text-accent-100 text-sm">对接相关领域的资深专家</p>
            </div>
            <div className="bg-white/10 rounded-custom p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-white font-semibold mb-2">产业合作伙伴</h3>
              <p className="text-accent-100 text-sm">链接潜在的产业化合作伙伴</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}