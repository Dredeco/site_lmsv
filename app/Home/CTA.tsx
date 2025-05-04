import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const CTA = () => {
    return (
        <Container className="bg-neutral-50 py-0">
            <div className="flex flex-col items-center py-[82px] lg:py-[172px] justify-center gap-10 text-[14px]">
                <div className="flex flex-col items-center gap-[24px]">
                    <div className="text-center">
                        <h2 className="text-[#8e1730] text-[1.4rem] font-bold uppercase leading-[180%] tracking-[0.56px]">
                            Como podemos ajudar?
                        </h2>

                        <h1 className="text-[#222222] px-3 lg:px-0 mt-[8px] text-[2.4rem] lg:text-[3.2rem] xl:text-[5.2rem] font-medium leading-[120%] tracking-[-0.36px] lg:tracking-[-0.14px]">
                            Receba nossas atualizações jurídicas
                        </h1>
                    </div>
                    <p className="text-center text-[1.4rem] xl:text-[1.8rem] text-[#222222] leading-[180%] tracking-[-0.36px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <form className="flex items-center justify-center w-full">
                    <input 
                        type='email' 
                        required 
                        className="w-auto max-w-[464px] flex-1 bg-white border py-[10px] px-4 border-[#cacaca] focus:outline-none" 
                        placeholder='E-mail'
                    />
                    <Button variant='default' text='Cadastrar' type='submit' />
                </form>
            </div>
        </Container>
    )
}

export default CTA