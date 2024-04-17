import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import darkTheme from "./theme/darkTheme"; // seu tema escuro
import theme from "./theme/theme"; // seu tema claro

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const defaultValue: ThemeContextProps = {
  isDarkMode: false,
  toggleTheme: () => { },
};

export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Use local storage and system preference to determine initial theme
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Update local storage when the theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Listen to system theme changes
  useEffect(() => {
    if (localStorage.getItem("theme")) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
