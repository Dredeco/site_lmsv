import Container from '@/app/components/Container'
import React from 'react'
import TeamImage from '@/public/perfil.png'
import Image from 'next/image'

const Team = () => {
    const team = [
        {name: 'Bernardo Leão', OAB: '165.196 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Débora Moreno', OAB: '138.260 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Pedro Vianna', OAB: '225.511 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Tales Scisinio', OAB: '132.565 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Bernardo Leão', OAB: '165.196 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Débora Moreno', OAB: '138.260 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Pedro Vianna', OAB: '225.511 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Tales Scisinio', OAB: '132.565 OAB', linkedin: 'https://br.linkedin.com/', image: TeamImage}
    ]

    return (
        <Container className="h-auto min-h-[446px] z-10">
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                    Especialistas jurídicos
                </span>
            </div>

            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>            
                <div className="w-full lg:max-w-[640px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                        Conheça nosso time de advogados especializados.
                    </span>
                </div>

                <div className="w-full lg:max-w-[640px]">
                    <p className="text-[1.4rem] lg:text-[1.8rem] mb-[38px] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                        Nossos profissionais além de experiência e especialização técnica possuem 
                        formação multidisciplinar de tradição humanista e acadêmica. Incentivamos 
                        nossos sócios e colaboradores a conhecerem o core business de nossos clientes. 
                        Possuímos atuação no segmento de concessão automotiva, indústria de base, 
                        infraestrutura, varejo de moda, indústria de moda, transportes rodoviários, 
                        construção civil, agronegócio, energias renováveis, fundos de 
                        investimentos, factorings, gestão pública, entre outros.
                    </p>
                </div>
            </div>

            <div className='w-full grid justify-center mt-[70px] grid-cols-[repeat(auto-fit,_minmax(272px,_344px))]'>
                {team.map((member, index): any => {
                    return (
                        <div key={index} className="w-full h-fit mb-[40px]">
                            <Image 
                                src={TeamImage}
                                alt={member.name}
                                className='bg-[#eceeed] mb-[35px]'
                            />
                            <span className="font-semibold text-[#8e1730] text-[2.4rem] uppercase">
                                {member.name}
                            </span> 
                            <br/>
                            <p className="mt-3 mb-2 font-light text-[2.4rem]">{member.OAB}</p>
                            <a href={member.linkedin}>
                                <div data-svg-wrapper className="relative -ml-1">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5583 11.4683C13.5579 12.1437 13.2892 12.7913 12.8112 13.2685C12.3333 13.7458 11.6854 14.0137 11.01  14.0133C10.3346 14.0128 9.687 13.7441 9.20972 13.2662C8.73244 12.7883 8.46455 12.1403 8.465 11.4649C8.46544 10.7895 8.73417 10.1419 9.21208 9.66465C9.68998 9.18737 10.3379 8.91948 11.0133 8.91992C11.6887 8.92036 12.3363 9.1891 12.8136 9.667C13.2909 10.1449 13.5588 10.7928 13.5583 11.4683ZM13.6333 15.8966H8.54166V31.8366H13.6333V15.8966ZM21.68 15.8966H16.6133V31.8366H21.63V23.4716C21.63 18.8116 27.7033 18.3783 27.7033 23.4716V31.8366H32.7317V21.7399C32.7317 13.8849 23.7433 14.1783 21.63 18.0349L21.68 15.8966Z" fill="#686E6D"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Team