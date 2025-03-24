'use client'

import React from 'react'
import TextInput from '../../TextInput'
import Button from '../../Button'

const Form = () => {
    const [name, setName] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const formatPhoneNumber = (value: string): string => {
        const digits = value.replace(/\D/g, ''); // Remove caracteres não numéricos
        const match = digits.match(/^(\d{2})(\d{5})(\d{4})$/);
        const match2 = digits.match(/^(\d{2})(\d{4})(\d{4})$/);
        
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        } else if (match2) {
            return `(${match2[1]}) ${match2[2]}-${match2[3]}`;
        }
        
        return value;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault(); // Evitar recarregamento da página
        const formData = {
            name,
            subject,
            phone,
        };
        console.log('Dados enviados: ', formData);
        // Aqui você pode enviar os dados para o servidor ou qualquer outra lógica
    };


    return (
        <div className="bg-white min-h-[510px] max-w-[392px] w-full flex flex-col justify-between gap-6 px-9 py-12 relative">
            <div className='w-full flex flex-col gap-6'>
                <span className='text-[2.8rem]'>
                    Deixe seu contato e
                    falamos com você!
                </span>

                <div className='w-full flex flex-col gap-4'>
                    <TextInput 
                        label='Nome' 
                        placeholder='Seu nome aqui'
                        value={name} 
                        onChange={(e) => setName(e)} 
                    />
                    <TextInput 
                        label='Assunto' 
                        placeholder='Escreva aqui' 
                        value={subject} 
                        onChange={(e) => setSubject(e)} 
                    />
                    <TextInput 
                        label='Telefone' 
                        placeholder='(00) 0 0000-0000' 
                        value={phone} 
                        onChange={(e) => {
                            setPhone(formatPhoneNumber(e))
                        }} 
                    />
                </div>
            </div>

            <Button variant='default' text='Enviar' className='w-full py-4 h-fit text-[15px]' onClick={handleSubmit} />
        </div>
    )
}

export default Form