import React from 'react'

interface InputProps {
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e:string) => void
}

const TextInput: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
    return (
        <div className="border px-3 py-2">
            <label className="block uppercase opacity-40 text-gray-700 text-[10px] font-bold mb-1">
                {label}
            </label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={e => onChange(e.target.value)}
                className="text-[rgba(117, 117, 117, 0.20)] text-[14px] focus:outline-none" 
            />
        </div>
    );
};

export default TextInput