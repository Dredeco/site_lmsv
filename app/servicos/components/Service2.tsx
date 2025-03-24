import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import serviceImage from '@/public/servicos/service2.png'

const Service2 = () => {
    return (
        <Container className="h-auto min-h-[446px] bg-white z-10">
            <div className='w-full items-center grid lg:grid-cols-2 gap-[26px] lg:gap-24'>
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
                                CONSULTORIA TRIBUTÁRIA: Soluções personalizadas para redução 
                                da carga tributária. Consultoria relacionada a tributos e 
                                procedimentos fiscais, administração e manutenção de 
                                contingências fiscais e regimes especiais de apuração e de 
                                pagamento de tributos, além da estruturação de alternativas 
                                eficientes para viabilização de negócios. <br /><br />

                                CONTENCIOSO TRIBUTÁRIO: Contencioso administrativo e judicial 
                                nas esferas federal, estadual e municipal, em todas as instâncias, 
                                inclusive perante os tribunais superiores, assim como o patrocínio 
                                em demandas para a recuperação de créditos.
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