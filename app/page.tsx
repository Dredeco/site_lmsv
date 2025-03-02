import Image from "next/image";
import BackgroundImage from '@/public/Background.png'
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import EllipseImage from '@/public/Ellipse 2.png'

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full">
        <Navbar />
      <main className="flex min-h-screen min-w-full max-w-[1920px] flex-col px-[272px]">

        {/* -------------- HOME ------------------- */}
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

        {/* ---------- SOBRE ------------ */}
        <section className="flex flex-col h-[446px] py-[80px] relative">
          <div className="flex gap-7">
              <div className="w-6 h-6 bg-[#9C1C37]"></div><text>Sobre nós</text>
          </div>

          <div className="pt-10 flex gap-[94px] py-[10px]">
            <span className="text-[41px] font-light max-w-[679px] leading-[50.4px]">
              Somoso guiados por um propósito de prestar assessoria e consultoria jurídica personalizada e fiel aos nossos valores.
            </span>

            <div className="w-full py-4">
              <p className="font-[18px] pb-[26px]">
                Atuamos nos diversos segmentos do Direito, com destaque para o Direito Penal, Direito Constitucional e Administrativo, Direito Tributário, Direito da Internet e Propriedade Intelectual, Direito Civil e Processual, Direito Empresarial, Direito Trabalhista e Direito de Família e Sucessório.
              </p>

              <Button variant="default" text="Ver mais" />
            </div>
          </div>
          <Image 
            src={EllipseImage}
            alt="ellipse"
            className="absolute left-[-272px] bottom-[-280px]"
          />
        </section>

        {/* ------------ SERVIÇOS -------------- */}
        <section className="bg-[#8E1730] h-[988px] py-20 text-white">
        <div className="flex gap-7">
          <div className="w-6 h-6 bg-[#9C1C37]"></div><text>Nossos Serviços</text>
        </div>
        </section>

        {/* ------------ TIME ----------------- */}
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