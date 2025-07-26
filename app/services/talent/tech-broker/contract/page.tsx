// 技术经纪人签约表单页面

'use client';

import Link from 'next/link';
import { useState } from 'react';

// 表单数据类型
interface ContractFormData {
  name: string;
  gender: string;
  birthDate: string;
  ethnicity: string;
  education: string;
  major: string;
  techField: string;
  phone: string;
  email: string;
  graduateSchool: string;
  currentUnit: string;
  region: string;
  educationHistory: string;
  workHistory: string;
  expertise: string;
}

// 初始表单数据
const initialFormData: ContractFormData = {
  name: '',
  gender: '',
  birthDate: '',
  ethnicity: '',
  education: '',
  major: '',
  techField: '',
  phone: '',
  email: '',
  graduateSchool: '',
  currentUnit: '',
  region: '',
  educationHistory: '',
  workHistory: '',
  expertise: ''
};

// 选项数据
const OPTIONS = {
  gender: [
    { value: 'male', label: '男' },
    { value: 'female', label: '女' }
  ],
  ethnicity: [
    { value: 'han', label: '汉族' },
    { value: 'mongolian', label: '蒙古族' },
    { value: 'hui', label: '回族' },
    { value: 'tibetan', label: '藏族' },
    { value: 'uygur', label: '维吾尔族' },
    { value: 'miao', label: '苗族' },
    { value: 'yi', label: '彝族' },
    { value: 'zhuang', label: '壮族' },
    { value: 'other', label: '其他' }
  ],
  education: [
    { value: 'bachelor', label: '本科' },
    { value: 'master', label: '硕士' },
    { value: 'doctor', label: '博士' },
    { value: 'postdoc', label: '博士后' }
  ],
  techField: [
    { value: 'ai', label: '人工智能' },
    { value: 'biotech', label: '生物技术' },
    { value: 'newenergy', label: '新能源' },
    { value: 'newmaterials', label: '新材料' },
    { value: 'medical', label: '医疗健康' },
    { value: 'aerospace', label: '航空航天' },
    { value: 'electronics', label: '电子信息' },
    { value: 'manufacturing', label: '智能制造' },
    { value: 'environment', label: '环保节能' },
    { value: 'agriculture', label: '现代农业' }
  ],
  region: [
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'guangdong', label: '广东' },
    { value: 'jiangsu', label: '江苏' },
    { value: 'zhejiang', label: '浙江' },
    { value: 'sichuan', label: '四川' },
    { value: 'hubei', label: '湖北' },
    { value: 'hunan', label: '湖南' },
    { value: 'other', label: '其他' }
  ]
};

export default function ContractPage() {
  const [formData, setFormData] = useState<ContractFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 处理表单字段变化
  const handleInputChange = (field: keyof ContractFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 这里可以添加表单验证逻辑
    
    try {
      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('签约申请已提交，我们将尽快处理您的申请！');
      
      // 提交成功后可以跳转到其他页面
      // router.push('/services/talent/tech-broker/success');
      
    } catch (error) {
      alert('提交失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面头部 */}
        <div className="mb-8">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link 
              href="/services/talent/tech-broker" 
              className="inline-flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回技术经纪人专区
            </Link>
          </div>
          
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="h-px bg-accent-500 w-16 mr-4"></div>
              <div className="w-8 h-8 bg-accent-500 rounded transform rotate-45 mr-2"></div>
              <h1 className="text-3xl font-bold text-title mx-4">技术经纪人签约</h1>
              <div className="w-8 h-8 bg-accent-500 rounded transform rotate-45 ml-2"></div>
              <div className="h-px bg-accent-500 w-16 ml-4"></div>
            </div>
            <p className="text-gray-600">请填写以下信息完成签约申请</p>
          </div>
        </div>

        {/* 表单容器 */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-custom shadow-lg p-8">
            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* 姓名 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 姓名
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入姓名"
                />
              </div>

              {/* 性别 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 性别
                </label>
                <select
                  required
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  {OPTIONS.gender.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 出生年月 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 出生年月
                </label>
                <input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              {/* 民族 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 民族
                </label>
                <select
                  required
                  value={formData.ethnicity}
                  onChange={(e) => handleInputChange('ethnicity', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  {OPTIONS.ethnicity.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 学历学位 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 学历学位
                </label>
                <select
                  required
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  {OPTIONS.education.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 专业 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 专业
                </label>
                <input
                  type="text"
                  required
                  value={formData.major}
                  onChange={(e) => handleInputChange('major', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入专业"
                />
              </div>

              {/* 技术领域 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 技术领域
                </label>
                <select
                  required
                  value={formData.techField}
                  onChange={(e) => handleInputChange('techField', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  {OPTIONS.techField.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 手机号码 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 手机号码
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入手机号码"
                />
              </div>

              {/* 电子邮箱 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 电子邮箱
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入电子邮箱"
                />
              </div>

              {/* 毕业院校 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 毕业院校
                </label>
                <input
                  type="text"
                  required
                  value={formData.graduateSchool}
                  onChange={(e) => handleInputChange('graduateSchool', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入毕业院校"
                />
              </div>

              {/* 现单位名称 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 现单位名称
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentUnit}
                  onChange={(e) => handleInputChange('currentUnit', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入现单位名称"
                />
              </div>

              {/* 地区 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 地区
                </label>
                <select
                  required
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  {OPTIONS.region.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 详细信息 */}
            <div className="space-y-6 mb-8">
              {/* 教育经历 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  教育经历
                </label>
                <textarea
                  value={formData.educationHistory}
                  onChange={(e) => handleInputChange('educationHistory', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder="大学及以上教育，自体分时月"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.educationHistory.length}/1000
                </div>
              </div>

              {/* 工作经历 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 工作经历
                </label>
                <textarea
                  required
                  value={formData.workHistory}
                  onChange={(e) => handleInputChange('workHistory', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder="具体分时月，何单位，何工作，以及取得的主要工作成绩"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.workHistory.length}/1000
                </div>
              </div>

              {/* 擅长领域 */}
              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  <span className="text-red-500">*</span> 擅长领域
                </label>
                <textarea
                  required
                  value={formData.expertise}
                  onChange={(e) => handleInputChange('expertise', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-primary-200 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder="从事专业技术人员应明确的技术领域，服务对象及典型案例"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.expertise.length}/1000
                </div>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-12 py-3 rounded-custom font-medium text-white
                  transition-all duration-300 transform
                  ${isSubmitting 
                    ? 'bg-primary-300 cursor-not-allowed' 
                    : 'bg-accent-500 hover:bg-accent-600 hover:scale-105 active:scale-95'
                  }
                `}
              >
                {isSubmitting ? '提交中...' : '提交'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}