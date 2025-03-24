import React from 'react'
import Container from './../Container'
import Address from './components/Address'
import Form from './components/Form'
import Links from './components/Links'


const Footer = () => {

    return (
        <>
        <Address />
            {/* <----------------- FOMULARIO ------------------> */}
        <Container className="bg-[#8E1730] w-full">
            <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-14'>
                <Form />
                <Links />
            </div>
        </Container>
        </>
    )
}

export default Footer