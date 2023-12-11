import React from 'react'
import Button from '../UI/Button'

import { SuccessIcon } from '../UI/Icons/Icons'
import Label from '../UI/Label'

type Props = {
    type?: 'primary' | 'secondary'
    title: string
    describtion: string
    buttonName: string
    data: {
        price: string | null
        features: string[]
    }
    backgroundColorBtn?: string[]
    label?: string
}

const Card = (props: Props) => {
    const { type, title, describtion, buttonName, data, backgroundColorBtn, label } = props;
  return (
    <div className={['px-4 md:px-8 h-max rounded-2xl relative md:w-1/3 after:block after:absolute after:top-0 after:left-0 after:content after:rounded-2xl after:-z-10 after:-translate-x-border-card after:-translate-y-border-card after:w-border-card after:h-border-card',
    type === 'primary'
        ? 'py-10 md:py-14 bg-gradient-card-primary after:bg-red-300 dark:bg-dark-gradient-card-secondary dark:after:bg-cyan-300 md:-mt-6'
        : 'py-6 md:py-10 bg-gradient-card-secondary after:bg-card-border-secondary dark:bg-dark-gradient-card-secondary dark:after:bg-dark-card-border-secondary'
    ].join(' ')}>
        {
            label && <Label text={label} />
        }
        <h4 className='font-semibold text-3xl md:text-5xl mb-2 text-stone-800 dark:text-stone-100'>{ title }</h4>
        <span className='text-sm text-stone-800 dark:text-stone-100'>{ describtion }</span>
        {
            data?.price
                ? (
                    <div className='mt-6 flex items-start text-stone-800 dark:text-stone-100'>
                        <span className='text-lg'>$</span>
                        <span className='text-5xl md:text-7xl font-semibold ml-2'>{ data.price }</span>
                        <span className='text-sm self-end mb-1 ml-2'>/ month</span>
                    </div>
                )
                : (
                    <div className='md:h-24'></div>
                )
        }
        <div className='mt-6'>
            <Button 
                title={ buttonName || 'Choose Plan' }
                backgroundColor={backgroundColorBtn} />
        </div>
        <div className='mt-6'>
            <ul className='flex flex-col gap-2'>
                {
                    data.features.map((feature:string, index:number) => (
                        <li key={feature} className='flex gap-2 text-sm font-semibold items-center text-stone-800 dark:text-stone-100'>
                            <span><SuccessIcon size={22} color='#27AE60' /></span>
                            <span>{ feature }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Card