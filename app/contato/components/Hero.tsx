import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/contato/hero_background.png'

const Hero = () => {
    return (
    <div className='!relative w-full mx-auto max-w-[1920px]'>
        <Container className={'bg-[#8E1730] min-h-[748px] flex items-center text-white'}>
            <div className="flex w-full max-w-[610px] flex-col pt-[80px] justify-center">
                <h1 className="text-[3.2rem] lg:text-[5.2rem] w-full lg:max-w-[640px] font-medium leading-[120%] mb-[24px] tracking-[-0.14px]">
                    Entre em contato com os nossos profissionais.
                </h1>
                <span className="text-[1.4rem] lg:text-[1.8rem] font-normal w-full lg:max-w-[680px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                    Estamos confiantes de que podemos agregar valor através da prática 
                    jurídica de nossos advogados.
                </span>
            </div>

            <Image 
                src={HeroImage}
                alt=''
                priority
                className='hidden xl:block w-auto max-w-[50%] min-w-[50%] h-[636px] absolute bottom-0 right-0'
                quality={100}
            />
        </Container>
    </div>
    )
}

export default Hero