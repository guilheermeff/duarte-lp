import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative  py-16">
      <div>
        <div className="flex items-center space-x-2 mb-16">
          <span className="h-px w-12 bg-black"></span>
          <span className="text-sm tracking-wider">Sobre nós</span>
        </div>

        <div className="space-y-12">
          {/* Lawyers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dra. Waleska Iannuzzi */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dra%20Waleska-1GvQO6gXeNJFbOwqr99FCRXFtX5hQo.jpg"
                  alt="Dra. Waleska Iannuzzi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light text-black">Dra. Waleska Iannuzzi</h3>
              </div>
            </div>

            {/* Dr. Cayo Duarte */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr%20Cayo-0CGFlr8xhYfeTnpqrvVhl7jmLnkqiI.jpg"
                  alt="Dr. Cayo Duarte"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light text-black">Dr. Cayo Duarte</h3>
              </div>
            </div>

            {/* Dra. Taize Rocha */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dra%20Taize-SJRjxk7MU6WKQL06xEB8UdNOMOc7A2.jpg"
                  alt="Dra. Taize Rocha"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light text-black">Dra. Taize Rocha</h3>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <h2 className="text-4xl font-light leading-tight tracking-tight">
              Tornando o Direito mais próximo de você
            </h2>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-gray-600">
                Fundado com o propósito de tornar o Direito mais compreensível e
                acessível, o Duarte & Iannuzzi Advocacia atua de forma inovadora
                e personalizada, sempre pautado pela ética e pela proximidade
                com seus clientes. Nosso compromisso vai além das soluções
                jurídicas: buscamos explicar, orientar e simplificar cada etapa,
                para que você entenda seus direitos e tome decisões com
                segurança.
              </p>

              <Button asChild className="rounded-full">
                <Link
                  href="https://www.instagram.com/di.advocacia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light  transition-all hover:gap-4 "
                >
                  Conhecer mais
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
