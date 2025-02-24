import Image from "next/image";
import LogoImage from "@/public/logo.svg"
import BackgroundImage from '@/public/Background.png'

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full">
      <main className="flex min-h-screen min-w-full max-w-[1920px] flex-col px-[272px]">
        {/* NAVBAR */}
        <header 
          className="flex items-center justify-between w-full py-[21px] max-h-[112px] border-b-2 border-black bg-transparent"
        >
          <div className="flex items-center gap-[106px]">
          <a>
            <Image src={LogoImage} alt="" className="max-w-[125px]" />
          </a>
          <ul className="flex gap-[16px]">
            <li className="w-[100px] px-[16px] py-[10px] text-center bg-gray-100">Home</li>
            <li className="w-[100px] px-[16px] py-[10px] text-center">Sobre</li>
            <li className="w-[100px] px-[16px] py-[10px] text-center">Serviços</li>
            <li className="w-[100px] px-[16px] py-[10px] text-center">Contato</li>
          </ul>
          </div>
          <a className="w-[216px] px-[16px] py-[10px] text-center bg-white text-[#8E1730] ">Entre em contato</a>
        </header>

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
            <a className="w-[216px] px-[16px] py-[10px] text-center bg-[#8E1730] text-white">
              Entre em contato
            </a>
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
