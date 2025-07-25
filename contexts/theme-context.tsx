'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColor {
  name: string;
  value: string;
  primary: string;
  primaryForeground: string;
}

export const themeColors: ThemeColor[] = [
  {
    name: 'Blue',
    value: 'blue',
    primary: '217 91% 59%', // blue-500 in HSL
    primaryForeground: '0 0% 98%'
  },
  {
    name: 'Green',  
    value: 'green',
    primary: '142 76% 36%', // green-500 in HSL
    primaryForeground: '0 0% 98%'
  },
  {
    name: 'Orange',
    value: 'orange', 
    primary: '25 95% 53%', // orange-500 in HSL
    primaryForeground: '0 0% 98%'
  },
  {
    name: 'Red',
    value: 'red',
    primary: '0 84% 60%', // red-500 in HSL
    primaryForeground: '0 0% 98%'
  }
];

interface ThemeContextType {
  mode: ThemeMode;
  themeColor: ThemeColor;
  toggleMode: () => void;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [themeColor, setThemeColorState] = useState<ThemeColor>(themeColors[0]);
  const [mounted, setMounted] = useState(false);

  // Load theme preferences from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    const savedColor = localStorage.getItem('theme-color');
    
    if (savedMode) {
      setMode(savedMode);
    } else {
      // Check system preference
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemDark ? 'dark' : 'light');
    }
    
    if (savedColor) {
      const color = themeColors.find(c => c.value === savedColor);
      if (color) {
        setThemeColorState(color);
      }
    }
    
    setMounted(true);
    
    // Force apply initial theme immediately when mounted
    const root = document.documentElement;
    const initialColor = savedColor ? themeColors.find(c => c.value === savedColor) || themeColors[0] : themeColors[0];
    root.style.setProperty('--primary', initialColor.primary);
    root.style.setProperty('--primary-foreground', initialColor.primaryForeground);
  }, []); 

  // Apply theme changes to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Apply dark/light mode
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Apply theme color as CSS variables
    root.style.setProperty('--primary', themeColor.primary);
    root.style.setProperty('--primary-foreground', themeColor.primaryForeground);
    
    // Save to localStorage
    localStorage.setItem('theme-mode', mode);
    localStorage.setItem('theme-color', themeColor.value);
  }, [mode, themeColor, mounted]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setThemeColor = (color: ThemeColor) => {
    setThemeColorState(color);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ mode, themeColor, toggleMode, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};