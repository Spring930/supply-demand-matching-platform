// 概念验证申请页面

import ValidationPageClient from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '概念验证 - 服务中心',
  description: '通过AI智能匹配验证您的技术方案在市场上的可行性，提供专业的概念验证服务，助力技术成果转化和产业化应用',
  keywords: '概念验证,技术验证,市场验证,AI匹配,技术转化,产业化',
};

export default function ValidationPage() {
  return <ValidationPageClient />;
}