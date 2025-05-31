import React, { ButtonHTMLAttributes } from 'react';
import LeftArrowIcon from '@/public/left_arrow.svg';
import Image from 'next/image';

const LeftArrowButton: React.FC = () => {
	return (
		<div
			className={`min-w-[48px] cursor-pointer min-h-[48px] bg-white flex items-center justify-center hover:bg-[#ECEEED] active:bg-[#ECEEED] focus:bg-[#ECEEED] target:bg-[#ECEEED]`}>
			<Image src={LeftArrowIcon} alt="Back" />
		</div>
	);
};

export default LeftArrowButton;
