import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme || "light"; // JSON.parse kaldırıldı
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme); // JSON.stringify kaldırıldı
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
