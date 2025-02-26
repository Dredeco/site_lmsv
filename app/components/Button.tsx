import React from 'react';

const Button = ({ variant = 'default', text = '' }) => {
    const styles: any = {
        default: {
            backgroundColor: '#8E1730',
            color: 'white',
        },
        alternative: {
            backgroundColor: 'white',
            color: '#8E1730',
        },
        link: {
            backgroundColor: 'transparent',
            color: '#8E1730',
            textDecoration: 'underline', // Adiciona um sublinhado para o estilo de link
        },
    };

    const currentStyle = styles[variant] || styles.default;

    return (
        <a
            className="w-[216px] px-[16px] py-[10px] text-center"
            style={{
                backgroundColor: currentStyle.backgroundColor,
                color: currentStyle.color,
            }}
        >
            {text}
        </a>
    );
};

export default Button;