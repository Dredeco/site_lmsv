import Image from 'next/image'
import React from 'react'
import BackgroundImage from '@/public/Background.png'
import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
    return (
        <div className='!relative h-[776px] lg:min-h-[776px] w-full mx-auto max-w-[1920px]'>
            <Image 
                className="absolute hidden lg:block top-0 right-0 min-h-full max-h-full -z-10 w-auto"
                src={BackgroundImage}
                priority
                alt=""
                quality={100}
            />
            <Container>
                <div className="flex flex-col h-[770px] justify-center">
                    <h1 className="text-[3.2rem] lg:text-[5.2rem] w-full lg:max-w-[640px] font-medium leading-[120%] mb-[24px] tracking-[-0.14px]">
                        Soluções jurídicas e
                        estratégicas com
                        tradição e excelência
                    </h1>
                    <span className="text-[1.4rem] lg:text-[1.8rem] text-[#424847] font-normal w-full lg:max-w-[520px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                        Com mais de 30 anos de experiência, unimos conhecimento
                        técnico e visão multidisciplinar para oferecer assessoria
                        jurídica personalizada em diversas áreas do Direito.
                    </span>
                    <Button 
                        variant="default" 
                        text="Entre em contato" 
                    />
                </div>
            </Container>
        </div>
    )
}

export default Hero