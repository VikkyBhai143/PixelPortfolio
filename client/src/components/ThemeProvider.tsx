import { createContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    const body = document.body;
    body.classList.remove("light-mode", "dark-mode", "paper-texture", "crt-effect");
    
    if (theme === "light") {
      body.classList.add("light-mode", "paper-texture");
      body.style.background = "var(--off-white)";
      body.style.color = "var(--dark-gray)";
    } else {
      body.classList.add("dark-mode", "crt-effect");
      body.style.background = "var(--pixel-black)";
      body.style.color = "var(--neon-green)";
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
