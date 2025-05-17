import React from 'react'
import Container from '../../components/Container'

const History = () => {
    return (
        <Container className="h-auto min-h-[446px] bg-[#fafafa] z-10">
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">Sobre</span>
            </div>
            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-22'>            
                <div className="w-full lg:max-w-[640px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                        Nossa história
                    </span>
                </div>

                <div className="w-full lg:max-w-[676px]">
                    <p className="text-[1.4rem] lg:text-[1.8rem] mb-[38px] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                        Fundado por profissionais com sólida trajetória no Direito Empresarial, o escritório 
                        Leão, Moreno, Scisinio e Vianna Advogados nasceu da convergência entre 
                        tradição acadêmica, atuação prática de alto nível e o compromisso com uma 
                        advocacia centrada no cliente. Ao longo de mais de 20 anos, consolidamos nossa 
                        reputação por oferecer uma assessoria jurídica de excelência, pautada pela ética, 
                        agilidade e inovação. <br /> <br />
                        
                        Desde sua origem, o escritório adotou uma postura voltada ao aprofundamento 
                        técnico e à compreensão estratégica dos setores em que nossos clientes atuam. 
                        Atendemos empresas de diferentes portes e segmentos, como indústria de base, 
                        varejo, infraestrutura, energias renováveis, fundos de investimento, transportes, 
                        entre outros, sempre com foco em oferecer segurança jurídica, eficiência negocial 
                        e inteligência jurídica aplicada.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default History