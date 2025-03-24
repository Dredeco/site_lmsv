import React from 'react'
import { Hero } from './components/Hero'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Escecialities from './components/Escecialities'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div>
            <Hero />
            <Service1 />
            <Service2 />
            <Escecialities />
            <Footer />
        </div>
    )
}

export default page