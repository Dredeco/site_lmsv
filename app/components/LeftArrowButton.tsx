import React from 'react'
import LeftArrowIcon from '@/public/left_arrow.svg'
import Image from 'next/image'

const LeftArrowButton = () => {
    return (
        <button className='min-w-[48px] min-h-[48px] bg-white flex items-center justify-center hover:bg-[##ECEEED]'>
            <Image 
                src={LeftArrowIcon}
                alt='Back'
            />
        </button>
    )
}

export default LeftArrowButton