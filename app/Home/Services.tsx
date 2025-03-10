import React from 'react'
import Button from '../components/Button'
import RightArrowButton from '../components/RightArrowButton'
import LeftArrowButton from '../components/LeftArrowButton'
import Container from '../components/Container'
import BgImage1 from '@/public/image-model-1.png'
import BgImage2 from '@/public/image-model-2.png'
import Image from 'next/image'

const Services = () => {
    const carroselOptions = [
        {name: 'Direito criminal', text: 'Desenvolvemos uma advocacia artesanal no contencioso processual penal - inquéritos, ações penais e atuação nos tribunais - e na área consultiva com elaboração de pareceres técnicos. Possuímos expertise...'},
        {name: 'Direito tributário', text: 'CONSULTORIA TRIBUTÁRIA: Soluções personalizadas para redução da carga tributária. Consultoria relacionada a tributos e procedimentos fiscais, administração e manutenção de contingências fiscais e regimes...'},
        {name: 'Societário /empresarial', text: 'FUSÕES E AQUISIÇÕES: Assessoria em operações de aquisição e alienação de participações societárias, fusões, incorporações, cisões, aquisição e alienação de ativos, bem como, negociação, estruturação,...'},
    ]

    return (
        <Container className="bg-[#8E1730] text-white">
            <div className="flex items-center gap-7">
            <div className="w-6 h-6 bg-[#9C1C37]"></div><span>Nossos Serviços</span>
            </div>

            <div className="pt-10 flex flex-wrap flex-row justify-between w-full py-[10px]">
                <span className="text-[4rem] font-light leading-[50.4px]">
                Conheça nossas áreas <br />
                de atuação, formadas por <br />
                advogados especializados.
                </span>

                <div className="py-4">
                <p className="pb-[26px]">
                    A equipe do Leão, Moreno & Vianna Advogados é composta por <br />
                    advogados especializados em crimes tributários, matérias inerentes ao <br />
                    direito penal econômico, crimes contra a honra, crimes eleitorais e crimes <br />
                    da competênciado Tribunal do Júri.
                </p>

                <Button variant="alternative" text="Ver mais" />
                </div>
            </div>

            {/* CARROSEL */}
            <div className="w-full mt-10">
                <div className="w-full flex gap-4 justify-end">
                    <LeftArrowButton />
                    <RightArrowButton />
                </div>
                <div className="flex w-fullv flex-wrap gap-4 mt-5">
                {carroselOptions.map((item: any, index: any) => {
                    return (
                    <div key={item.name} className="carousel-item w-[447.33px] h-[434px] flex flex-col justify-between relative z-10 bg-black p-9">
                        <h3 className='max-w-36 text-[2.4rem] font-light leading-[26.03px] mt-9'>{item.name}</h3>
                        <div className='flex flex-col gap-10 text-[1.4rem]'>
                            <span className='font-light'>{item.text}</span>
                            <span className='font-medium'>Veja mais</span>
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
    )
}

export default Services