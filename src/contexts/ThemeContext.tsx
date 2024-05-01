import { ReactNode, createContext, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initTheme = (localStorage.getItem("TODO_THEME") as Theme) ?? "light";
  const [theme, setTheme] = useState<Theme>(initTheme);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useLayoutEffect(() => {
    localStorage.setItem("TODO_THEME", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
