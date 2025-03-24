import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const CTA = () => {
    return (
        <Container className="py-[173px] bg-neutral-50">
            <div className="flex flex-col items-center gap-10 text-[14px]">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                <h2 className="text-[#8e1730] font-bold uppercase leading-relaxed tracking-wide">
                    Como podemos ajudar?
                </h2>
                <h1 className="text-[#222222] text-[52px] font-medium leading-[62.40px]">
                    Receba nossas atualizações jurídicas
                </h1>
                </div>
                <p className="text-center text-[18px] text-[#222222] leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <form className="flex flex-wrap items-center justify-center w-full">

                <input type='email' required className="w-auto flex-1 bg-white border py-2 px-4 border-[#cacaca] focus:outline-none" placeholder='E-mail'/>


                <Button variant='default' text='Cadastrar' type='submit' />
            </form>
            </div>
        </Container>
    )
}

export default CTA