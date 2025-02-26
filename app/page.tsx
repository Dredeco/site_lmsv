import Image from "next/image";
import BackgroundImage from '@/public/Background.png'
import Navbar from "./components/Navbar";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full">
        <Navbar />
      <main className="flex min-h-screen min-w-full max-w-[1920px] flex-col px-[272px]">

        {/* HOME */}
        <section className="h-[776px]">
          <Image 
            className="absolute top-0 right-0 -z-10 max-h-[90vh] w-auto"
            src={BackgroundImage}
            alt=""
          />

          <div className="w-[680px] flex flex-col h-full justify-center">
            <h1 className="text-[52px] leading-[62.4px] mb-[24px]">
              Soluções Jurídicas e Estratégicas com <br />Tradição e Excelência
            </h1>
            <span className="w-[537px] text-[18px] font-normal leading-[28.8px] mb-[40px]">
              Com mais de 30 anos de experiência, unimos conhecimento técnico e visão multidisciplinar para oferecer assessoria jurídica personalizada em diversas áreas do Direito.
            </span>
            <Button variant="default" text="Entre em contato" />
          </div>
        </section>

        {/* SOBRE */}
        <section></section>

        {/* SERVIÇOS */}
        <section></section>

        {/* TIME */}
        <section></section>

        {/* DEPOIMENTOS */}
        <section></section>

        {/* LOCALIZAÇÃO */}
        <section></section>

        {/* FOOTER */}
        <section></section>
      </main>
    </div>
  );
}
