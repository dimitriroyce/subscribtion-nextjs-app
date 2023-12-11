import React from 'react'
import { Logo } from '../UI/Icons/Icons'
import ThemeMode from '../UI/ThemeMode'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
        <div className='flex items-center justify-between max-w-6xl mx-auto py-4 px-4 md:px-0 select-none'>
            <div className='flex items-center gap-2'>
                <span className='h-12'>
                    <Logo className='h-full w-14'/>
                </span>
                <span className='font-bold text-xl text-black dark:text-white'>DiFOX</span>
            </div>
            <div>
                <ul className='hidden md:flex gap-x-8'>
                    <li>Docs</li>
                    <li>Prices</li>
                    <li>API</li>
                </ul>
            </div>
            <div>
                <ThemeMode />
            </div>
        </div>
    </header>
  )
}

export default Header