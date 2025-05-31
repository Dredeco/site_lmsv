import Hero from './Home/Hero';
import About from './Home/About';
import Services from './Home/Services';
import CTA from './Home/CTA';
import Team from './Home/Team';
import Footer from './components/Footer';

export default function Home() {
	return (
		<div className="flex min-h-screen w-full justify-center relative">
			<main className="overflow-x-hidden w-full">
				{/* -------------- HOME ------------------- */}
				<Hero />

				{/* ---------- SOBRE ------------ */}
				<About />

				{/* ------------ SERVIÇOS -------------- */}
				<Services />

				{/* ------------ CTA ----------------- */}
				<CTA />

				{/* ------------ TIME ----------------- */}
				<Team />

				{/* FOOTER */}
				<Footer />
			</main>
		</div>
	);
}
