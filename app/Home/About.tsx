import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import EllipseImage from '@/public/Ellipse 2.png'
import Container from '../components/Container'

const About = () => {
    return (
        <Container className="">
            <div className="flex items-center gap-7">
                <div className="w-6 h-6 bg-[#9C1C37]"></div>
                <span className="text-[#8e1730]">Sobre nós</span>
            </div>

            <div className="pt-10 flex flex-wrap flex-row w-full justify-between py-[10px]">
                <span className="text-[4rem] font-light leading-[50.4px]">
                    Somoso guiados por um propósito <br /> 
                    de prestar assessoria e consultoria <br />
                    jurídica personalizada e fiel aos <br /> 
                    nossos valores.
                </span>

                <div className="py-4">
                    <p className="pb-[26px]">
                        Atuamos nos diversos segmentos do Direito, com destaque para o Direito <br />
                        Penal, Direito Constitucional e Administrativo, Direito Tributário, Direito da <br />
                        Internet e Propriedade Intelectual, Direito Civil e Processual, Direito <br />
                        Empresarial, Direito Trabalhista e Direito de Família e Sucessório.
                    </p>

                    <Button variant="default" text="Ver mais" />
                </div>
            </div>
            <Image 
            src={EllipseImage}
            alt="ellipse"
            className="absolute left-0 bottom-[-280px] z-10"
            />
        </Container>
    )
}

export default About