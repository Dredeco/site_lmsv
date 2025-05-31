'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import LogoImage from '@/public/logo.svg';
import Link from 'next/link';
import Button from '../Button';
import Container from '../Container';
import { usePathname } from 'next/navigation';

const NavbarDesktop = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const handleScroll = useCallback(() => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, []);

	useEffect(() => {
		// Evita problemas em SSR
		if (typeof window === 'undefined') return;
		window.addEventListener('scroll', handleScroll);
		handleScroll();
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
			className={`hidden lg:flex fixed w-full h-fit text-[1.6rem] 
                items-center !py-0 justify-between min-h-[112px] max-h-[112px] 
                z-30 transition-all duration-100 ${
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
					<div className="hidden md:flex space-x-4 ml-[107px] text-[#757575]">
						<Link
							href="/"
							className={`w-auto px-[27.5px] py-[10px] text-center hover:font-semibold ${
								isActive('/') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Home
						</Link>
						<Link
							href="/sobre"
							className={`w-auto px-[27.5px] py-[10px] text-center hover:font-semibold ${
								isActive('/sobre') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Sobre
						</Link>
						<Link
							href="/servicos"
							className={`w-auto px-[27.5px] py-[10px] text-center hover:font-semibold ${
								isActive('/servicos') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Serviços
						</Link>
						<Link
							href="/contato"
							className={`w-auto px-[27.5px] py-[10px] text-center hover:font-semibold ${
								isActive('/contato') ? 'text-[#222] bg-[#fafafa]' : ''
							}`}>
							Contato
						</Link>
					</div>
				</div>
				<div className="hidden md:block">
					<Link href="/contato">
						<Button
							variant={`${
								!isScrolled && isActive('/') ? 'alternative' : 'default'
							}`}
							text="Entre em contato"
						/>
					</Link>
				</div>
			</nav>
		</Container>
	);
};

export default NavbarDesktop;
