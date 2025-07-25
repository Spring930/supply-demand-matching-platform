// 发布需求页面

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DEMAND_TYPES, REGIONS, INDUSTRIES } from '@/lib/constants';

export default function PublishDemandPage() {
  const router = useRouter();
  
  // 本地存储键名
  const STORAGE_KEY = 'demand_publish_draft';
  
  // 表单状态
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    fullDescription: '',
    type: 'technology',
    industry: '',
    region: '',
    organization: '',
    contact: '',
    contactPerson: '',
    budget: '',
    deadline: '',
    requirements: [''],
    tags: [''],
    urgency: 'general',
  });

  // 从本地存储加载数据
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('加载保存的数据失败:', error);
      }
    }
  }, []);

  // 保存到本地存储
  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    alert('数据已保存到本地');
  };

  // 清空本地存储
  const clearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  // 处理基础字段变化
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 处理数组字段变化
  const handleArrayChange = (field: 'requirements' | 'tags', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  // 添加数组项
  const addArrayItem = (field: 'requirements' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  // 删除数组项
  const removeArrayItem = (field: 'requirements' | 'tags', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  // 提交表单
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加提交逻辑
    console.log('提交需求数据:', formData);
    // 提交成功后清空本地存储并跳转
    clearLocalStorage();
    router.push('/demands');
  };

  // 处理页面退出
  const handleExit = () => {
    // 退出时清空本地存储
    clearLocalStorage();
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 绿色头部区域 */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">发布需求</h1>
          <p className="text-lg">详细描述您的需求，让更多人为您提供解决方案</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* 返回按钮 */}
        <div className="mb-8">
          <button 
            onClick={handleExit}
            className="flex items-center text-accent-600 hover:text-accent-800 transition-colors"
          >
            <span className="mr-2">←</span>
            返回需求列表
          </button>
        </div>

        {/* 发布表单 */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 基本信息 */}
            <div className="bg-white rounded-custom shadow-md p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                  <h2 className="text-2xl font-bold text-title">基本信息</h2>
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 需求标题 */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    需求标题 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="请输入需求标题"
                  />
                </div>

                {/* 需求类型 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    需求类型 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    {DEMAND_TYPES.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* 所属行业 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    所属行业 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">请选择行业</option>
                    {INDUSTRIES.map(industry => (
                      <option key={industry.value} value={industry.value}>
                        {industry.icon} {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 所在地区 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    所在地区 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">请选择地区</option>
                    {REGIONS.map(region => (
                      <option key={region.value} value={region.value}>{region.label}</option>
                    ))}
                  </select>
                </div>

                {/* 需求单位/个人 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    需求单位/个人 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="请输入单位/个人名称"
                  />
                </div>

                {/* 需求概述 */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    需求概述 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-vertical"
                    placeholder="请简要描述您的需求（100-300字）"
                  />
                </div>
              </div>
            </div>

            {/* 详细信息 */}
            <div className="bg-white rounded-custom shadow-md p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                  <h2 className="text-2xl font-bold text-title">详细信息</h2>
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
                </div>
              </div>

              <div className="space-y-6">
                {/* 需求详情 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    需求详情 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={formData.fullDescription}
                    onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-vertical"
                    placeholder="请详细描述您的技术需求，包括技术背景、具体要求、应用场景等"
                  />
                </div>

                {/* 技术要求 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    技术要求
                  </label>
                  <div className="space-y-3">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={req}
                          onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                          placeholder={`技术要求 ${index + 1}`}
                        />
                        {formData.requirements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('requirements', index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                          >
                            删除
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('requirements')}
                      className="text-accent-600 hover:text-accent-800 transition-colors text-sm"
                    >
                      + 添加技术要求
                    </button>
                  </div>
                </div>

                {/* 关键词标签 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    关键词标签
                  </label>
                  <div className="space-y-3">
                    {formData.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) => handleArrayChange('tags', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                          placeholder={`标签 ${index + 1}`}
                        />
                        {formData.tags.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('tags', index)}
                            className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                          >
                            删除
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addArrayItem('tags')}
                      className="text-accent-600 hover:text-accent-800 transition-colors text-sm"
                    >
                      + 添加标签
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 商务信息 */}
            <div className="bg-white rounded-custom shadow-md p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                  <h2 className="text-2xl font-bold text-title">商务信息</h2>
                  <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 预算范围 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    预算范围（万元）
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="请输入预算"
                  />
                </div>

                {/* 截止时间 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    截止时间
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                {/* 紧急程度 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    紧急程度
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="low">一般</option>
                    <option value="medium">中等</option>
                    <option value="high">紧急</option>
                  </select>
                </div>

                {/* 联系人 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系人 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="请输入联系人姓名/暂不公开"
                  />
                </div>

                {/* 联系方式 */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系方式 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="请输入联系方式（手机号/邮箱/微信等）/暂不公开"
                  />
                </div>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={saveToLocalStorage}
                className="px-8 py-3 bg-gray-300 text-gray-700 rounded-custom hover:bg-gray-400 transition-colors"
              >
                保存
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-accent-500 text-white rounded-custom hover:bg-accent-600 transition-colors font-medium"
              >
                发布需求
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}