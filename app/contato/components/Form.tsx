'use client';
import Container from '@/app/components/Container';
import Image from 'next/image';
import React from 'react';
import FormImage from '@/public/contato/form-image.png';
import Button from '@/app/components/Button';
import { useForm } from 'react-hook-form';

type FormData = {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		},
	});

	function maskPhone(value: string) {
		// Remove tudo que não for número
		value = value.replace(/\D/g, '');
		// Aplica a máscara (00) 00000-0000
		value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
		value = value.replace(/(\d{5})(\d)/, '$1-$2');
		value = value.slice(0, 15); // Limita ao tamanho máximo
		return value;
	}

	const onSubmit = (data: FormData) => {
		// Aqui você pode enviar os dados para o servidor
		console.log('Dados enviados:', data);
		reset();
	};

	return (
		<Container className="h-auto">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-wrap">
					<Image src={FormImage} alt="" className="w-auto h-auto flex-1" />
					<div className="w-full flex flex-col flex-1 bg-[#fafafa] p-10 gap-6">
						<div className="flex flex-wrap gap-[24px]">
							<div className="flex flex-1 flex-col gap-[11px]">
								<label className="text-[1.8rem]">Seu nome</label>
								<input
									type="text"
									placeholder="Entre com seu nome"
									className={`text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] ${
										errors.name ? 'border-red-500' : ''
									}`}
									{...register('name', { required: true })}
								/>
								{errors.name && (
									<span className="text-red-500">Nome é obrigatório</span>
								)}
							</div>

							<div className="flex flex-1 flex-col gap-[11px]">
								<label className="text-[1.8rem]">E-mail</label>
								<input
									type="text"
									placeholder="exemplo@gmail.com"
									className={`text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] ${
										errors.email ? 'border-red-500' : ''
									}`}
									{...register('email', {
										required: true,
										pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
									})}
								/>
								{errors.email && (
									<span className="text-red-500">
										{errors.email.type === 'required'
											? 'E-mail é obrigatório'
											: 'E-mail inválido'}
									</span>
								)}
							</div>
						</div>

						<div className="flex flex-wrap gap-[24px]">
							<div className="flex flex-1 flex-col gap-[11px]">
								<label className="text-[1.8rem]">Telefone</label>
								<input
									type="text"
									placeholder="(21) 9999-9999"
									value={watch('phone')}
									className={`text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] ${
										errors.phone ? 'border-red-500' : ''
									}`}
									{...register('phone', { required: true })}
									onChange={e => {
										const maskedValue = maskPhone(e.target.value);
										setValue('phone', maskedValue);
									}}
								/>
								{errors.phone && (
									<span className="text-red-500">Telefone é obrigatório</span>
								)}
							</div>

							<div className="flex flex-1 flex-col gap-[11px]">
								<label className="text-[1.8rem]">Assunto</label>
								<input
									type="text"
									placeholder="Como podemos ajudar?"
									className={`text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] ${
										errors.subject ? 'border-red-500' : ''
									}`}
									{...register('subject', { required: true })}
								/>
								{errors.subject && (
									<span className="text-red-500">Assunto é obrigatório</span>
								)}
							</div>
						</div>

						<div className="flex flex-1 flex-col gap-[11px]">
							<label className="text-[1.8rem]">Mensagem</label>
							<textarea
								placeholder="Escreva sua mensagem aqui..."
								className={`text-[1.6rem] py-3 px-5 focus:outline-none border min-w-[292px] min-h-[220px] lg:min-h-[176px] resize-none ${
									errors.message ? 'border-red-500' : ''
								}`}
								{...register('message', { required: true })}
							/>
							{errors.message && (
								<span className="text-red-500">Mensagem é obrigatória</span>
							)}
						</div>
						<div className="w-full flex justify-end relative mt-[42px]">
							<Button
								variant="default"
								text="Entre em contato"
								className="w-full lg:w-[212px] py-4 h-fit text-[15px]"
								type="submit"
							/>
						</div>
					</div>
				</div>
			</form>
		</Container>
	);
};

export default Form;
