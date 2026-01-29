"use client";

import { ContactForm } from "@/components/contact-form";

export const ContactCTASection = () => {
  return (
    <section className="bg-[#1b3659] py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center space-x-2 mb-8">
            <span className="h-px w-12 bg-[#c9ad7c]"></span>
            <span className="text-sm tracking-wider text-[#c9ad7c]">
              CONTATO
            </span>
          </div>

          <h2 className="text-5xl font-light leading-tight tracking-tight text-white">
            Pronto para resolver sua questão jurídica?
          </h2>

          <p className="text-sm leading-relaxed text-white/80">
            Entre em contato com um de nossos advogados especialistas. Estamos
            aqui para ajudar e oferecer a melhor orientação jurídica para sua
            situação.
          </p>

          <div className="pt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
