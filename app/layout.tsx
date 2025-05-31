import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarDesktop from './components/Navbar/NavbarDesktop';
import NavbarMobile from './components/Navbar/NavbarMobile';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'LMSV - Advogados',
	description: 'Leão, Moreno, Scisinio e Vianna Advogados',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" className={inter.variable}>
			<body className={`${inter.className} antialiased`}>
				<NavbarDesktop />
				<NavbarMobile />
				{children}
			</body>
		</html>
	);
}
