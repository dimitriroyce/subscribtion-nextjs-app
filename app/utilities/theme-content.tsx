import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark' | null;

interface ThemeContentType {
    theme?: Theme;
    toggleTheme?: () => void
}

const ThemeContext = createContext<ThemeContentType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        theme && document.documentElement.classList.add(theme);
        theme && localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('Must be used within a ThemeProvider');
    }
    return context;
}