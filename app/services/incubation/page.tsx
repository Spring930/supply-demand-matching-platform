// 项目孵化申请页面

import IncubationPageClient from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '项目孵化 - 服务中心',
  description: '为您的创新项目提供专业孵化服务，连接优质孵化器资源，助力项目成功孵化',
};

export default function IncubationPage() {
  return <IncubationPageClient />;
}