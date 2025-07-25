import * as React from 'react';
import Link from 'next/link';

const footerLinks = {
  platform: {
    title: '平台服务',
    links: [
      { name: '需求发布', href: '/demands' },
      { name: '成果展示', href: '/achievements' },
      { name: '智能匹配', href: '/match' },
      { name: '地图分析', href: '/map' },
    ],
  },
  services: {
    title: '专业服务',
    links: [
      { name: '人才专区', href: '/services/talent' },
      { name: '概念验证', href: '/services/validation' },
      { name: '校企合作', href: '/services/cooperation' },
      { name: '金融融资', href: '/services/funding' },
    ],
  },
  support: {
    title: '帮助支持',
    links: [
      { name: '使用指南', href: '/help/guide' },
      { name: '常见问题', href: '/help/faq' },
      { name: '联系客服', href: '/help/contact' },
      { name: '反馈建议', href: '/help/feedback' },
    ],
  },
  about: {
    title: '关于我们',
    links: [
      { name: '平台介绍', href: '/about' },
      { name: '合作伙伴', href: '/partners' },
      { name: '隐私政策', href: '/privacy' },
      { name: '服务条款', href: '/terms' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-title text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Platform info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl">驭风</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              专业的技术转移转化平台，连接创新成果与市场需求，促进产学研深度融合，推动科技成果产业化。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <span className="sr-only">微信</span>
                <span className="text-xl">💬</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <span className="sr-only">微博</span>
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 驭风. 保留所有权利.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">技术支持：</span>
              <div className="flex items-center space-x-2">
                <span className="text-accent-400 font-medium">Next.js</span>
                <span className="text-gray-500">•</span>
                <span className="text-accent-400 font-medium">React</span>
                <span className="text-gray-500">•</span>
                <span className="text-accent-400 font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;