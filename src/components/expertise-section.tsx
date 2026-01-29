import Link from "next/link";

const ExpertiseSection = () => {
  return (
    <section className="relative mt-24 py-16">
      <div className="mb-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="h-px w-12 bg-black"></span>
          <span className="text-sm tracking-wider">EXPERTISE</span>
        </div>
        <h2 className="text-5xl font-light leading-tight tracking-tight">
          ÁREAS DE ATUAÇÃO
        </h2>
      </div>

      <div className="space-y-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="order-1 space-y-6 lg:order-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-6xl font-light text-[#c9ad7c]">01</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </div>
            <h3 className="text-4xl font-light tracking-tight text-black">
              Previdenciário
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Atuação em benefícios do INSS, aposentadorias e revisões,
              assegurando que cada direito previdenciário seja corretamente
              reconhecido.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Auxílio doença</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Aposentadoria por invalidez</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Salário maternidade</span>
              </li>
            </ul>
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
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden">
            <img
              src="/previdenciario.png"
              alt="Direito Previdenciário"
              className="h-full w-full rounded-lg object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="order-1 space-y-6 lg:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-6xl font-light text-[#c9ad7c]">02</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </div>
            <h3 className="text-4xl font-light tracking-tight text-black">
              Trabalhista
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Representação em conflitos entre empregados e empregadores, com
              ênfase em direitos rescisórios, horas extras e reconhecimento de
              vínculos.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Rescisão indireta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Home office</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Ausência de anotação na carteira de trabalho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c9ad7c] font-light mt-1">•</span>
                <span>Pejotização</span>
              </li>
            </ul>
            <Link
              href="https://wa.me/5592996037337"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-light text-[#1b3659] transition-all hover:gap-4 hover:text-[#476288]"
            >
              Solicitar avaliação
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
          </div>

          <div className="order-2 lg:order-2 aspect-[4/3] overflow-hidden">
            <img
              src="/trabalhista.png"
              alt="Direito Trabalhista"
              className="h-full w-full rounded-lg object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
