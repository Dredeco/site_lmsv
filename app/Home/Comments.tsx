import React from 'react'
import LeftArrowButton from '../components/LeftArrowButton'
import RightArrowButton from '../components/RightArrowButton'
import Container from '../components/Container'

const Comments = () => {
    const comments = [
        {name: 'Client Name', company: 'Business Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'},
        {name: 'Marcos', company: 'Indra', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'},
        {name: 'Laura', company: 'Indra', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'}
    ]

    return (
        <Container className="bg-neutral-50">
            <div className="flex items-center gap-7">
                <div className="w-6 h-6 bg-[#9C1C37]"></div><span className='text-[#8e1730]'>Opiniões reais</span>
            </div>

            <div className="pt-10 flex flex-wrap flex-row gap-[94px] py-[10px] relative">
                <span className="text-[41px] font-light flex-1 leading-[50.4px]">
                    Tudo que nossos clientes <br />
                    pensam sobre nós.
                </span>

                <div className='flex gap-4 absolute right-0 bottom-0'>
                    <LeftArrowButton />
                    <RightArrowButton />
                </div>
            </div>

            <div className='flex flex-wrap gap-4 mt-10'>
                {comments.map((comment: any) => {
                    return (
                        <div key={comment.name} className="w-[448px] h-[228.78px] p-6 bg-white inline-flex flex-col justify-start items-center gap-8">
                            <div className="h-[124.78px] flex flex-col justify-start items-end gap-[38px]">
                                <div className="h-[116px] flex flex-col justify-start items-center gap-[37px]">
                                    <p className="relative text-center justify-center text-[#222222] font-normal font-['Inter'] leading-[28.80px]">
                                        {comment.message}
                                    </p>
                                </div>
                            </div>

                            <div className="relative text-center justify-center pt-[3px] w-full">
                            <div className="h-px absolute top-0 w-full bg-[#eceeed]" />
                                <span className="text-[#222222] font-medium font-['Inter'] leading-normal">
                                    {comment.name}
                                </span>
                                <span className="text-[#8e1730] font-medium font-['Inter'] leading-normal">
                                    , {comment.company}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Comments