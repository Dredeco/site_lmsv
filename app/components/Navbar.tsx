'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            className={`flex fixed w-full text-[1.6rem] items-center justify-between h-[112px] z-30 transition-all duration-100 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
        >
            <nav className={`w-full flex mx-auto max-w-[1376px] font-medium justify-between items-center`}>
                <div className="flex items-center w-full">
                    <Link href="/">
                        <Image src={LogoImage} alt="Logo" className="max-w-[125px]" />
                    </Link>
                    <div className="hidden md:flex space-x-4 ml-[107px] text-[#757575]">
                        <Link href="/" className='w-[100px] px-[27.5px] py-[10px] text-center text-[#222] bg-[#fafafa]'>Home</Link>
                        <Link href="/sobre" className='w-[100px] px-[27.5px] py-[10px] text-center'>Sobre</Link>
                        <Link href="/servicos" className='w-[100px] px-[27.5px] py-[10px] text-center'>Serviços</Link>
                        <Link href="/contato" className='w-[100px] px-[27.5px] py-[10px] text-center'>Contato</Link>
                    </div>
                    <button className="md:hidden" onClick={toggleDropdown}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:block">
                    <Button variant={`${isScrolled ? 'default' : 'alternative'}`} text='Entre em contato' />
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t-2 border-black">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <Link href="/" className='block w-full text-center py-2'>Home</Link>
                        </li>
                        <li>
                            <Link href="/Sobre" className='block w-full text-center py-2'>Sobre</Link>
                        </li>
                        <li>
                            <Link href="/services" className='block w-full text-center py-2'>Serviços</Link>
                        </li>
                        <li>
                            <Link href="/contact" className='block w-full text-center py-2'>Contato</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;