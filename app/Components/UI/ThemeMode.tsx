"use client";
import React from 'react';
import { useTheme } from '../../utilities/theme-content';

type Props = {}

const ThemeMode = (props: Props) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div onClick={toggleTheme} className='flex items-center gap-2'>
            <span className='text-sm font-semibold text-black dark:text-gray-500'>Light</span>
            <div className='w-12 h-6 rounded-xl transition-colors bg-sky-200 dark:bg-violet-950 relative'>
                <div className='w-5 h-5 rounded-full bg-amber-200 dark:bg-white absolute top-0.5 left-1 transition-all dark:translate-x-5'></div>
            </div>
            <span className='text-sm font-semibold text-gray-500 dark:text-white'>Dark</span>
        </div>
    )
}

export default ThemeMode;