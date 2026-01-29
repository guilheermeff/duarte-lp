import Image from "next/image";
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
            <Image
              src="/img1-hero.png"
              alt="Consultoria jurídica"
              width={600}
              height={400}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout: 2 Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Image */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/img1-hero.png"
              alt="Consultoria jurídica"
              width={500}
              height={500}
              sizes="(max-width: 1280px) 50vw, 40vw"
              className="h-full w-full object-cover"
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
