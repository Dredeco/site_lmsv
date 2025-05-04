import Container from '@/app/components/Container'
import React from 'react'

import especiality1 from '@/public/servicos/box1.png'
import especiality2 from '@/public/servicos/box2.png'
import especiality3 from '@/public/servicos/box3.png'
import especiality4 from '@/public/servicos/box4.png'
import especiality5 from '@/public/servicos/box5.png'
import especiality6 from '@/public/servicos/box6.png'
import Image from 'next/image'

const Escecialities = () => {
    const especialities = [
        {
            name: 'Societário/ empresarial', 
            text: 'Assessoria em operações de aquisição e alienação de participações societárias, fusões, incorporações, cisões, aquisição e alienação de ativos, bem como, negociação, estruturação, implementação e interface com as autoridades reguladoras competentes.',
            image: especiality1
        },
        {
            name: 'Direito civil e processual', 
            text: 'Elaboração e negociação de contratos de natureza civil e comercial em geral, em especial contratos de prestação de serviços, distribuição, fornecimento e representação comercial.',
            image: especiality2
        },
        {
            name: 'Direito de família e sucessório', 
            text: 'Estruturação de alternativas eficientes para proteção dos bens (pessoa física ou jurídica) e organização de sua sucessão, no Brasil e no exterior, para fins de sucessão. Assessoria na elaboração de testamentos e na organização de estruturas societárias para este propósito.',
            image: especiality3
        },        
        {
            name: 'Direito Trabalhista', 
            text: 'Nossa atuação tem como foco a prevenção e gestão de crises, em processos que envolvem inspeções regulatórias, investigações de empregados e executivos nos diversos contextos.',
            image: especiality4
        },        
        {
            name: 'Direito Administrativo', 
            text: 'Nosso escritório atua em causas envolvendo as relações admitidas pela Administração Pública, realizadas por suas pessoas jurídicas, órgãos e agentes públicos, no interesse de pessoas físicas e jurídicas.',
            image: especiality5
        },        
        {
            name: 'Direito digital /propriedade intelectual', 
            text: 'Prestamos assessoria jurídica extrajudicial e judicial para clientes com demandas de identificação de autoria, registro de software, registros e disputas de marcas (propriedade intelectual), contratos de tecnologia, direitos autorais e remoção de conteúdo na...',
            image: especiality6
        },
    ]
    return (
        <Container className={'bg-[#8E1730]'}>
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-white" />
                <span className="text-white text-[1.2rem] lg:text-[1.8rem]">
                    Especialidades
                </span>
            </div>

            <div className='text-white h-auto'>
                <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                    Outras áreas de atuação
                </span>

                <div className='grid mt-[40px] h-auto grid-cols-[repeat(auto-fit,_minmax(272px,_447px))] gap-[16px]'>
                    {especialities.map((especiality: any) => {
                        return (
                            <div key={especiality.name} className='w-full flex px-[29px] py-[61px] flex-col justify-between bg-black h-[434px] max-h-[434px] max-w-[447px] relative'>
                                <Image
                                    src={especiality.image}
                                    alt=''
                                    priority
                                    fill
                                    quality={100}
                                    className='opacity-40'
                                />
                                <span className='z-10 text-[2.4rem] max-w-[185px] font-light leading-[108.474%] tracking-[-0.651px]'>
                                    {especiality.name}
                                </span>
                                <span className='z-10 text-[1.4rem] font-light leading-[160%] tracking-[-0.36px]'>
                                    {especiality.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Escecialities