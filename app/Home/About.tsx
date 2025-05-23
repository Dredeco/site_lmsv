import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'

const About = () => {
    return (
        <>
        <Container className="h-auto bg-white z-10">
        <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[34px] lg:mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                    Sobre nós
                </span>
            </div>
        
        <div className='w-full flex flex-wrap justify-between gap-5'>            
            <span className="lg:max-w-[640px] text-[2.4rem] lg:text-[4.2rem] font-light leading-[133%] tracking-[-1.26px]">
                Somos guiados por um propósito
                de prestar assessoria e consultoria
                jurídica personalizada e fiel aos
                nossos valores.
            </span>


            <div className="lg:max-w-[600px] flex flex-col">
                <p className="mb-[24px] lg:mb-0 pt-3 text-[1.2rem] lg:text-[1.8rem] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                    Atuamos nos diversos segmentos do Direito, com destaque para o Direito
                    Penal, Direito Constitucional e Administrativo, Direito Tributário, Direito da
                    Internet e Propriedade Intelectual, Direito Civil e Processual, Direito
                    Empresarial, Direito Trabalhista e Direito de Família e Sucessório.
                </p>

                <a href='/sobre'>
                    <Button variant="default" text="Ver mais" />
                </a>
            </div>
        </div>
        </Container>
        </>
    )
}

export default About