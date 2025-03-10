import Image from 'next/image'
import React from 'react'
import BackgroundImage from '@/public/Background.png'
import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
    return (
        <Container className="min-h-[86vh]">
            <Image 
            className="absolute top-0 right-0 -z-10 max h-full w-auto"
            src={BackgroundImage}
            alt=""
            />

            <div className="max-w-[680px] flex flex-col h-full justify-center pt-[100px]">
                <h1 className="text-[5.2rem] font-medium leading-[62.4px] mb-[24px]">
                    Soluções Jurídicas e <br />
                    Estratégicas com <br />
                    Tradição e Excelência
                </h1>
                <span className="text-[1.8rem] font-normal leading-[28.8px] mb-[40px]">
                    Com mais de 30 anos de experiência, unimos conhecimento <br />
                    técnico e visão multidisciplinar para oferecer assessoria <br />
                    jurídica personalizada em diversas áreas do Direito.
                </span>
                <Button 
                    variant="default" 
                    text="Entre em contato" 
                />
            </div>
        </Container>
    )
}

export default Hero