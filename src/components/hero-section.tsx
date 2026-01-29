import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#1b3659] pb-20 lg:pb-28 mt-12">
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full opacity-10">
          <img
            src="/stroke_quadrado.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative px-6 lg:px-8 mx-auto max-w-7xl pt-12">
        {/* Mobile Layout: Stacked */}
        <div className="lg:hidden space-y-8">
          {/* Heading */}
          <h1 className="text-4xl font-light leading-tight tracking-tight text-white">
            Pronto para resolver sua questão jurídica?
          </h1>

          {/* Form */}
          <ContactForm />

          {/* Image - Full width */}
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taize-hero-caOIh2FI6Jb6h8AqBZfW2PRrvF1Vlu.jpg"
              alt="Dra. Taize Rocha - Consultora Jurídica"
              className="h-full w-full object-cover object-top grayscale"
              loading="lazy"
            />
          </div>
        </div>

        {/* Desktop Layout: 2 Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Image */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taize-hero-caOIh2FI6Jb6h8AqBZfW2PRrvF1Vlu.jpg"
              alt="Dra. Taize Rocha - Consultora Jurídica"
              className="h-full w-full object-cover object-top grayscale"
              loading="lazy"
            />
          </div>

          {/* Right: Heading and Form */}
          <div className="space-y-8">
            <h1 className="text-5xl font-light leading-tight tracking-tight text-white">
              Pronto para resolver sua questão jurídica?
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
