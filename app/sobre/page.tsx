import React from 'react'
import { Hero } from './components/Hero'
import History from './components/History'
import Banner from './components/Banner'
import Tecnology from './components/Tecnology'
import Team from './components/Team'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className="">
                <Hero />
                <History />
                <Banner />
                <Tecnology />
                <Team />
                <Footer />
        </div>
    )
}

export default page