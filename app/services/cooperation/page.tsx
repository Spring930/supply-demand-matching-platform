// 校企合作服务页面

import CooperationPageClient from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '校企合作 - 服务中心',
  description: '寻找优质合作机构，包括高等院校、科研院所、知名企业等，支持技术转移、联合研发、人才交流、学生实习等多种合作模式，助力产学研深度融合',
};

export default function CooperationPage() {
  return <CooperationPageClient />;
}