import Container from '@/app/components/Container'
import React from 'react'
import robotIcon from '@/public/sobre/robot.svg'
import pdfIcon from '@/public/sobre/pdf.svg'
import searchIcon from '@/public/sobre/search.svg'
import caseIcon from '@/public/sobre/case.svg'
import Image from 'next/image'

const Tecnology = () => {
    const tecnologies = [
        {text: 'Monitoramento processual por robôs de busca', icon: robotIcon},
        {text: 'GED, Gestão Eletrônica de Documentos', icon: pdfIcon},
        {text: 'Double check de publicações', icon: searchIcon},
        {text: 'Setor exclusivo de Legal Ops', icon: caseIcon},
    ]
    return (
        <Container className="h-auto bg-[#FAFAFA]">
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                    Crescimento tecnológico
                </span>
            </div>

            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>            
                <div className="w-full lg:max-w-[600px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[120%] tracking-[-1.26px]">
                        Atendemos mais clientes graças 
                        a toda nossa tecnologia.
                    </span>
                </div>

                <div className="grid md:grid-cols-2 w-full lg:max-w-[640px] gap-4">
                    {tecnologies.map((tecnology: any) => {
                        return (
                            <div key={tecnology.text} className='px-[24px] flex flex-col items-center gap-12 h-auto py-[40px] text-center bg-white'>
                                <Image 
                                    src={tecnology.icon}
                                    alt=''
                                />

                                <span className='text-[1.4rem] lg:text-[1.8rem] leading-[160%] tracking-[-0.36px]'>
                                    {tecnology.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Tecnology