'use client';

import ContractForm, { ContractFormData } from '@/components/forms/contract-form';

export default function EcoDesignerContractPage() {
  const handleSubmit = async (formData: ContractFormData) => {
    try {
      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 这里可以调用API提交表单数据
      console.log('生态设计师签约申请数据：', formData);
      
      alert('生态设计师签约申请已提交，我们将尽快处理您的申请！');
      
      // 提交成功后可以跳转到其他页面
      // router.push('/services/talent/eco-designer/success');
      
    } catch (error) {
      alert('提交失败，请重试');
      throw error; // 重新抛出错误以让表单组件处理
    }
  };

  return (
    <ContractForm
      title="生态设计师签约申请"
      subtitle="填写完整信息，成为专业生态设计师，为可持续发展设计和生态系统构建提供专业服务"
      backUrl="/services/talent/eco-designer"
      backText="返回生态设计师专区"
      onSubmit={handleSubmit}
    />
  );
}