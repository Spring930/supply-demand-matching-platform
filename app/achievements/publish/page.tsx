// 发布成果页面

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { INDUSTRIES, REGIONS, SUBJECT_TYPES, ACHIEVEMENT_TYPES } from '@/lib/constants';

export default function PublishAchievementPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // 成果信息
    title: '',
    researchUnit: '',
    contactPerson: '',
    contactMethod: '',
    achievementDescription: '',
    
    // 项目信息
    projectStartDate: '',
    projectEndDate: '',
    projectTeamIntroduction: '',
    projectFundingSource: '',
    
    // 专利情况
    hasPatentApplication: 'no',
    patentDetails: '',
    
    // 其他信息
    industry: '',
    region: '',
    subject: '',
    type: '',
    maturityLevel: '',
    cooperationMode: '',
    tags: [] as string[],
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagAdd = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 数据验证
      if (!formData.title.trim() || !formData.researchUnit.trim() || !formData.contactPerson.trim()) {
        throw new Error('请填写必要信息：标题、研发单位、联系人');
      }
      
      const submitData = {
        title: formData.title.trim(),
        summary: formData.achievementDescription.substring(0, 100) + (
          formData.achievementDescription.length > 100 ? '...' : ''
        ),
        fullDescription: `${formData.achievementDescription}\n\n项目信息：\n项目开始日期：${formData.projectStartDate}\n项目结束日期：${formData.projectEndDate}\n团队介绍：${formData.projectTeamIntroduction}\n资金来源：${formData.projectFundingSource}\n\n专利情况：\n是否申请专利：${formData.hasPatentApplication === 'yes' ? '是' : '否'}\n专利详情：${formData.patentDetails}`.trim(),
        type: formData.type || 'technology',
        industry: formData.industry || 'ai',
        region: formData.region || 'beijing',
        subject: formData.subject || 'university',
        organization: formData.researchUnit.trim(),
        contact: formData.contactMethod.trim() || formData.contactPerson.trim(),
        contactPerson: formData.contactPerson.trim(),
        maturityLevel: formData.maturityLevel.trim(),
        applicationField: formData.achievementDescription.trim(),
        technicalAdvantage: formData.achievementDescription.trim(),
        cooperationMode: formData.cooperationMode.trim() || '技术转让、合作开发',
        tags: formData.tags,
        status: 'draft'
      };
      
      const response = await fetch('/api/achievements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存失败');
      }
      
      alert('草稿已保存');
    } catch (err) {
      console.error('Error saving draft:', err);
      setError(err instanceof Error ? err.message : '保存失败');
      alert('保存失败：' + (err instanceof Error ? err.message : '未知错误'));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 数据验证
      if (!formData.title.trim() || !formData.researchUnit.trim() || !formData.contactPerson.trim()) {
        throw new Error('请填写必要信息：标题、研发单位、联系人');
      }
      
      if (!formData.achievementDescription.trim()) {
        throw new Error('请填写成果描述');
      }
      
      const submitData = {
        title: formData.title.trim(),
        summary: formData.achievementDescription.substring(0, 100) + (
          formData.achievementDescription.length > 100 ? '...' : ''
        ),
        fullDescription: `${formData.achievementDescription}\n\n项目信息：\n项目开始日期：${formData.projectStartDate}\n项目结束日期：${formData.projectEndDate}\n团队介绍：${formData.projectTeamIntroduction}\n资金来源：${formData.projectFundingSource}\n\n专利情况：\n是否申请专利：${formData.hasPatentApplication === 'yes' ? '是' : '否'}\n专利详情：${formData.patentDetails}`.trim(),
        type: formData.type || 'technology',
        industry: formData.industry || 'ai',
        region: formData.region || 'beijing',
        subject: formData.subject || 'university',
        organization: formData.researchUnit.trim(),
        contact: formData.contactMethod.trim() || formData.contactPerson.trim(),
        contactPerson: formData.contactPerson.trim(),
        maturityLevel: formData.maturityLevel.trim(),
        applicationField: formData.achievementDescription.trim(),
        technicalAdvantage: formData.achievementDescription.trim(),
        cooperationMode: formData.cooperationMode.trim() || '技术转让、合作开发',
        tags: formData.tags,
        status: 'active'
      };
      
      const response = await fetch('/api/achievements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '提交失败');
      }
      
      alert('成果已提交，等待审核');
      router.push('/achievements');
    } catch (err) {
      console.error('Error submitting achievement:', err);
      setError(err instanceof Error ? err.message : '提交失败');
      alert('提交失败：' + (err instanceof Error ? err.message : '未知错误'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">发布成果</h1>
          <p className="text-lg">分享您的创新成果，促进科技成果转化</p>
        </div>
      </div>

      {/* 表单内容 */}
      <div className="container mx-auto px-4 py-8">
        {/* 返回按钮 */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-accent-600 hover:text-accent-800 transition-colors"
          >
            <span className="mr-2">←</span>
            返回成果列表
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 成果信息 */}
          <div className="bg-white rounded-custom shadow-md p-8 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                <h2 className="text-2xl font-bold text-title">成果信息</h2>
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 标题 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 标题
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="请输入成果标题"
                />
              </div>

              {/* 研发单位 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 研发单位
                </label>
                <input
                  type="text"
                  name="researchUnit"
                  value={formData.researchUnit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="请输入研发单位"
                />
              </div>

              {/* 技术成熟度 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 技术成熟度
                </label>
                <select
                  name="maturityLevel"
                  value={formData.maturityLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="">请选择技术成熟度</option>
                  <option value="concept">概念阶段</option>
                  <option value="prototype">原型开发</option>
                  <option value="testing">测试验证</option>
                  <option value="pilot">中试阶段</option>
                  <option value="production">生产就绪</option>
                  <option value="commercial">商业化</option>
                </select>
              </div>

              {/* 联系人 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 联系人
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="暂不公开"
                />
              </div>

              {/* 联系方式 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 联系方式
                </label>
                <input
                  type="text"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="暂不公开"
                />
              </div>

              {/* 成果详情 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> 成果详情
                </label>
                <textarea
                  name="achievementDescription"
                  value={formData.achievementDescription}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="请详细描述您的成果内容、技术特点、创新点等"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.achievementDescription.length}/1000
                </div>
              </div>
            </div>
          </div>

          {/* 项目信息 */}
          <div className="bg-white rounded-custom shadow-md p-8 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                <h2 className="text-2xl font-bold text-title">项目信息</h2>
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 项目起止日期 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  项目起止日期
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="date"
                    name="projectStartDate"
                    value={formData.projectStartDate}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="date"
                    name="projectEndDate"
                    value={formData.projectEndDate}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>
              </div>

              {/* 项目资金来源 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  项目资金来源
                </label>
                <input
                  type="text"
                  name="projectFundingSource"
                  value={formData.projectFundingSource}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="请输入资金来源"
                />
              </div>

              {/* 项目团队介绍 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  项目团队介绍
                </label>
                <textarea
                  name="projectTeamIntroduction"
                  value={formData.projectTeamIntroduction}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="请介绍项目团队的基本情况、核心成员等"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.projectTeamIntroduction.length}/1000
                </div>
              </div>
            </div>
          </div>

          {/* 专利情况 */}
          <div className="bg-white rounded-custom shadow-md p-8 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                <h2 className="text-2xl font-bold text-title">专利情况</h2>
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* 是否申请专利 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  是否申请专利
                </label>
                <select
                  name="hasPatentApplication"
                  value={formData.hasPatentApplication}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="no">否</option>
                  <option value="yes">是</option>
                  <option value="applying">申请中</option>
                </select>
              </div>

              {/* 专利详情 */}
              {formData.hasPatentApplication !== 'no' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    专利详情
                  </label>
                  <textarea
                    name="patentDetails"
                    value={formData.patentDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="请详细说明专利申请情况、专利号、专利类型等"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 其他信息 */}
          <div className="bg-white rounded-custom shadow-md p-8 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 mr-3"></div>
                <h2 className="text-2xl font-bold text-title">分类信息</h2>
                <div className="w-4 h-4 bg-accent-500 transform rotate-45 ml-3"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 成果类型 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  成果类型
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="">请选择成果类型</option>
                  {ACHIEVEMENT_TYPES.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 行业领域 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  行业领域
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="">请选择行业领域</option>
                  {INDUSTRIES.map(industry => (
                    <option key={industry.value} value={industry.value}>
                      {industry.icon} {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 地区 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  地区
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="">请选择地区</option>
                  {REGIONS.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 主体类型 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主体类型
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="">请选择主体类型</option>
                  {SUBJECT_TYPES.map(subject => (
                    <option key={subject.value} value={subject.value}>
                      {subject.icon} {subject.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 合作方式 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  合作方式
                </label>
                <input
                  type="text"
                  name="cooperationMode"
                  value={formData.cooperationMode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="例如：技术转让、合作开发、专利授权等"
                />
              </div>

              {/* 标签 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  标签
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-custom flex items-center"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-2 text-accent-500 hover:text-accent-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="输入标签后按回车添加"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const value = (e.target as HTMLInputElement).value.trim();
                      if (value) {
                        handleTagAdd(value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* 错误信息 */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-custom">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-12 py-3 bg-gray-300 text-gray-700 rounded-custom hover:bg-gray-400 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '保存中...' : '保存'}
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-12 py-3 bg-accent-500 text-white rounded-custom hover:bg-accent-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '提交中...' : '提交'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}