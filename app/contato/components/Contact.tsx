import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'
import WhatsappIcon from '@/public/contato/whatsapp.svg'
import EmailIcon from '@/public/contato/email.svg'
import CameraIcon from '@/public/contato/camera.svg'
import LocationIcon from '@/public/contato/location.svg'

const Contact = () => {
    const tecnologies = [
        {text: '+55 (021) 9999-9990', icon: WhatsappIcon},
        {text: 'contato@lmvadvogados.adv.br', icon: EmailIcon},
        {text: 'Agende agora mesmouma reunião no ZOOM', icon: CameraIcon},
        {text: 'Empresarial Cândido Mendes, RJCentro Empresarial Varig, DF', icon: LocationIcon},
    ]
    return (
        <Container className="h-auto bg-[#FAFAFA]">
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                    Contato
                </span>
            </div>

            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>            
                <div className="w-full flex flex-col gap-[24px] lg:max-w-[600px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[120%] tracking-[-1.26px]">
                        Como podemos te ajudar?
                    </span>

                    <span className="text-[1.4rem] lg:text-[1.8rem] font-normal w-full lg:max-w-[680px] tracking-[-0.36px] leading-[160%] mb-[40px]">
                        Preencha e envie o formulário de e-mail abaixo ou agende uma 
                        videochamada por Zoom. Você pode contar com uma resposta 
                        rápida, tratamento respeitoso e uma preocupação focada em sua 
                        questão jurídica.
                    </span>
                </div>

                <div className="grid md:grid-cols-2 w-full lg:max-w-[640px] gap-4">
                    {tecnologies.map((tecnology: any) => {
                        return (
                            <div key={tecnology.text} className='px-[24px] flex flex-col items-center gap-12 h-auto py-[40px] text-center bg-white'>
                                <Image 
                                    src={tecnology.icon}
                                    alt=''
                                />

                                <span className='text-[1.4rem] lg:text-[1.8rem] leading-[160%] tracking-[-0.36px]'>
                                    {tecnology.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Contact