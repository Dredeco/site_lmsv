import React from 'react'
import Container from '../../components/Container'
import heroBackground from '@/public/sobre/hero_background.png'
import Image from 'next/image'

export const Hero = () => {
  return (
        <div className='!relative h-auto w-full mx-auto max-w-[1920px]'>
            <Container>
                <div className="flex w-full flex-col pt-[80px] justify-center">
                    <h1 className="text-[3.2rem] lg:text-[5.2rem] w-full lg:max-w-[640px] font-medium leading-[120%] mb-[24px] tracking-[-0.14px]">
                      Quem somos
                    </h1>
                    <span className="text-[1.4rem] lg:text-[1.8rem] text-[#424847] font-normal w-full lg:max-w-[680px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                      Somos guiados por um propósito de prestar assessoria e consultoria jurídica 
                      personalizada e fiel aos nossos valores: Coragem, efetividade, transparência, 
                      parceria, proatividade e foco no cliente.
                    </span>
                </div>

                <Image 
                  src={heroBackground}
                  alt=''
                  className='hidden lg:block'
                  priority
                  quality={100}
                />
            </Container>
        </div>
  )
}
