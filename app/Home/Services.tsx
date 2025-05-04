import React from 'react'
import Button from '../components/Button'
import RightArrowButton from '../components/RightArrowButton'
import LeftArrowButton from '../components/LeftArrowButton'
import Container from '../components/Container'
import BgImage1 from '@/public/image-model-1.png'
import BgImage2 from '@/public/image-model-2.png'
import EllipseImage from '@/public/Ellipse 2.png'
import Image from 'next/image'

const Services = () => {
    const carroselOptions = [
        {name: 'Direito criminal', text: 'Desenvolvemos uma advocacia artesanal no contencioso processual penal - inquéritos, ações penais e atuação nos tribunais - e na área consultiva com elaboração de pareceres técnicos. Possuímos expertise...'},
        {name: 'Direito tributário', text: 'CONSULTORIA TRIBUTÁRIA: Soluções personalizadas para redução da carga tributária. Consultoria relacionada a tributos e procedimentos fiscais, administração e manutenção de contingências fiscais e regimes...'},
        {name: 'Societário /empresarial', text: 'FUSÕES E AQUISIÇÕES: Assessoria em operações de aquisição e alienação de participações societárias, fusões, incorporações, cisões, aquisição e alienação de ativos, bem como, negociação, estruturação,...'},
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
                    <p className="text-[1.2rem] lg:text-[1.8rem] tracking-[-0.36px] leading-[160%] font-normal">
                        A equipe do Leão, Moreno & Vianna Advogados é composta por
                        advogados especializados em crimes tributários, matérias inerentes ao
                        direito penal econômico, crimes contra a honra, crimes eleitorais e crimes
                        da competênciado Tribunal do Júri.
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
                        <h3 className='max-w-36 text-[24px] font-light leading-[26.03px] mt-9'>{item.name}</h3>
                        <div className='flex flex-col gap-10 text-[1.4rem]'>
                            <span className='font-light text-[14px]'>{item.text}</span>
                            <span className='font-medium text-[15px]'>Veja mais</span>
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