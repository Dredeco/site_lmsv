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
            name: 'Direito Civil<br /> e Processual',
            text: '<b>Contratos:</b> Elaboração e revisão de instrumentos civis e comerciais.<br /> <b>Imobiliário:</b> Assessoria em operações imobiliárias, financiamento, incorporações, loteamentos e auditoria jurídica. Consumidor: Consultoria e defesa em relações de consumo e gestão de passivo consumerista.',
            image: especiality1
        },
        {
            name: 'Direito de Família<br /> e Sucessório', 
            text: '<b>Planejamento Patrimonial e Sucessório:</b> Estruturação de holdings e testamentos.<br /> <b>Atuação Judicial e Extrajudicial:</b> Adoção, inventário, divórcio, partilha, curatela e parentalidade.<br /> <b>Mediação Familiar:</b> Soluções consensuais com sensibilidade e técnica.',
            image: especiality2
        },
        {
            name: 'Direito<br /> Trabalhista', 
            text: '<b>Contencioso:</b> Defesa em ações individuais e coletivas, estratégias preventivas e gestão de risco.<br /> <b>Consultivo:</b> Suporte ao RH, contratos, compliance trabalhista e terceirização.',
            image: especiality3
        },        
        {
            name: 'Direito<br /> Administrativo', 
            text: 'Atuação em licitações, contratos administrativos, responsabilidade de agentes públicos, processos administrativos e concessões.',
            image: especiality4
        },        
        {
            name: 'Direito Digital<br /> e Propriedade Intelectual', 
            text: '<b>Consultivo:</b> Adequação à LGPD, políticas de privacidade, contratos tecnológicos e compliance digital.<br /> <b>Contencioso:</b> Disputas sobre marcas, registros, remoção de conteúdo e violação de direitos autorais.',
            image: especiality5
        },        
        {
            name: 'Direito<br /> Imobiliário', 
            text: 'Oferecemos suporte completo em transações imobiliárias, estruturação de empreendimentos, contratos de compra e venda, locações, incorporações e auditorias jurídicas. Atuamos desde a análise jurídica de riscos até a execução de estratégias eficazes de viabilização de negócios no setor imobiliário.',
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
                            <div key={especiality.name} className='w-full flex px-[29px] py-[61px] flex-col justify-between lg:justify-normal lg:gap-[145px] bg-black h-[434px] max-h-[434px] max-w-[447px] relative'>
                                <Image
                                    src={especiality.image}
                                    alt=''
                                    priority
                                    fill
                                    quality={100}
                                    className='opacity-40'
                                />
                                <span className='z-10 text-[2.4rem] font-light leading-[108.474%] tracking-[-0.651px]' 
                                dangerouslySetInnerHTML={{__html: especiality.name}}
                                />
                                <span className='z-10 text-[1.4rem] font-light leading-[160%] tracking-[-0.36px]' 
                                dangerouslySetInnerHTML={{__html: especiality.text}}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Escecialities