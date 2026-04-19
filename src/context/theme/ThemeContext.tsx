// ✅ Client Component — Provider que maneja estado de tema y usa useEffect para aplicar cambios al DOM
'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'Claro' | 'Oscuro';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('Claro');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'Claro' ? 'Oscuro' : 'Claro'));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  useEffect(() => {
    document.body.classList.remove('Claro', 'Oscuro');
    document.body.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};