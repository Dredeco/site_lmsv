'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'
import Container from './Container'
import MenuIcon from '@/public/menu.svg'

const NavbarMobile = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [actualPage, setActualPage] = useState('home')
    const [isOpen, setisOpen] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleOpenMenu = () => {
        setisOpen(!isOpen)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const isSobrePage = window.location.href.includes('sobre')
        const isServicosPage = window.location.href.includes('servicos')
        const isContatoPage = window.location.href.includes('contato')

        if(isSobrePage) {
            setActualPage('sobre')
        } else if (isServicosPage) {
            setActualPage('servicos')
        } else if (isContatoPage) {
            setActualPage('servicos')
        } else {
            setActualPage('home')
        }
    }, [])

    return (
        <Container 
            className={`flex lg:hidden fixed w-full text-[1.6rem] items-center py-0 justify-between min-h-[115px] max-h-[115px] z-30 transition-all duration-100 ${(isScrolled || actualPage === 'contato') ? 'bg-white shadow-lg' : 'bg-transparent'}`}
        >
            <nav className={`w-full flex mx-auto max-w-[1376px] font-medium justify-between items-center`}>
                <div className="flex items-center w-full">
                    <Link href="/">
                        <Image src={LogoImage} alt="Logo" className="max-w-[125px]" />
                    </Link>


                    <div className={`absolute flex flex-col bg-white w-full left-0 text-[#757575] ${isOpen ? 'top-[112px]' : '-top-[500px]'}`}>
                        <Link 
                            href="/" 
                            onClick={() => {
                                setisOpen(false)
                                setActualPage('home')
                            }}
                            className={`w-auto px-[27.5px] py-[20px] text-center ${actualPage === 'home' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/sobre" 
                            onClick={() => {
                                setisOpen(false)
                                setActualPage('sobre')
                            }}
                            className={`w-auto px-[27.5px] py-[20px] text-center ${actualPage === 'sobre' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Sobre
                        </Link>
                        <Link 
                            href="/servicos"
                            onClick={() => {
                                setisOpen(false)
                                setActualPage('servicos')
                            }}
                            className={`w-auto px-[27.5px] py-[20px] text-center ${actualPage === 'servicos' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Serviços
                        </Link>
                        <Link 
                            href="/contato" 
                            onClick={() => {
                                setisOpen(false)
                                setActualPage('contato')
                            }}
                            className={`w-auto px-[27.5px] py-[20px] text-center ${actualPage === 'contato' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Contato
                        </Link>
                    </div>

                </div>
                <div className="cursor-pointer" onClick={handleOpenMenu}>
                    <Image 
                        src={MenuIcon}
                        alt=''
                    />
                </div>
            </nav>
        </Container>
    );
}

export default NavbarMobile;