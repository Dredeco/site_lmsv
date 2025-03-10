import React from 'react'
import Container from '../components/Container'

const CTA = () => {
    return (
        <Container className="py-[173px] bg-neutral-50">
            <div className="flex flex-col items-center gap-10 text-[1.6rem]">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                <h2 className="text-[#8e1730] font-bold uppercase leading-relaxed tracking-wide">
                    Como podemos ajudar?
                </h2>
                <h1 className="text-[#222222] text-[52px] font-medium leading-[62.40px]">
                    Receba nossas atualizações jurídicas
                </h1>
                </div>
                <p className="text-center text-[#222222] leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="flex items-center w-[680px] h-16 bg-white border border-[#cacaca]">
                <div className="flex-grow pl-4 pr-2">
                <input type='text' className="text-[#757575] w-full focus:border-none" placeholder='E-mail'/>
                </div>
                <button className="w-[216px] bg-[#8e1730] text-white h-full font-medium leading-[15px]">
                Cadastrar
                </button>
            </div>
            </div>
        </Container>
    )
}

export default CTA