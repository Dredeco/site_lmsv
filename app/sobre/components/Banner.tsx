import React from 'react'
import Container from '../../components/Container'

const Banner = () => {
    return (
        <Container className={'bg-[#8E1730]'}>
            <div className='text-white text-center h-auto py-[60px]'>
                <span className='font-light text-[2.0rem] lg:text-[2.4rem] tracking-[-0.651px] leading-[108%]'>
                    Somos guiados por um propósito de prestar assessoria e consultoria jurídica personalizada e fiel aos nossos valores
                </span>
                <h1 className='font-extralight text-[3.5rem] lg:text-[4.1rem] leading-[122.927%] tracking-[-1.26px] mt-[24px] italic'>
                    Coragem, efetividade, transparência, parceria, proatividade e foco no cliente.
                </h1>
            </div>
        </Container>
    )
}

export default Banner