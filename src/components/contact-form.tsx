"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove caracteres não numéricos
      const cleanPhone = value.replace(/\D/g, "");

      // Aplica máscara: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
      let formattedPhone = "";
      if (cleanPhone.length > 0) {
        if (cleanPhone.length <= 2) {
          formattedPhone = `(${cleanPhone}`;
        } else if (cleanPhone.length <= 7) {
          formattedPhone = `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2)}`;
        } else if (cleanPhone.length <= 11) {
          formattedPhone = `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7)}`;
        }
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar telefone brasileiro: (XX) XXXXX-XXXX (11 dígitos)
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <p className="text-sm text-white/80 leading-relaxed">
        Nossos advogados estão sempre à disposição para orientá-lo. Preencha o formulário e entraremos em contato em breve.
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">
          Nome completo
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Nome completo"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9ad7c] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefone (11) 99999-9999"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9ad7c] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Descreva sua situação jurídica"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9ad7c] focus:border-transparent transition resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full"
      >
        {isLoading ? "Enviando..." : "Fale com um advogado"}
      </Button>

      {submitStatus === "success" && (
        <div className="text-sm text-green-600 text-center">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="text-sm text-red-600 text-center">
          Erro ao enviar mensagem. Verifique se o telefone está no formato correto (XX) XXXXX-XXXX.
        </div>
      )}
    </form>
    </div>
  );
};
