import React from 'react'
import Button from '../components/Button'
import RightArrowButton from '../components/RightArrowButton'
import LeftArrowButton from '../components/LeftArrowButton'
import Container from '../components/Container'
import BgImage1 from '@/public/image-model-1.png'
import BgImage2 from '@/public/image-model-2.png'
import EllipseImage from '@/public/Ellipse 2.png'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    const carroselOptions = [
        {name: 'Direito Criminal<br /> Empresarial', text: 'Atuação estratégica no contencioso penal e consultivo. Expertise em crimes tributários, crimes contra a ordem econômica, crimes eleitorais, contra a honra e Tribunal do Júri. Defesa técnica em inquéritos, ações penais...'},
        {name: 'Direito<br /> tributário', text: '<b>Consultivo</b>: Planejamento tributário, regimes especiais, consultoria estratégica e compliance fiscal.<br /> <b>Contencioso</b>: Atuação administrativa e judicial, inclusive nos Tribunais Superiores. ...'},
        {name: 'Direito Societário<br /> e Empresarial', text: '<b>M&A</b>: Estruturação e condução de operações de fusão, aquisição, cisão e reestruturação societária.<br /> <b>Consultivo Societário</b>: Atos constitutivos, reuniões societárias, planejamento e governança corporativa...'},
    ]

    return (
        <div className='relative w-full h-auto'>
        <Container className="text-white bg-[#8E1730] py-40">
            <div className="flex items-center gap-[28px] mb-[34px] lg:mb-[51px]">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className='text-[1.2rem] lg:text-[1.8rem] tracking-[-0.54px] font-normal'>Nossos Serviços</span>
            </div>

            <div className="flex flex-wrap flex-row justify-between w-full gap-5">
                <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[133%] tracking-[-1.26px]">
                Conheça nossas áreas <br />
                de atuação, formadas por <br />
                advogados especializados.
                </span>

                <div className="py-4 flex flex-col gap-[26px] lg:max-w-[600px]">
                    <p className="text-[1.2rem] lg:text-[1.8rem] tracking-[-0.36px] leading-[160%] font-light">
                        O escritório Leão, Moreno, Scisinio e Vianna Advogados oferece uma 
                        advocacia full service voltada ao setor corporativo, com atuação 
                        integrada nas seguintes áreas:
                    </p>

                    <a href='/servicos' >
                        <Button variant="alternative" text="Ver mais" />
                    </a>
                </div>
            </div>

            {/* CARROSEL */}
            <div className="w-full mt-[56px]">
                <div className="w-full flex gap-4 justify-end">
                    <LeftArrowButton />
                    <RightArrowButton />
                </div>
                <div className="flex w-full justify-between flex-wrap gap-4 mt-5">
                {carroselOptions.map((item: any, index: any) => {
                    return (
                    <div key={item.name} className={`carousel-item w-full max-w-[447.33px] h-[434px] flex-${index} lg:flex-1 flex flex-col justify-between relative z-10 bg-black p-9`}>
                        <h3 className='text-[24px] font-light leading-[26.03px] mt-9' 
                        dangerouslySetInnerHTML={{__html: item.name}}
                        />
                        <div className='flex flex-col gap-10 text-[1.4rem]'>
                            <span className='font-light text-[14px]' dangerouslySetInnerHTML={{__html: item.text}}></span>
                            <Link className='font-medium text-[15px]' href='/servicos'>Veja mais</Link>
                        </div>

                        <Image 
                            src={(index % 2 === 0) ? BgImage1 : BgImage2}
                            alt=''
                            className='absolute top-0 left-0 -z-10 opacity-25'
                        />
                    </div>

                    )
                })}
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Services