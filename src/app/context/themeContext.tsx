"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storage = window.localStorage;
    if (!storage || typeof storage.getItem !== "function") {
      return null;
    }

    const storedTheme = storage.getItem("theme");
    return storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
};

const getSystemTheme = (): Theme => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getStoredTheme() ?? getSystemTheme());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    try {
      const storage = window.localStorage;
      if (storage && typeof storage.setItem === "function") {
        storage.setItem("theme", theme);
      }
    } catch {
      return;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
