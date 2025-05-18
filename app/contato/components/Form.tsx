'use client'
import Container from '@/app/components/Container'
import TextInput from '@/app/components/TextInput';
import Image from 'next/image'
import React from 'react'
import FormImage from '@/public/contato/form-image.png'
import Button from '@/app/components/Button';

const Form = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');

    return (
        <Container className="h-auto">
            <div className='flex flex-wrap'>
                <Image
                    src={FormImage}
                    alt=''
                    className='w-auto h-auto flex-1'
                />
                <div className='w-full flex flex-col flex-1 bg-[#fafafa] p-10 gap-6'>
                    <div className='flex flex-wrap gap-[24px]'>
                        <div className='flex flex-1 flex-col gap-[11px]'>
                            <label className='text-[1.8rem]'>Seu nome</label>
                            <input 
                                type='text'
                                placeholder='Entre com seu nome'
                                className='text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px]'
                            />
                        </div>

                        <div className='flex flex-1 flex-col gap-[11px]'>
                            <label className='text-[1.8rem]'>E-mail</label>
                            <input 
                                type='text'
                                placeholder='exemplo@gmail.com'
                                className='text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px]'
                            />
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-[24px]'>
                        <div className='flex flex-1 flex-col gap-[11px]'>
                            <label className='text-[1.8rem]'>Telefone</label>
                            <input 
                                type='text'
                                placeholder='(21) 9999-9999'
                                className='text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px]'
                            />
                        </div>

                        <div className='flex flex-1 flex-col gap-[11px]'>
                            <label className='text-[1.8rem]'>Assunto</label>
                            <input 
                                type='text'
                                placeholder='Como podemos ajudar?'
                                className='text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px]'
                            />
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col gap-[11px]'>
                        <label className='text-[1.8rem]'>Mensagem</label>
                        <textarea 
                            placeholder='Escreva sua mensagem aqui...'
                            className='text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] min-h-[220px] lg:min-h-[176px] resize-none'
                        />
                    </div>
                    <div className='w-full flex justify-end relative mt-[42px]'>
                        <Button variant='default' text='Entre em contato' className='w-full lg:w-[212px] py-4 h-fit text-[15px]' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Form