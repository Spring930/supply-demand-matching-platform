'use client';

import ContractForm, { ContractFormData } from '@/components/forms/contract-form';

export default function InnovationCoordinatorContractPage() {
  const handleSubmit = async (formData: ContractFormData) => {
    try {
      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 这里可以调用API提交表单数据
      console.log('创新协同员签约申请数据：', formData);
      
      alert('创新协同员签约申请已提交，我们将尽快处理您的申请！');
      
      // 提交成功后可以跳转到其他页面
      // router.push('/services/talent/innovation-coordinator/success');
      
    } catch (error) {
      alert('提交失败，请重试');
      throw error; // 重新抛出错误以让表单组件处理
    }
  };

  return (
    <ContractForm
      title="创新协同员签约申请"
      subtitle="填写完整信息，成为专业创新协同员，为创新项目协调和团队协作提供专业服务"
      backUrl="/services/talent/innovation-coordinator"
      backText="返回创新协同员专区"
      onSubmit={handleSubmit}
    />
  );
}