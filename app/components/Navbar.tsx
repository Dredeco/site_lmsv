import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/logo.svg"


const Navbar = () => {
    return (
        <header 
            className="flex items-center justify-between w-full py-[21px] max-h-[112px] border-b-2 border-black bg-transparent"
        >
            <div className="flex items-center gap-[106px]">
                <a>
                    <Image src={LogoImage} alt="" className="max-w-[125px]" />
                </a>
                <ul className="flex gap-[16px]">
                    <li className="w-[100px] px-[16px] py-[10px] text-center bg-gray-100">Home</li>
                    <li className="w-[100px] px-[16px] py-[10px] text-center">Sobre</li>
                    <li className="w-[100px] px-[16px] py-[10px] text-center">Serviços</li>
                    <li className="w-[100px] px-[16px] py-[10px] text-center">Contato</li>
                </ul>
            </div>
            <a className="w-[216px] px-[16px] py-[10px] text-center bg-white text-[#8E1730] ">Entre em contato</a>
        </header>
    )
}

export default Navbar