import React from 'react'

const Container = ({ children, className }: any) => {
    return (
        <section className={`h-fit flex flex-col w-full max-w-[1980px] px-[14dvw] py-20 relative ${className}`}>
            {children}
        </section>
    );
};

export default Container