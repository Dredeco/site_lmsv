import React from 'react'

const CTA = () => {
    return (
        <section className="h-[574.38px] flex justify-center items-center w-full bg-neutral-50 overflow-hidden px-12 py-44">
            <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                <h2 className="text-[#8e1730] text-sm font-bold uppercase leading-relaxed tracking-wide">
                    Como podemos ajudar?
                </h2>
                <h1 className="text-[#222222] text-[52px] font-medium leading-[62.40px]">
                    Receba nossas atualizações jurídicas
                </h1>
                </div>
                <p className="text-center text-[#222222] text-lg leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="flex items-center w-[680px] h-12 bg-white border border-[#cacaca]">
                <div className="flex-grow pl-4 pr-2">
                <label className="text-[#757575] text-sm">E-mail</label>
                </div>
                <button className="w-[216px] bg-[#8e1730] text-white text-[15px] h-full font-medium leading-[15px]">
                Cadastrar
                </button>
            </div>
            </div>
        </section>
    )
}

export default CTA