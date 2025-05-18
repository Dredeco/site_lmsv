import React from 'react'
import Container from '../../Container'
import Image from 'next/image'
import Office1Image from '@/public/office-tower1.png'

const Address = () => {
    const addresses = [
        {name: 'Centro Empresarial Cândido Mendes', street: 'Rua da Assembleia, 10, Gr.2502/2503 - Centro', city: 'Rio de Janeiro-RJ', cep: 'CEP: 20011-901', img: Office1Image},
    ]

    return (
        <Container className={'bg-[#fafafa]'}>
        <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[39px] relative">
            <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
            <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                Localização
            </span>
        </div>

        <div className='w-full flex flex-wrap justify-between items-center gap-[26px] lg:gap-24'>            
                <div className="w-full lg:-mt-20 lg:max-w-[620px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                        Saiba onde nos encontrar.
                    </span>
                </div>

                <div className="w-full lg:max-w-[711px] flex-1">
                    <p className="text-[1.4rem] lg:text-[1.8rem] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                        Com escritórios no Rio de Janeiro, desenvolvemos alianças estratégicas com outros 
                        escritórios de modo a suplementar/complementar nosso expertise <br />
                        para atendimento de demandas específicas de nossos clientes.
                    </p>
                </div>
            </div>

        <div className='w-full justify-between mt-24 gap-4'>
            {addresses.map((address: any, index: any) => {
                return (
                    <div key={index} className='md:w-fit grid md:grid-cols-3 gap-[16px]'>
                        <Image 
                            src={address.img}
                            alt={address.name}
                            className='w-full h-auto max-h-[462px] md:col-span-2'
                            priority
                            quality={100}
                        />

                        <div className='flex flex-col leading-[28.80px] w-full text-[#757575] gap-[24px]'>
                            <span className='font-light text-[2.4rem] text-[#040605]'>
                                {address.name}
                            </span>
                            <div className='flex flex-col gap-[4px]'>
                                <span className='text-[1.8rem]'>
                                    {address.street}
                                </span>
                                <span className='text-[1.8rem]'>
                                    {address.city}
                                </span>
                                <span className='text-[1.8rem]'>
                                    {address.cep}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </Container>
    )
}

export default Address