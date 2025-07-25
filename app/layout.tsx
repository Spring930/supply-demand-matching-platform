import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: '供需对接平台 - 创新成果与需求高效撮合',
  description: '专业的技术转移转化平台，实现创新成果与真实需求的高效撮合。智能推荐、地图可视化、多维度服务，助力科技成果产业化。',
  keywords: '供需对接,技术转移,成果转化,科技创新,产学研合作',
  authors: [{ name: '供需对接平台' }],
  viewport: 'width=device-width, initial-scale=1',
};

export const viewport: Viewport = {
  maximumScale: 1,
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable}`}
    >
      <head>
        {/* Preload fonts for better performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Meta tags for better SEO and performance */}
        <meta name="theme-color" content="#00FFB9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-primary-500 text-gray-900 antialiased">
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <Navigation />
          
          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}