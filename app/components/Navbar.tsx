import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'


const Navbar = () => {
    return (
        <header 
            className="flex fixed items-center justify-between w-screen max-w-[1920px] px-32 py-[21px] max-h-[112px] border-b-2 border-black"
        >
            <nav className="container mx-auto flex w-full justify-between items-center">
                <div className="flex items-center">
                <Link href="/">
                    <Image src={LogoImage} alt="" className="max-w-[125px]" />
                </Link>
                <ul className="flex space-x-4">
                <li>
                    <Link href="/" className='w-[100px] px-[16px] py-[10px] text-center'>Home</Link>
                </li>
                <li>
                    <Link href="/about" className='w-[100px] px-[16px] py-[10px] text-center bg-gray-100'>Sobre</Link>
                </li>
                <li>
                    <Link href="/services" className='w-[100px] px-[16px] py-[10px] text-center'>Serviços</Link>
                </li>
                <li>
                    <Link href="/contact" className='w-[100px] px-[16px] py-[10px] text-center'>Contato</Link>
                </li>
                </ul>
                </div>
                <a className="w-[216px] px-[16px] py-[10px] text-center bg-white text-[#8E1730] ">Entre em contato</a>
            </nav>
        </header>
    )
}

export default Navbar