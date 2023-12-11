import React from 'react'

type Props = {
    text?: string
}

const Label = (props: Props) => {
    const { text } = props;
    return (
        <div className='px-4 py-1 rounded-2xl bg-cyan-500 text-white font-semibold text-sm absolute -top-2 right-4'>{ text }</div>
    )
}

export default Label