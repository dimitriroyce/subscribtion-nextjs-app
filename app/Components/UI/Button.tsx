import React from 'react'

type Props = {
    title: string
    backgroundColor?: string[] | '#fff'
}

const Button = (props: Props) => {
    const { title } = props;
    return (
        <button className={`px-12 py-3 w-full rounded-full  bg-gradient-to-r from-violet-200 to-violet-300 text-black border border-gray-300`}>
            {title}
        </button>
    )
}

export default Button