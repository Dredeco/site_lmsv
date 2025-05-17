import Image from 'next/image'
import React from 'react'
import BackgroundImage from '@/public/background.png'
import BackgroundImage2 from '@/public/background2.png'
import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
    return (
        <div className='!relative lg:h-[776px] w-full mx-auto max-w-[1920px]'>
            <Image 
                className="absolute hidden lg:block top-0 right-0 lg:left-[57dvw] xl:left-[46dvw] min-h-full max-h-full -z-10 w-auto"
                src={BackgroundImage}
                priority
                alt=""
                quality={100}
            />
            <Container>
                <div className="flex flex-col lg:h-[776px] mt-[150px] lg:mt-[93px]">
                    <h1 className="text-[3.2rem] lg:text-[5.2rem] w-full lg:max-w-[640px] font-medium leading-[120%] mb-[24px] tracking-[-0.14px]">
                        Soluções jurídicas <br />
                        e estratégicas com
                        tradição e excelência
                    </h1>
                    <span className="text-[1.4rem] lg:text-[1.8rem] text-[#424847] font-normal w-full lg:max-w-[570px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                        Com mais de duas décadas de atuação na advocacia corporativa, o 
                        escritório Leão, Moreno, Scisinio e Vianna Advogados se destaca por 
                        sua abordagem personalizada, técnica e eficiente. Nosso trabalho alia 
                        excelência jurídica, sensibilidade humanista e uso estratégico da 
                        tecnologia para entregar soluções sob medida, alinhadas aos 
                        objetivos e desafios específicos de cada cliente.
                    </span>
                    <a href='/contato' >
                        <Button 
                            variant="default" 
                            text="Entre em contato" 
                            
                        />
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default Hero