import React from 'react'
import Image from 'next/image'
import LogoImage from "@/public/logo-white.svg"
import ZoomIcon from "@/public/videosvg.svg"
import WhatsappIcon from "@/public/zapsvg.svg"
import MediumIcon from "@/public/mediumsvg.svg"
import FacebookIcon from "@/public/facebook.svg"
import InstagramIcon from "@/public/instagram.svg"
import YoutubeIcon from "@/public/youtube.svg"
import TwitterIcon from "@/public/twitter.svg"

const Links = () => {
    return (
        <div className='text-white text-[14px] flex flex-col xl:col-span-2 gap-[30px] justify-between mt-[32px] md:mt-0'>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-[16px] sm:gap-14'>
                <div className='flex flex-col gap-6 sm:flex-1'>
                    <span>INFORMAÇÕES</span>
                    <a href='/sobre'>Sobre</a>
                    <a href='/servicos'>Serviços</a>
                </div>

                <div className='flex flex-col gap-6 sm:flex-1'>
                    <span>SOBRE NÓS</span>
                    <a href='/contato'>Contato</a>
                    <a href='/sobre'>Nosso time</a>
                    <a href='/contato'>Localização</a>
                </div>

                <a href='/' className='hidden xl:block'>
                    <Image 
                        src={LogoImage}
                        alt=''
                    />
                </a>
            </div>

            <div className='grid md:grid-cols-3'>
                <div className='flex flex-col'>
                    <span>CONTATO</span>
                    <span className='w-[232px] mt-[24px] mb-[50px]'>
                        +55 (21) 98284-9948<br />
                        contato@lmsvadvogados.com.br<br />
                        Centro Empresarial <br />
                        Cândido Mendes, Centro, RJ
                    </span>
                </div>

                <div className='flex flex-col w-full'>
                    <a href='https://api.whatsapp.com/send?phone=5521982849948' className='flex gap-4 items-center mt-4'>
                        <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                            <Image 
                                src={WhatsappIcon}
                                alt=''
                            />
                        </div>
                        <span>Fale conosco!</span>
                    </a>

                    <a href='https://medium.com/' className='flex gap-4 items-center mt-4'>
                        <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                            <Image 
                                src={MediumIcon}
                                alt=''
                                className='w-12 h-auto'
                            />
                        </div>
                        <span>Fique por dentro do nosso Medium</span>
                    </a>
                </div>
            </div>

            <div className='flex justify-between relative'>
                <div className='flex flex-wrap gap-4'>
                <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                    <Image 
                        src={FacebookIcon}
                        alt=''
                    />
                </div>
                <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                    <Image 
                        src={InstagramIcon}
                        alt=''
                    />
                </div>
                <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                    <Image 
                        src={YoutubeIcon}
                        alt=''
                    />
                </div>
                <div className='w-20 h-20 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                    <Image 
                        src={TwitterIcon}
                        alt=''
                    />
                </div>
                <span className='text-xl opacity-40 absolute -bottom-14 md:bottom-0 md:right-0'>© 2023 — Copyright</span>
                </div>

            </div>
        </div>
    )
}

export default Links