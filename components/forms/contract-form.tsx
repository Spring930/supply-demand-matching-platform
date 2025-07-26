'use client';

import { useState } from 'react';
import Link from 'next/link';

// 表单数据类型
export interface ContractFormData {
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
export const initialFormData: ContractFormData = {
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
export const FORM_OPTIONS = {
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

// 表单验证错误类型
export interface FormErrors {
  [key: string]: string;
}

// 表单字段配置
interface FormFieldConfig {
  id: keyof ContractFormData;
  label: string;
  type: 'text' | 'email' | 'date' | 'select' | 'textarea';
  required: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  gridCols?: 1 | 2;
}

// 表单字段配置
const FORM_FIELDS: FormFieldConfig[] = [
  // 基本信息
  { id: 'name', label: '姓名', type: 'text', required: true, placeholder: '请输入您的真实姓名' },
  { id: 'gender', label: '性别', type: 'select', required: true, options: FORM_OPTIONS.gender },
  { id: 'birthDate', label: '出生年月', type: 'date', required: true },
  { id: 'ethnicity', label: '民族', type: 'select', required: true, options: FORM_OPTIONS.ethnicity },
  { id: 'education', label: '学历学位', type: 'select', required: true, options: FORM_OPTIONS.education },
  { id: 'major', label: '专业', type: 'text', required: true, placeholder: '请输入您的专业' },
  
  // 联系信息
  { id: 'techField', label: '技术领域', type: 'select', required: true, options: FORM_OPTIONS.techField },
  { id: 'phone', label: '手机号码', type: 'text', required: true, placeholder: '请输入11位手机号码' },
  { id: 'email', label: '电子邮箱', type: 'email', required: true, placeholder: '请输入有效邮箱地址' },
  { id: 'graduateSchool', label: '毕业院校', type: 'text', required: true, placeholder: '请输入毕业院校' },
  { id: 'currentUnit', label: '现单位名称', type: 'text', required: true, placeholder: '请输入现工作单位' },
  { id: 'region', label: '地区', type: 'select', required: true, options: FORM_OPTIONS.region },
  
  // 详细信息
  { id: 'educationHistory', label: '教育经历', type: 'textarea', required: true, placeholder: '请详细描述您的教育背景', gridCols: 2 },
  { id: 'workHistory', label: '工作经历', type: 'textarea', required: true, placeholder: '请详细描述您的工作经历', gridCols: 2 },
  { id: 'expertise', label: '擅长领域', type: 'textarea', required: true, placeholder: '请详细描述您的专业技能和擅长领域', gridCols: 2 }
];

interface ContractFormProps {
  title: string;
  subtitle: string;
  backUrl: string;
  backText: string;
  onSubmit: (formData: ContractFormData) => Promise<void>;
  isSubmitting?: boolean;
}

export default function ContractForm({ 
  title, 
  subtitle, 
  backUrl, 
  backText, 
  onSubmit, 
  isSubmitting = false 
}: ContractFormProps) {
  const [formData, setFormData] = useState<ContractFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  // 处理表单字段变化
  const handleInputChange = (field: keyof ContractFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // 清除该字段的错误
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // 表单验证
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    FORM_FIELDS.forEach(field => {
      if (field.required && !formData[field.id].trim()) {
        newErrors[field.id] = `请填写${field.label}`;
      }
    });

    // 特殊验证规则
    if (formData.phone && !/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };

  // 渲染表单字段
  const renderField = (field: FormFieldConfig) => {
    const fieldError = errors[field.id];
    const value = formData[field.id];

    const baseInputClasses = `
      w-full px-4 py-3 border rounded-custom text-gray-900 
      transition-all duration-200 bg-white
      focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent
      ${fieldError ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400'}
    `;

    const fieldContent = (
      <>
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        {field.type === 'select' ? (
          <select
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={baseInputClasses}
            required={field.required}
          >
            <option value="">请选择{field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : field.type === 'textarea' ? (
          <textarea
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} min-h-[120px] resize-vertical`}
            required={field.required}
            rows={4}
          />
        ) : (
          <input
            type={field.type}
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={baseInputClasses}
            required={field.required}
          />
        )}

        {fieldError && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {fieldError}
          </p>
        )}
      </>
    );

    return (
      <div 
        key={field.id} 
        className={field.gridCols === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}
      >
        {fieldContent}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面头部 */}
        <div className="mb-8">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link 
              href={backUrl} 
              className="inline-flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backText}
            </Link>
          </div>
          
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="h-px bg-accent-500 w-16 mr-4"></div>
              <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
              <div className="h-px bg-accent-500 w-16 ml-4"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-title mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 签约表单 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-custom shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 基本信息部分 */}
              <div>
                <h2 className="text-xl font-semibold text-title mb-6 pb-2 border-b border-gray-200">
                  基本信息
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FORM_FIELDS.slice(0, 6).map(renderField)}
                </div>
              </div>

              {/* 联系信息部分 */}
              <div>
                <h2 className="text-xl font-semibold text-title mb-6 pb-2 border-b border-gray-200">
                  联系信息
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FORM_FIELDS.slice(6, 12).map(renderField)}
                </div>
              </div>

              {/* 详细信息部分 */}
              <div>
                <h2 className="text-xl font-semibold text-title mb-6 pb-2 border-b border-gray-200">
                  详细信息
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FORM_FIELDS.slice(12).map(renderField)}
                </div>
              </div>

              {/* 提交按钮 */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full bg-accent-500 hover:bg-accent-600 disabled:bg-gray-300
                    text-white font-medium py-4 px-6 
                    rounded-custom border border-accent-500 hover:border-accent-600 disabled:border-gray-300
                    transition-all duration-300 
                    hover:scale-105 active:scale-95 disabled:scale-100
                    disabled:cursor-not-allowed
                    flex items-center justify-center
                  "
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      正在提交...
                    </>
                  ) : (
                    '提交签约申请'
                  )}
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  提交后我们将在3个工作日内审核您的申请，请保持联系方式畅通
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* 温馨提示 */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-accent-50 border border-accent-200 rounded-custom p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-accent-800 mb-2">温馨提示</h3>
                <div className="text-sm text-accent-700 space-y-1">
                  <p>• 请确保填写的信息真实有效，虚假信息将影响审核结果</p>
                  <p>• 提交申请后，请保持联系方式畅通，我们将及时与您联系</p>
                  <p>• 如有疑问，请联系客服：400-123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}