'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'
import Button from './Button'
import Container from './Container'

const NavbarDesktop = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [actualPage, setActualPage] = useState('home')
    const isSobrePage = window.location.href.includes('sobre')
    const isServicosPage = window.location.href.includes('servicos')
    const isContatoPage = window.location.href.includes('contato')

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(isSobrePage) {
            setActualPage('sobre')
        } else if (isServicosPage) {
            setActualPage('servicos')
        } else if (isContatoPage) {
            setActualPage('contato')
        } else {
            setActualPage('home')
        }
    }, [])

    return (
        <Container 
            className={`hidden lg:flex fixed w-full h-fit text-[1.6rem] items-center !py-0 justify-between min-h-[112px] max-h-[112px] z-30 transition-all duration-100 ${(isScrolled || isContatoPage || actualPage === 'contato') ? 'bg-white shadow-lg' : 'bg-transparent'}`}
        >
            <nav className={`w-full flex mx-auto max-w-[1376px] font-medium justify-between items-center`}>
                <div className="flex items-center w-full">
                    <Link href="/">
                        <Image src={LogoImage} alt="Logo" className="max-w-[125px]" />
                    </Link>
                    <div className="hidden md:flex space-x-4 ml-[107px] text-[#757575]">
                        <Link 
                            href="/" 
                            onClick={() => setActualPage('home')}
                            className={`w-auto px-[27.5px] py-[10px] text-center ${actualPage === 'home' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/sobre" 
                            onClick={() => setActualPage('sobre')}
                            className={`w-auto px-[27.5px] py-[10px] text-center ${actualPage === 'sobre' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Sobre
                        </Link>
                        <Link 
                            href="/servicos"
                            onClick={() => setActualPage('servicos')}
                            className={`w-auto px-[27.5px] py-[10px] text-center ${actualPage === 'servicos' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Serviços
                        </Link>
                        <Link 
                            href="/contato" 
                            onClick={() => setActualPage('contato')}
                            className={`w-auto px-[27.5px] py-[10px] text-center ${actualPage === 'contato' ? 'text-[#222] bg-[#fafafa]' : ''}`}
                        >
                            Contato
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button variant={`${(!isScrolled && actualPage === 'home')? 'alternative' : 'default'}`} text='Entre em contato' />
                </div>
            </nav>
        </Container>
    );
}

export default NavbarDesktop;