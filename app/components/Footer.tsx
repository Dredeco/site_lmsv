import React from 'react'
import Office1Image from '@/public/office-tower1.png'
import Office2Image from '@/public/office-tower2.png'
import Image from 'next/image'
import LogoImage from "@/public/logo-white.svg"
import ZoomIcon from "@/public/videosvg.svg"
import WhatsappIcon from "@/public/zapsvg.svg"
import FacebookIcon from "@/public/facebook.svg"
import InstagramIcon from "@/public/instagram.svg"
import YoutubeIcon from "@/public/youtube.svg"
import TwitterIcon from "@/public/twitter.svg"
import Container from './Container'


const Footer = () => {
    const addresses = [
        {name: 'Centro Empresarial Cândido', street: 'Rua da Assembleia, 10, Gr.2502/2503 - Centro', city: 'Rio de Janeiro-RJ CEP: 20011-901', img: Office2Image},
        {name: 'Centro Empresarial Cândido Mendes', street: 'Rua da Assembleia, 10, Gr.2502/2503 - Centro', city: `Rio de Janeiro-RJ CEP: 20011-901`, img: Office1Image},
    ]
    return (
        <>
        <Container className="">
            <div className="flex gap-7">
                <div className="w-6 h-6 bg-[#9C1C37]" />
                <span className='text-[#8e1730]'>
                    Opiniões reais
                </span>
            </div>

            <div className="pt-10 flex flex-wrap flex-row justify-between py-[10px] relative">
                <span className='text-[4.2rem] flex-1 font-light'>
                    Saiba onde nos encontrar
                </span>
                <p className='leading-[28.80px] flex-1 text-[1.7rem] pt-4'>
                    Com escritórios no Rio de Janeiro e Brasília, desenvolvemos alianças estratégicas <br /> 
                    com outros escritórios de modo a suplementar/complementar nosso expertise <br /> 
                    para atendimento de demandas específicas de nossos clientes.
                </p>
            </div>

            <div className='flex flex-wrap justify-between mt-24 gap-4'>
                {addresses.map((address: any, index: any) => {
                    return (
                        <div key={index} className='flex flex-wrap flex-1 gap-4'>
                            <Image 
                                src={address.img}
                                alt={address.name}
                                className='w-auto max-h-[462px]'
                            />
                            <div className='flex flex-col leading-[28.80px] text-[#757575] max-w-[215px] gap-6'>
                                <span className='font-light text-[2.4rem] text-[#040605]'>{address.name}</span>
                                <span>{address.street}</span>
                                <span className='w-[80%]'>{address.city}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
            {/* <----------------- FOMULARIO ------------------> */}
        <Container className="bg-[#8E1730]">
            <div className="pt-10 bg-white flex flex-wrap flex-row gap-[94px] py-[10px] relative w-[392px]">
                <span>
                    Deixe seu contato e <br />
                    falamos com você!
                </span>

                <div>
                    <input 
                        type='text'
                        placeholder='Nome'
                    />
                                        <input 
                        type='text'
                        placeholder='Nome'
                    />
                                        <input 
                        type='text'
                        placeholder='Nome'
                    />
                </div>

                <button>Enviar</button>
            </div>

            <div className='text-white flex flex-col gap-4 mt-20'>
                <div className='flex w-full'>
                    <div className='flex flex-col w-[247px]'>
                        <span>INFORMAÇÕES</span>
                        <a href=''>Sobre</a>
                        <a href=''>Serviços</a>
                    </div>

                    <div className='flex flex-col w-[247px]'>
                        <span>SOBRE NÓS</span>
                        <a href=''>Contato</a>
                        <a href=''>Nosso time</a>
                        <a href=''>Localização</a>
                    </div>

                    <a href='' className='w-[247px]'>
                        <Image 
                            src={LogoImage}
                            alt=''
                        />
                    </a>
                </div>

                <div className='flex flex-col'>
                    <span>CONTATO</span>
                    <div className='flex'>
                        <span className='w-[232px]'>
                            +55 21 98284-9948<br />
                            hello@logoipsum.com<br />
                            Rio de Janeiro
                        </span>

                        <div>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                                    <Image 
                                        src={ZoomIcon}
                                        alt=''
                                    />
                                </div>
                                <span>Reunião virtual através do Zoom™</span>
                            </div>

                            <a href='https://api.whatsapp.com/send?phone=5521982849948' className='flex gap-4 items-center mt-4'>
                                <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                                    <Image 
                                        src={WhatsappIcon}
                                        alt=''
                                    />
                                </div>
                                <span>Fale conosco!</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                    <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                        <Image 
                            src={FacebookIcon}
                            alt=''
                        />
                    </div>
                    <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                        <Image 
                            src={InstagramIcon}
                            alt=''
                        />
                    </div>
                    <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                        <Image 
                            src={YoutubeIcon}
                            alt=''
                        />
                    </div>
                    <div className='w-12 h-12 border border-white border-opacity-15 flex justify-center items-center rounded-full'>
                        <Image 
                            src={TwitterIcon}
                            alt=''
                        />
                    </div>
                    </div>

                    <span>© 2023 — Copyright</span>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Footer