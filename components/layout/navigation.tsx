'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// 导航项配置
const navigationItems = [
  {
    name: '首页',
    href: '/',
    icon: '🏠',
  },
  {
    name: '需求板块',
    href: '/demands',
    icon: '📋',
  },
  {
    name: '成果板块',
    href: '/achievements',
    icon: '🔬',
  },
  {
    name: '地图可视化',
    href: '/map',
    icon: '🗺️',
  },
  {
    name: '服务中心',
    href: '/services',
    icon: '🏢',
  },
  {
    name: '个人中心',
    href: '/profile',
    icon: '👤',
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-title text-2xl">
              驭风
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-custom text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent-50 text-accent-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <Link href="/sign-in">登录/注册</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-custom text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="sr-only">打开菜单</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-custom text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-accent-50 text-accent-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sign-in">登录/注册</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;