import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import serviceImage from '@/public/servicos/service2.png'

const Service2 = () => {
    return (
        <Container className="h-auto min-h-[446px] bg-white z-10">
            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>
                <Image 
                    src={serviceImage}
                    alt=''
                    priority
                    quality={100}
                    className='w-full max-w-[678px] hidden lg:block'
                />   

                <div>
                    <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[34px] xl:mb-[51px] relative">
                        <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                        <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                            Especialidades
                        </span>
                    </div>
                    <div className="w-full lg:max-w-[640px]">
                        <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                            Direito tributário
                        </span>

                        <div className="w-full lg:max-w-[560px] mt-[8px] xl:mt-[26px]">
                            <p className="text-[1.4rem] lg:text-[1.8rem] mb-[24px] xl:mb-[38px] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                                <b>Consultivo:</b> Planejamento tributário, regimes especiais, consultoria estratégica e compliance fiscal.
                                <br /> <br />
                                <b>Contencioso:</b> Atuação administrativa e judicial, inclusive nos Tribunais Superiores. Recuperação de créditos e defesa em autuações fiscais.
                            </p>
                        </div>
                    </div>
                </div>    

                <Image 
                    src={serviceImage}
                    alt=''
                    priority
                    quality={100}
                    className='w-full max-w-[678px] block lg:hidden'
                />   
            </div>
        </Container>
    )
}

export default Service2