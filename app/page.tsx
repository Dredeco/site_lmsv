'use client'

import Image from "next/image";
import TeamImage from '@/public/perfil.png'
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import EllipseImage from '@/public/Ellipse 2.png'
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import CTA from "./components/Home/CTA";
import { useState } from "react";
import Team from "./components/Home/Team";
import Comments from "./components/Home/Comments";

export default function Home() {
  
  return (
    <div className="flex min-h-screen margin-[0 auto]">
        <Navbar />
      <main className="flex min-h-screen min-w-full flex-col max-w-[1920px] items-center">

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

        {/* DEPOIMENTOS */}
        <Comments />

        {/* LOCALIZAÇÃO */}
        <section></section>

        {/* FOOTER */}
        <section></section>
      </main>
    </div>
  );
}