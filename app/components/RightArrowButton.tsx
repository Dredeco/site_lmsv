import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import RightArrowIcon from '@/public/rigth_arrow.svg';

const RightArrowButton: React.FC = () => {
	return (
		<div className="min-w-[48px] min-h-[48px] bg-white flex items-center justify-center active:bg-[#ECEEED]">
			<Image src={RightArrowIcon} alt="Back" />
		</div>
	);
};

export default RightArrowButton;
