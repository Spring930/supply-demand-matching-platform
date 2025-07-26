'use client';

import { useState } from 'react';
import { signOut } from '@/app/(login)/actions';

interface LogoutButtonProps {
  className?: string;
}

export function LogoutButton({ className = '' }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      // signOut action will handle the redirect automatically
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`
        w-full px-4 py-2 
        bg-white 
        border-2 border-accent-500 
        text-accent-600 
        rounded-custom 
        font-medium 
        transition-all duration-200
        hover:bg-accent-50 
        hover:border-accent-600
        hover:text-accent-700
        focus:outline-none 
        focus:ring-2 
        focus:ring-accent-300 
        focus:ring-offset-2
        disabled:opacity-50 
        disabled:cursor-not-allowed
        disabled:hover:bg-white
        ${className}
      `.trim()}
      type="button"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-accent-500 border-t-transparent rounded-full animate-spin mr-2" />
          退出中...
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="mr-2">🚪</span>
          退出登录
        </div>
      )}
    </button>
  );
}