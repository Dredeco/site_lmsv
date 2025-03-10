import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '@/public/rigth_arrow.svg'

const RightArrowButton = () => {
    return (
        <button className='min-w-[48px] min-h-[48px] bg-white flex items-center justify-center hover:bg-[##ECEEED]'>
            <Image 
                src={RightArrowIcon}
                alt='Back'
            />
        </button>
    )
}

export default RightArrowButton