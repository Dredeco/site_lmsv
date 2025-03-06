import React from 'react'
import LeftArrowButton from '../LeftArrowButton'
import RightArrowButton from '../RightArrowButton'

const Comments = () => {
    const comments = [
        {name: 'Client Name', company: 'Business Name', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'},
        {name: 'Marcos', company: 'Indra', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'},
        {name: 'Laura', company: 'Indra', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam non faucibus tellus. Nullam erat diam, tempor euornare vel, venenatis vitae turpis.'}
    ]

    return (
        <section className="h-[592px] flex flex-col w-full bg-neutral-50 overflow-hidden px-[272px] py-20">
            <div className="flex gap-7">
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

            <div>
                {comments.map((comment: any) => {
                    return (
                        <div key={comment.name}>
                            <p>{comment.message}</p>
                            <span>{comment.name}, {comment.company}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Comments