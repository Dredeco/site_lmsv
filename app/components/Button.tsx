import React, { useState } from 'react';

const Button = ({ 
    variant = 'default', 
    text = '', 
    onClick = undefined, 
    ...rest // Recebe todas as outras props
}: any) => {
    const [isHovered, setIsHovered] = useState(false);

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
        <button
            className="w-full lg:w-[216px] px-[16px] py-[10px] text-[1.5rem] tracking-[-0.15px] text-center block"
            style={{
                backgroundColor: isHovered 
                    ? currentStyle.hover?.backgroundColor || currentStyle.backgroundColor 
                    : currentStyle.backgroundColor,
                color: isHovered 
                    ? currentStyle.hover?.color || currentStyle.color 
                    : currentStyle.color,
                border: isHovered ? currentStyle.hover?.border : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            {...rest} // Espalha as props recebidas
        >
            {text}
        </button>
    );
};

export default Button;