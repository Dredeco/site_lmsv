import React from 'react';

const Button = ({ variant = 'default', text = '' }) => {
    const styles: any = {
        default: {
            backgroundColor: '#8E1730',
            color: 'white',
            hover: {
                backgroundColor: '#74041c'
            }
        },
        alternative: {
            backgroundColor: 'white',
            color: '#8E1730',
            hover: {
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white'
            }
        },
        link: {
            backgroundColor: 'transparent',
            color: '#8E1730',
        },
    };

    const currentStyle = styles[variant] || styles.default;

    return (
        <a
            className="w-[216px] px-[16px] py-[10px] text-center block"
            href='#'
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