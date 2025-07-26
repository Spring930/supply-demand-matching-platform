'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login'); // 登录 或 注册
  const [authType, setAuthType] = useState<'sms' | 'password'>('sms'); // 短信验证 或 账号密码
  const [loading, setLoading] = useState(false);
  
  // 表单数据
  const [formData, setFormData] = useState({
    phone: '',
    smsCode: '',
    email: '',
    password: '',
    captcha: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendSmsCode = async () => {
    if (!formData.phone) {
      alert('请输入手机号');
      return;
    }
    // 这里实现发送短信验证码逻辑
    alert('验证码已发送');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 这里实现登录/注册逻辑
      console.log('提交表单:', { mode, authType, formData });
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 成功后跳转
      router.push('/');
    } catch (error) {
      console.error('认证失败:', error);
      alert('认证失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-gray-50"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/>%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}
    >

      
      {/* 登录/注册卡片 */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl border border-gray-100">
        {/* 标题 */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          注册 / 登录
        </h1>
        
        {/* 选项卡切换：短信验证 / 账号密码 */}
        <div className="flex mb-6 bg-accent-50 rounded-lg p-1">
          <button
            onClick={() => setAuthType('sms')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authType === 'sms'
                ? 'bg-accent-500 text-white shadow-sm'
                : 'text-accent-700 hover:text-accent-600'
            }`}
          >
            短信验证
          </button>
          <button
            onClick={() => setAuthType('password')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authType === 'password'
                ? 'bg-accent-500 text-white shadow-sm'
                : 'text-accent-700 hover:text-accent-600'
            }`}
          >
            账号密码
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authType === 'sms' ? (
            /* 短信验证表单 */
            <>
              <div>
                <Label htmlFor="phone" className="block text-sm text-gray-700 mb-1">
                  手机号
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="请输入手机号"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-accent-50 border border-accent-200 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex space-x-3">
                <div className="flex-1">
                  <Label htmlFor="smsCode" className="block text-sm text-gray-700 mb-1">
                    短信验证码
                  </Label>
                  <Input
                    id="smsCode"
                    type="text"
                    placeholder="请输入验证码"
                    value={formData.smsCode}
                    onChange={(e) => handleInputChange('smsCode', e.target.value)}
                    className="w-full bg-accent-50 border border-accent-200 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    maxLength={6}
                    required
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="button"
                    onClick={sendSmsCode}
                    variant="outline"
                    className="bg-transparent border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white rounded-lg px-4 py-2 h-auto"
                  >
                    发送验证码
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* 账号密码表单 */
            <>
              <div>
                <Label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                  手机号
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="请输入手机号"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-accent-50 border border-accent-200 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                  密码
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-accent-50 border border-accent-200 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  minLength={6}
                  required
                />
              </div>

              <div className="flex space-x-3">
                <div className="flex-1">
                  <Label htmlFor="captcha" className="block text-sm text-gray-700 mb-1">
                    图形验证码
                  </Label>
                  <Input
                    id="captcha"
                    type="text"
                    placeholder="请输入验证码"
                    value={formData.captcha}
                    onChange={(e) => handleInputChange('captcha', e.target.value)}
                    className="w-full bg-accent-50 border border-accent-200 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    maxLength={4}
                    required
                  />
                </div>
                <div className="flex items-end">
                  <div className="bg-gray-300 rounded-lg px-4 py-2 h-auto flex items-center justify-center text-sm text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
                    <span className="text-blue-500 font-mono">mq</span>
                    <span className="text-red-500 font-mono">5h</span>
                    <span className="text-green-500 font-mono">7n</span>
                    <span className="text-purple-500 font-mono">3k</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 提交按钮 */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg py-3 border-0 shadow-lg transition-colors"
            >
              {loading ? '处理中...' : mode === 'login' ? '登录' : '注册 / 登录'}
            </Button>
          </div>

          {/* 自动注册提示 */}
          <div className="text-center pt-2">
            <span className="text-sm text-gray-500">
              * 未注册用户将自动注册并登录
            </span>
          </div>

          {/* 切换登录/注册模式 */}
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-accent-600 hover:text-accent-700 underline text-sm transition-colors"
            >
              {mode === 'login' ? '注册' : '登录'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}