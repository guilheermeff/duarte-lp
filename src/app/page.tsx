import CTA from "@/components/cta";
import FAQsThree from "@/components/faqt";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExpertiseSection from "@/components/expertise-section";
import DifferentialsSection from "@/components/differentials-section";
import ContactCTASection from "@/components/contact-cta-section";
import { ContactButtonGroup } from "@/components/ui/contact-button-group";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DUARTE & IANNUZZI ADVOCACIA",
  description: "Advocacia estratégica para soluções inteligentes e eficazes.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="bg-[#1b3659] relative">
        {/* Background image - full width */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full opacity-10">
            <img
              src="/stroke_quadrado.png"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <header className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="flex items-center justify-between py-6">
            <Image src="/logo-black.png" alt="logo" width={190} height={190} />
            <ContactButtonGroup
              instagramUrl="https://www.instagram.com/di.advocacia/"
              whatsappUrl="https://wa.me/5592996037337"
              emailUrl="mailto:duarteadvocacia@diadv.com"
              address="Rua Valério Botelho de Andrade, nº 190, Sala 11, São Francisco, Manaus/AM"
              coordinates={{ lat: -3.1096881, lng: -60.0112901 }}
            />
          </div>
        </header>

        <HeroSection />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12">
        <AboutSection />
        <ExpertiseSection />
        <DifferentialsSection />
        <FAQsThree />
      </main>

      <ContactCTASection />

      <CTA />

      <footer>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="flex  items-center justify-between gap-6">
            <Image src="/logo-color.png" alt="logo" width={190} height={190} />

            <div className="flex flex-col gap-4">
              <ContactButtonGroup
                instagramUrl="https://www.instagram.com/di.advocacia/"
                whatsappUrl="https://wa.me/5592996037337"
                emailUrl="mailto:duarteadvocacia@diadv.com"
                address="Rua Valério Botelho de Andrade, nº 190, Sala 11, São Francisco, Manaus/AM"
                coordinates={{ lat: -3.1096881, lng: -60.0112901 }}
              />

              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
