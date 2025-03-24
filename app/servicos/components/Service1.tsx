import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import serviceImage from '@/public/servicos/service1.png'

const Service1 = () => {
    return (
        <Container className="h-auto min-h-[446px] bg-[#fafafa] z-10">
            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>   
                <div>
                    <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[34px] xl:mb-[51px] relative">
                        <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                        <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                            Especialidades
                        </span>
                    </div>
                    <div className="w-full lg:max-w-[640px]">
                        <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                            Direito criminal
                        </span>

                        <div className="w-full lg:max-w-[580px] mt-[8px] xl:mt-[26px]">
                            <p className="text-[1.4rem] lg:text-[1.8rem] mb-[24px] xl:mb-[38px] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                                Desenvolvemos uma advocacia artesanal no contencioso processual 
                                penal - inquéritos, ações penais e atuação nos tribunais - e na área 
                                consultiva com elaboração de pareceres técnicos. Possuímos 
                                expertise em crimes tributários, matérias inerentes ao direito penal 
                                econômico, crimes contra a honra, crimes eleitorais e crimes da 
                                competência do Tribunal do Júri.
                            </p>
                        </div>
                    </div>
                </div>         

                <Image 
                    src={serviceImage}
                    alt=''
                    priority
                    quality={100}
                    className='w-full max-w-[678px]'
                />
            </div>
        </Container>
    )
}

export default Service1