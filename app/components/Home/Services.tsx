import React from 'react'
import Button from '../Button'

const Services = () => {
    const carroselOptions = [
        {name: 'Direito criminal', text: 'Desenvolvemos uma advocacia artesanal no contencioso processual penal - inquéritos, ações penais e atuação nos tribunais - e na área consultiva com elaboração de pareceres técnicos. Possuímos expertise...'},
        {name: 'Direito tributário', text: 'CONSULTORIA TRIBUTÁRIA: Soluções personalizadas para redução da carga tributária. Consultoria relacionada a tributos e procedimentos fiscais, administração e manutenção de contingências fiscais e regimes...'},
        {name: 'Societário/empresarial', text: 'FUSÕES E AQUISIÇÕES: Assessoria em operações de aquisição e alienação de participações societárias, fusões, incorporações, cisões, aquisição e alienação de ativos, bem como, negociação, estruturação,...'},
    ]

    return (
        <section className="h-[988px] py-20 text-white  w-full max-w-[1920px] bg-[#8E1730] px-[272px]">
            <div className="flex gap-7">
            <div className="w-6 h-6 bg-[#9C1C37]"></div><span>Nossos Serviços</span>
            </div>

            <div className="pt-10 flex flex-wrap flex-row gap-[94px] py-[10px]">
                <span className="text-[41px] font-light flex-1 leading-[50.4px]">
                Conheça nossas áreas <br />
                de atuação, formadas por <br />
                advogados especializados.
                </span>

                <div className="flex-1 py-4">
                <p className="font-[18px] pb-[26px]">
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
                <a>
                <div data-svg-wrapper>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" fill="white"/>
                    <rect x="0.5" y="0.5" width="47" height="47" stroke="#ECEEED"/>
                    <path d="M20.8129 23.2361H30.1109V24.7641H20.8129L24.9109 28.8621L23.8309 29.9421L17.8879 24.0001L23.8299 18.0601L24.9099 19.1401L20.8129 23.2371V23.2361Z" fill="#040605"/>
                    </svg>
                </div>
                </a>

                <a>
                <div data-svg-wrapper>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" fill="white"/>
                    <rect x="0.5" y="0.5" width="47" height="47" stroke="#ECEEED"/>
                    <path d="M27.1869 23.2361L23.0889 19.1401L24.1689 18.0601L30.1119 24.0001L24.1709 29.9421L23.0909 28.8621L27.1879 24.7641H17.8889V23.2361H27.1869Z" fill="#040605"/>
                    </svg>
                </div>
                </a>
                </div>
                <div className="flex w-full gap-4 mt-5">
                {carroselOptions.map((item: any) => {
                    return (
                    <div key={item.name} className="w-[447.33px] h-[434px] bg-black/60">
                        <h3>{item.name}</h3>
                        <span>{item.text}</span>
                        <span>Veja mais</span>
                    </div>

                    )
                })}
                </div>
            </div>
            </section>
    )
}

export default Services