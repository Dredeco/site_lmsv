'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import TeamImage from '@/public/perfil.png'
import Button from '../components/Button'
import Container from '../components/Container'
import Link from 'next/link'
import ImagePedro from '@/public/pedro.png'
import ImageDebora from '@/public/debora.png'
import ImageTales from '@/public/tales.png'

const Team = () => {
    const team = [
        {name: 'Bernardo <br />Gomes Leão', OAB: 'OAB/RJ 165.196', linkedin: 'https://br.linkedin.com/', image: TeamImage},
        {name: 'Débora Claizoni Moreno de Melo', OAB: 'OAB/RJ 229.132', linkedin: 'https://www.linkedin.com/in/deboraclaizoni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', image: ImageDebora},
        {name: 'Pedro Ramon Silvestre Vianna', OAB: 'OAB/RJ 225.511', linkedin: 'https://www.linkedin.com/in/pedro-vianna-95347118b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', image: ImagePedro},
        {name: 'Tales <br />Donato Scisinio', OAB: 'OAB/RJ 132.565', linkedin: 'https://br.linkedin.com/', image: ImageTales}
    ]

    return (
        <Container className="">
            <div className="flex items-center gap-[8px] lg:gap-[28px]">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">
                    Especialistas jurídicos
                </span>
            </div>

            <div className="mt-[51px] flex">
                <h1 className="flex-1 w-full lg:max-w-[50%] font-light text-[2.4rem] lg:text-[4.2rem] leading-[120%] tracking-[-1.26px]">
                    Conheça nosso time <br />
                    de advogados especializados.
                </h1>
            <p className="flex-1 hidden">Nossos profissionais além de experiência e especialização técnica possuem formação multidisciplinar de tradição humanista e acadêmica. Incentivamos nossos sócios e colaboradores a conhecerem o core business de nossos clientes. Possuímos atuação no segmento de concessão automotiva, indústria de base, infraestrutura, varejo de moda, indústria de moda, transportes rodoviários, construção civil, agronegócio, energias renováveis, fundos de investimentos, factorings, gestão pública, entre outros.</p>
            </div>

            <div className="flex flex-col items-center w-full mt-[34px] lg:mt-[50px] h-fit">
            <div className='w-full grid justify-center grid-cols-[repeat(auto-fit,_minmax(272px,_344px))]'>
            {team.map((member, index) => (
                    <div key={index} className="w-full flex flex-col h-fit mb-[40px]">
                        <div className='relative mb-[35px] h-[402px] w-[332px]'>
                        <Image 
                            src={member.image}
                            alt={member.name}
                            fill
                            objectFit='cover'
                            objectPosition='top'
                        />
                        </div>

                        <div className='w-full flex flex-col gap-3 px-[10px]'>
                            <span 
                            className="w-[80%] font-semibold text-[#8e1730] text-[2.4rem] uppercase"
                            dangerouslySetInnerHTML={{__html: member.name}}
                            >
                            </span> 
                            <p className="font-light text-[2.4rem]">{member.OAB}</p>
                            <a href={member.linkedin}>
                                <div data-svg-wrapper className="relative -ml-1">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5583 11.4683C13.5579 12.1437 13.2892 12.7913 12.8112 13.2685C12.3333 13.7458 11.6854 14.0137 11.01  14.0133C10.3346 14.0128 9.687 13.7441 9.20972 13.2662C8.73244 12.7883 8.46455 12.1403 8.465 11.4649C8.46544 10.7895 8.73417 10.1419 9.21208 9.66465C9.68998 9.18737 10.3379 8.91948 11.0133 8.91992C11.6887 8.92036 12.3363 9.1891 12.8136 9.667C13.2909 10.1449 13.5588 10.7928 13.5583 11.4683ZM13.6333 15.8966H8.54166V31.8366H13.6333V15.8966ZM21.68 15.8966H16.6133V31.8366H21.63V23.4716C21.63 18.8116 27.7033 18.3783 27.7033 23.4716V31.8366H32.7317V21.7399C32.7317 13.8849 23.7433 14.1783 21.63 18.0349L21.68 15.8966Z" fill="#686E6D"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    ))}
            </div>
            <Link href="/sobre" className='w-full flex justify-center'>
                <Button variant="default" text={"Veja Mais"} />
            </Link>
            </div>

        </Container>
    )
}

export default Team