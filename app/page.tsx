'use client'

import Image from "next/image";
import TeamImage from '@/public/perfil.png'
import Navbar from "./components/NavbarDesktop";
import Button from "./components/Button";
import EllipseImage from '@/public/Ellipse 2.png'
import Hero from "./Home/Hero";
import About from "./Home/About";
import Services from "./Home/Services";
import CTA from "./Home/CTA";
import { useState } from "react";
import Team from "./Home/Team";
import Comments from "./Home/Comments";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <div className="flex min-h-screen w-full justify-center relative">
      <main className="w-full">

        {/* -------------- HOME ------------------- */}
        <Hero />

        {/* ---------- SOBRE ------------ */}
        <About />

        {/* ------------ SERVIÇOS -------------- */}
        <Services />

        {/* ------------ CTA ----------------- */}
        <CTA />

        {/* ------------ TIME ----------------- */}
        <Team />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}