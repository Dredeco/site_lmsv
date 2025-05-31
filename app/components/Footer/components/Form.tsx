'use client';

import React from 'react';
import TextInput from '../../TextInput';
import Button from '../../Button';
import { useForm } from 'react-hook-form';

type FormData = {
	name: string;
	subject: string;
	phone: string;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm<FormData>({
		defaultValues: {
			name: '',
			subject: '',
			phone: '',
		},
	});

	const onSubmit = (data: FormData) => {
		console.log('Dados enviados: ', data);
		// Aqui você pode enviar os dados para o servidor ou qualquer outra lógica
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-white min-h-[510px] max-w-[392px] w-full flex flex-col justify-between gap-6 px-9 py-12 relative">
			<div className="w-full flex flex-col gap-6">
				<span className="text-[2.8rem]">
					Deixe seu contato e falamos com você!
				</span>

				<div className="w-full flex flex-col gap-4">
					<TextInput
						label="Nome"
						placeholder="Seu nome aqui"
						value={watch('name')}
						{...register('name', { required: true })}
						onChange={val => setValue('name', val)}
					/>
					{errors.name && (
						<span className="text-red-500">Nome é obrigatório</span>
					)}
					<TextInput
						label="Assunto"
						placeholder="Escreva aqui"
						value={watch('subject')}
						{...register('subject', { required: true })}
						onChange={val => setValue('subject', val)}
					/>
					{errors.subject && (
						<span className="text-red-500">Assunto é obrigatório</span>
					)}
					<TextInput
						label="Telefone"
						placeholder="(00) 0 0000-0000"
						value={watch('phone')}
						{...register('phone', { required: true })}
						onChange={val => setValue('phone', val)}
					/>
					{errors.phone && (
						<span className="text-red-500">Telefone é obrigatório</span>
					)}
				</div>
			</div>

			<Button
				variant="default"
				text="Enviar"
				className="w-full py-4 h-fit text-[15px]"
				type="submit"
			/>
		</form>
	);
};

export default Form;
