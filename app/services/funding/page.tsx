// 金融融资服务页面

import FundingPageClient from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金融融资 - 服务中心',
  description: '为您的创新项目提供概念验证、校企合作、金融融资等专业服务，助力项目成功获得资金支持',
};

export default function FundingPage() {
  return <FundingPageClient />;
}