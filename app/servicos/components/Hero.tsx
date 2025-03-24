import React from 'react'
import Container from '../../components/Container'
import heroBackground from '@/public/servicos/hero_background.png'
import Image from 'next/image'

export const Hero = () => {
  return (
        <div className='!relative h-auto w-full mx-auto max-w-[1920px]'>
            <Container>
                <div className="flex w-full flex-col pt-[80px] justify-center">
                    <h1 className="text-[3.2rem] lg:text-[5.2rem] w-full lg:max-w-[640px] font-medium leading-[120%] mb-[24px] tracking-[-0.14px]">
                      Nossos serviços
                    </h1>
                    <span className="text-[1.4rem] lg:text-[1.8rem] text-[#424847] font-normal w-full lg:max-w-[680px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                      A equipe do Leão, Moreno & Vianna Advogados é composta por advogados 
                      especializados em crimes tributários,matérias inerentes ao direito penal 
                      econômico, crimes contra a honra, crimes eleitorais e crimes da competênciado 
                      Tribunal do Júri.
                    </span>
                </div>

                <Image 
                  src={heroBackground}
                  alt=''
                  priority
                  quality={100}
                />
            </Container>
        </div>
  )
}
