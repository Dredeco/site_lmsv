'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import LogoImage from '@/public/logo.svg';
import Link from 'next/link';
import Container from '../Container';
import MenuIcon from '@/public/menu.svg';
import { usePathname } from 'next/navigation';

const NavbarMobile = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setisOpen] = useState(false);
	const pathname = usePathname();

	const handleScroll = useCallback(() => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, []);

	const handleOpenMenu = () => {
		setisOpen(!isOpen);
	};

	useEffect(() => {
		// Evita problemas em SSR
		if (typeof window === 'undefined') return;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const isActive = (route: string) => {
		if (route === '/') return pathname === '/';
		return pathname.startsWith(route);
	};

	return (
		<Container
			className={`flex lg:hidden fixed w-full text-[1.6rem] items-center !py-0 justify-between min-h-[115px] max-h-[115px] z-30 transition-all duration-100 ${
				isScrolled || isActive('/contato')
					? 'bg-white shadow-lg'
					: 'bg-transparent'
			}`}>
			<nav
				className={`w-full flex mx-auto max-w-[1376px] font-medium justify-between items-center`}>
				<div className="flex items-center w-full">
					<Link href="/">
						<Image src={LogoImage} alt="Logo" className="max-w-[125px]" />
					</Link>

					<div
						className={`absolute flex flex-col bg-white w-full left-0 text-[#757575] ${
							isOpen ? 'top-[112px]' : '-top-[500px]'
						}`}>
						<Link
							href="/"
							onClick={() => {
								setisOpen(false);
							}}
							className={`w-auto px-[27.5px] py-[20px] text-center ${
								isActive('/') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Home
						</Link>
						<Link
							href="/sobre"
							onClick={() => {
								setisOpen(false);
							}}
							className={`w-auto px-[27.5px] py-[20px] text-center ${
								isActive('/sobre') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Sobre
						</Link>
						<Link
							href="/servicos"
							onClick={() => {
								setisOpen(false);
							}}
							className={`w-auto px-[27.5px] py-[20px] text-center ${
								isActive('/servicos') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Serviços
						</Link>
						<Link
							href="/contato"
							onClick={() => {
								setisOpen(false);
							}}
							className={`w-auto px-[27.5px] py-[20px] text-center ${
								isActive('/contato') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Contato
						</Link>
					</div>
				</div>
				<div className="cursor-pointer" onClick={handleOpenMenu}>
					<Image src={MenuIcon} alt="" />
				</div>
			</nav>
		</Container>
	);
};

export default NavbarMobile;
