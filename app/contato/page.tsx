import React from 'react'
import Hero from './components/Hero'
import Footer from '../components/Footer'
import Contact from './components/Contact'
import Form from './components/Form'

const page = () => {
    return (
        <div>
            <Hero />
            <Contact />
            <Form />
            <Footer />
        </div>
    )
}

export default page