import Image from 'next/image'
import React from 'react'
import BackgroundImage from '@/public/Background.png'
import Button from '../Button'

const Hero = () => {
    return (
        <section className="h-[776px] w-full max-w-[1920px] px-[272px] relative">
            <Image 
            className="absolute top-0 right-0 -z-10 max-h-[90vh] w-auto"
            src={BackgroundImage}
            alt=""
            />

            <div className="w-[680px] flex flex-col h-full justify-center">
            <h1 className="text-[52px] font-medium leading-[62.4px] mb-[24px]">
                Soluções Jurídicas e <br />
                Estratégicas com <br />
                Tradição e Excelência
            </h1>
            <span className="w-[537px] text-[18px] font-normal leading-[28.8px] mb-[40px]">
                Com mais de 30 anos de experiência, unimos conhecimento <br />
                técnico e visão multidisciplinar para oferecer assessoria <br />
                jurídica personalizada em diversas áreas do Direito.
            </span>
            <Button 
                variant="default" 
                text="Entre em contato" 
            />
            </div>
        </section>
    )
}

export default Hero