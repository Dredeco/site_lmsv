import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import EllipseImage from '@/public/Ellipse 2.png'

const About = () => {
    return (
        <section className="flex flex-col h-auto w-full max-w-[1920px] py-[80px] relative px-[272px]">
            <div className="flex gap-7">
                <div className="w-6 h-6 bg-[#9C1C37]"></div><text>Sobre nós</text>
            </div>

            <div className="pt-10 flex flex-wrap flex-row gap-[94px] py-[10px]">
            <span className="text-[41px] font-light flex-1 leading-[50.4px]">
                Somoso guiados por um propósito <br /> 
                de prestar assessoria e consultoria <br />
                jurídica personalizada e fiel aos <br /> 
                nossos valores.
            </span>

            <div className="flex-1 py-4">
                <p className="font-[18px] pb-[26px]">
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
            className="absolute left-0 bottom-[-280px] z-20"
            />
        </section>
    )
}

export default About