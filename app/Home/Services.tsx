import React, { useState } from 'react';
import Button from '../components/Button';
import RightArrowButton from '../components/RightArrowButton';
import LeftArrowButton from '../components/LeftArrowButton';
import Container from '../components/Container';
import Image from 'next/image';
import Link from 'next/link';

import BgImage1 from '@/public/image-model-1.png';
import BgImage2 from '@/public/image-model-2.png';
import BgImage3 from '@/public/image-model-3.png';
import especiality1 from '@/public/servicos/box1.png';
import especiality2 from '@/public/servicos/box2.png';
import especiality3 from '@/public/servicos/box3.png';
import especiality4 from '@/public/servicos/box4.png';
import especiality5 from '@/public/servicos/box5.png';
import especiality6 from '@/public/servicos/box6.png';

const Services = () => {
	const especialities = [
		{
			name: 'Direito Criminal<br /> Empresarial',
			text: 'Atuação estratégica no contencioso penal e consultivo. Expertise em crimes tributários, crimes contra a ordem econômica, crimes eleitorais, contra a honra e Tribunal do Júri. Defesa técnica em inquéritos, ações penais...',
			image: BgImage1,
		},
		{
			name: 'Direito<br /> Tributário',
			text: '<b>Consultivo:</b> Planejamento tributário, regimes especiais, consultoria estratégica e compliance fiscal.<br /> <b>Contencioso:</b> Atuação administrativa e judicial, inclusive nos Tribunais Superiores...',
			image: BgImage2,
		},
		{
			name: 'Direito Societário<br /> e Empresarial',
			text: '<b>M&A:</b> Estruturação e condução de operações de fusão, aquisição, cisão e reestruturação societária. <br /> <b>Consultivo Societário:</b> Atos constitutivos, reuniões societárias, planejamento e governança corporativa...',
			image: BgImage3,
		},
		{
			name: 'Direito Civil<br /> e Processual',
			text: '<b>Contratos:</b> Elaboração e revisão de instrumentos civis e comerciais.<br /> <b>Imobiliário:</b> Assessoria em operações imobiliárias, financiamento, incorporações, loteamentos e auditoria jurídica. Consumidor: Consultoria e defesa em relações de consumo e gestão de passivo consumerista.',
			image: especiality1,
		},
		{
			name: 'Direito de Família<br /> e Sucessório',
			text: '<b>Planejamento Patrimonial e Sucessório:</b> Estruturação de holdings e testamentos.<br /> <b>Atuação Judicial e Extrajudicial:</b> Adoção, inventário, divórcio, partilha, curatela e parentalidade.<br /> <b>Mediação Familiar:</b> Soluções consensuais com sensibilidade e técnica.',
			image: especiality2,
		},
		{
			name: 'Direito<br /> Trabalhista',
			text: '<b>Contencioso:</b> Defesa em ações individuais e coletivas, estratégias preventivas e gestão de risco.<br /> <b>Consultivo:</b> Suporte ao RH, contratos, compliance trabalhista e terceirização.',
			image: especiality3,
		},
		{
			name: 'Direito<br /> Administrativo',
			text: 'Atuação em licitações, contratos administrativos, responsabilidade de agentes públicos, processos administrativos e concessões.',
			image: especiality4,
		},
		{
			name: 'Direito Digital<br /> e Propriedade Intelectual',
			text: '<b>Consultivo:</b> Adequação à LGPD, políticas de privacidade, contratos tecnológicos e compliance digital.<br /> <b>Contencioso:</b> Disputas sobre marcas, registros, remoção de conteúdo e violação de direitos autorais.',
			image: especiality5,
		},
		{
			name: 'Direito<br /> Imobiliário',
			text: 'Oferecemos suporte completo em transações imobiliárias, estruturação de empreendimentos, contratos de compra e venda, locações, incorporações e auditorias jurídicas. Atuamos desde a análise jurídica de riscos até a execução de estratégias eficazes de viabilização de negócios no setor imobiliário.',
			image: especiality6,
		},
	];

	const [startIndex, setStartIndex] = useState(0);
	const cardsToShow = 3;
	const canGoLeft = startIndex > 0;
	const canGoRight = startIndex + cardsToShow < especialities.length;

	const handlePrev = () => {
		if (canGoLeft) setStartIndex(startIndex - 1);
	};

	const handleNext = () => {
		if (canGoRight) setStartIndex(startIndex + 1);
	};

	return (
		<div className="relative w-full h-auto">
			<Container className="text-white bg-[#8E1730] py-40">
				<div className="flex items-center gap-[28px] mb-[34px] lg:mb-[51px]">
					<div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
					<span className="text-[1.2rem] lg:text-[1.8rem] tracking-[-0.54px] font-normal">
						Nossos Serviços
					</span>
				</div>

				<div className="flex flex-wrap flex-row justify-between w-full gap-5">
					<span className="text-[2.4rem] lg:text-[4.2rem] font-light -[133%] tracking-[-1.26px]">
						Conheça nossas áreas <br />
						leading de atuação, formadas por <br />
						advogados especializados.
					</span>

					<div className="py-4 flex flex-col gap-[26px] lg:max-w-[600px]">
						<p className="text-[1.2rem] lg:text-[1.8rem] tracking-[-0.36px] leading-[160%] font-light">
							O escritório Leão, Moreno, Scisinio e Vianna Advogados oferece uma
							advocacia full service voltada ao setor corporativo, com atuação
							integrada nas seguintes áreas:
						</p>

						<a href="/servicos">
							<Button variant="alternative" text="Ver mais" />
						</a>
					</div>
				</div>
				{/* CARROSSEL */}
				<div className="w-full mt-[56px]">
					<div className="w-full flex gap-4 justify-end">
						<button
							onClick={handlePrev}
							disabled={!canGoLeft}
							aria-label="Anterior">
							<LeftArrowButton />
						</button>
						<button
							onClick={handleNext}
							disabled={!canGoRight}
							aria-label="Próximo">
							<RightArrowButton />
						</button>
					</div>
					<div className="flex w-full justify-between flex-wrap gap-4 mt-5 transition-all">
						{especialities
							.slice(startIndex, startIndex + cardsToShow)
							.map((item, index) => (
								<div
									key={item.name}
									className={`carousel-item w-full max-w-[447.33px] h-[434px] 
									lg:flex-1 flex flex-col relative z-10 bg-black p-9 gap-[145px]`}>
									<h3
										className="text-[24px] font-light leading-[26.03px] mt-9"
										dangerouslySetInnerHTML={{ __html: item.name }}
									/>
									<div className="flex flex-col gap-10 text-[1.4rem]">
										<span
											className="font-light text-[14px] leading-[160%] tracking-[-0.36px] carousel-description"
											dangerouslySetInnerHTML={{ __html: item.text }}></span>
										<Link className="font-medium text-[15px]" href="/servicos">
											Veja mais
										</Link>
									</div>
									<Image
										src={item.image}
										alt=""
										className="absolute top-0 left-0 -z-10 opacity-25"
									/>
								</div>
							))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Services;
