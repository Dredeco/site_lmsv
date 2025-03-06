import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '@/public/rigth_arrow.svg'

const RightArrowButton = () => {
    return (
        <button className='w-12 h-12 bg-white flex items-center justify-center hover:bg-[##ECEEED]'>
            <Image 
                src={RightArrowIcon}
                alt='Back'
            />
        </button>
    )
}

export default RightArrowButton