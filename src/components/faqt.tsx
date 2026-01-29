"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "clock",
      question: "Quais são os horários de atendimento?",
      answer:
        "Nosso atendimento funciona de segunda a sexta-feira, das 8h às 18h, e aos sábados das 8h às 12h. Para emergências jurídicas, oferecemos atendimento 24h através do nosso canal de WhatsApp.",
    },
    {
      id: "item-2",
      icon: "credit-card",
      question: "Como funcionam os honorários advocatícios?",
      answer:
        "Trabalhamos com diferentes modalidades: consultoria por hora, honorários fixos para casos específicos, e percentual sobre o valor da causa. Sempre com transparência total e sem custos ocultos.",
    },
    {
      id: "item-3",
      icon: "truck",
      question: "Atendem em outras cidades além de Manaus?",
      answer:
        "Sim, atendemos em todo o Brasil através de videoconferências e deslocamentos quando necessário. Mantemos escritórios parceiros em capitais para maior agilidade nos procedimentos.",
    },
    {
      id: "item-4",
      icon: "globe",
      question: "Oferecem consultoria preventiva?",
      answer:
        "Sim, nossa consultoria preventiva ajuda a evitar problemas jurídicos futuros, com análise de contratos, compliance empresarial e orientação sobre direitos e deveres legais.",
    },
    {
      id: "item-5",
      icon: "package",
      question: "Como acompanhar o andamento do meu processo?",
      answer:
        "Fornecemos relatórios mensais detalhados sobre o andamento do seu caso, além de acesso a um portal online onde você pode acompanhar prazos, audiências e movimentações processuais.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="flex items-center space-x-2 mb-8">
                <span className="h-px w-12 bg-black"></span>
                <span className="text-sm tracking-wider">FAQ</span>
              </div>
              <h2 className="text-5xl font-light leading-tight tracking-tight text-black">
                DÚVIDAS COMUNS
              </h2>
              <p className="text-[#7d7d7d] mt-6 text-sm leading-relaxed">
                Não encontrou o que procura? Entre em contato conosco{" "}
                <Link
                  href="https://wa.me/5592996037337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-light text-[#1b3659] transition-all hover:gap-4 hover:text-[#476288]"
                >
                  Saber mais
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>Seta apontando para a direita</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white shadow-sm rounded-lg  border border-black/10 px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4 text-[#c9ad7c]"
                        />
                      </div>
                      <span className="text-sm font-medium text-black">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-sm leading-relaxed text-[#7d7d7d]">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
