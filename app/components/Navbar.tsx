import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'
import Button from './Button'


const Navbar = () => {
    return (
        <header 
            className="flex fixed items-center justify-between w-screen max-w-[1920px] py-[21px] max-h-[112px]"
        >
            <nav className="container mx-auto flex w-full font-medium justify-between items-center px-20">
                <div className="flex items-center">
                <Link href="/">
                    <Image src={LogoImage} alt="" className="max-w-[125px]" />
                </Link>
                <ul className="flex space-x-4 ml-[107px] text-[#757575]">
                <li>
                    <Link href="/" className='w-[100px] px-[27.5px] py-[10px] text-center'>Home</Link>
                </li>
                <li>
                    <Link href="/about" className='w-[100px] px-[27.5px] py-[10px] text-center text-[#222] bg-[#fafafa]'>Sobre</Link>
                </li>
                <li>
                    <Link href="/services" className='w-[100px] px-[27.5px] py-[10px] text-center'>Serviços</Link>
                </li>
                <li>
                    <Link href="/contact" className='w-[100px] px-[27.5px] py-[10px] text-center'>Contato</Link>
                </li>
                </ul>
                </div>
                <Button variant='alternative' text='Entre em contato' />
            </nav>
        </header>
    )
}

export default Navbar