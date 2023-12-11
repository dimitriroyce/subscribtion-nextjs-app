"use client";
import { ThemeProvider } from "./utilities/theme-content";

export default function Providers({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider>
            { children }
        </ThemeProvider>
    )
}