import { useContext, createContext, useState, useEffect, useCallback } from 'react';
import { ThemeContextProps, ThemeContextType } from '../types/';

const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || null);
  const dark = 'dark';
  const light = 'light';
  const defaultMode = light;
  const [activeMode, setActiveMode] = useState<boolean>(true);

  const documentEle = window.document.documentElement;
  const activateTheme = useCallback(
    (theme: string) => {
      documentEle.classList.remove(dark, light);
      documentEle.classList.add(theme);

      setActiveMode(theme === dark);
      localStorage.setItem('theme', theme);
    },
    [dark, documentEle.classList, light]
  );

  useEffect(() => {
    if (theme === dark) activateTheme(dark);
    if (theme === light) activateTheme(light);

    if (!theme) {
      const preferTheme = (theme: string) => `prefers-color-scheme:${theme}`;

      if (window.matchMedia(preferTheme(dark)).matches) activateTheme(dark);
      else if (window.matchMedia(preferTheme(light)).matches) activateTheme(light);
      else activateTheme(defaultMode);

      window.matchMedia(preferTheme(dark)).addEventListener('change', (event) => {
        if (event.matches) activateTheme(dark);
      });
      window.matchMedia(preferTheme(light)).addEventListener('change', (event) => {
        if (event.matches) activateTheme(light);
      });
    }
  }, [activateTheme, light, defaultMode, dark, theme]);

  return (
    <ThemeContext.Provider value={{ activeMode, activateTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
