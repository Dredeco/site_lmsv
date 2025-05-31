import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarDesktop from './components/Navbar/NavbarDesktop';
import NavbarMobile from './components/Navbar/NavbarMobile';

const fontInter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'LMSV - Advogados',
	description: 'Leão, Moreno, Scisinio e Vianna Advogados',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${fontInter.className} antialiased`}>
				<NavbarDesktop />
				<NavbarMobile />
				{children}
			</body>
		</html>
	);
}
