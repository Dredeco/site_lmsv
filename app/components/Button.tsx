import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'alternative' | 'link';
	text?: string;
}

const styles: any = {
	default: {
		backgroundColor: '#8E1730',
		color: 'white',
		hover: {
			backgroundColor: '#74041c',
		},
	},
	alternative: {
		backgroundColor: 'white',
		color: '#8E1730',
		hover: {
			backgroundColor: 'transparent',
			color: 'white',
			border: '1px solid white',
		},
	},
	link: {
		backgroundColor: 'transparent',
		color: '#8E1730',
	},
};

const Button: React.FC<ButtonProps> = ({
	variant = 'default',
	text = '',
	onClick = undefined,
	...rest // Recebe todas as outras props
}: any) => {
	const [isHovered, setIsHovered] = useState(false);

	const currentStyle = styles[variant] || styles.default;

	return (
		<button
			type={rest.type || 'button'}
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
			aria-label={text}
			{...rest}>
			{text}
		</button>
	);
};

export default Button;
