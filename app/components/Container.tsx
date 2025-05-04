import React from 'react'

const Container = ({ children, className }: any) => {
    return (
        <section className={`container min-w-full h-auto py-[80px] px-[24px] text-[#222] ${className}`}>
            <div className='w-full max-w-[1376px] mx-auto justify-center h-full'>
                {children}
            </div>
        </section>
    );
};

export default Container