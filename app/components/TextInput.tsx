import React from 'react';

interface InputProps {
	label: string;
	placeholder: string;
	type?: string;
	value: string;
	onChange: (e: string) => void;
}

function maskPhone(value: string) {
	// Remove tudo que não for número
	value = value.replace(/\D/g, '');
	// Aplica a máscara (00) 00000-0000
	value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
	value = value.replace(/(\d{5})(\d)/, '$1-$2');
	value = value.slice(0, 15); // Limita ao tamanho máximo
	return value;
}

const TextInput: React.FC<InputProps> = (
	{ label, placeholder, type = 'text', value, onChange },
	...props
) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let val = e.target.value;
		if (label.toLowerCase() === 'telefone') {
			val = maskPhone(val);
		}
		onChange(val);
	};

	return (
		<div className="border px-3 py-2">
			<label className="block uppercase opacity-40 text-gray-700 text-[10px] font-bold mb-1">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				className={`text-[rgba(117, 117, 117, 0.20)] text-[14px] focus:outline-none ${props}`}
			/>
		</div>
	);
};

export default TextInput;
