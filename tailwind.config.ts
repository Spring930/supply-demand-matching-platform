import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色系 - 中性灰背景
        primary: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#E0E2E3', // 主色
          600: '#9AA0A6',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        },
        // 强调色 - 科技绿
        accent: {
          50: '#E6FFF9',
          100: '#B3FFE6',
          200: '#80FFD9',
          300: '#4DFFCC',
          400: '#1AFFBF',
          500: '#00FFB9', // 科技绿操作按钮
          600: '#00E6A7',
          700: '#00CC95',
          800: '#00B383',
          900: '#009971',
        },
        // 辅助色 - 深绿重要标识
        secondary: {
          50: '#E6F2EF',
          100: '#CCE5DB',
          200: '#99CCC7',
          300: '#66B2B3',
          400: '#33999F',
          500: '#004A36', // 深绿重要标识
          600: '#00422F',
          700: '#003B28',
          800: '#003321',
          900: '#002C1A',
        },
        // 墨绿标题文字
        title: '#002E21',
      },
      fontFamily: {
        sans: ['Inter', 'Source Han Sans CN', 'Noto Sans CJK SC', 'system-ui', 'sans-serif'],
        'source-han': ['Source Han Sans CN', 'Noto Sans CJK SC', 'sans-serif'],
      },
      borderRadius: {
        'custom': '8px', // 统一圆角
      },
      spacing: {
        // 8px基准网格
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px', 
        'desktop': '1440px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-8px,0)' },
          '70%': { transform: 'translate3d(0,-4px,0)' },
          '90%': { transform: 'translate3d(0,-2px,0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config