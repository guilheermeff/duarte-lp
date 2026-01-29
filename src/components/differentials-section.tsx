import { Award, Target, Zap } from "lucide-react";

const DifferentialsSection = () => {
  return (
    <section className="relative mt-24 py-16 mb-16">
      <div className="mb-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="h-px w-12 bg-black"></span>
          <span className="text-sm tracking-wider">
            Porque Duarte & Iannuzzi
          </span>
        </div>
        <h2 className="text-5xl font-light leading-tight tracking-tight">
          NOSSOS DIFERENCIAIS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 text-6xl font-light text-[#c9ad7c]">
            01
          </div>
          <div className="relative pl-12">
            <Zap className="w-8 h-8 mb-4 text-[#1b3659]" />
            <h3 className="text-xl font-light mb-4">Atendimento Estratégico</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Cada caso é conduzido com visão estratégica, considerando as
              particularidades de cada cliente e objetivo com precisão.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 text-6xl font-light text-[#c9ad7c]">
            02
          </div>
          <div className="relative pl-12">
            <Target className="w-8 h-8 mb-4 text-[#1b3659]" />
            <h3 className="text-xl font-light mb-4">
              Excelência Procedimental
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              A condução de cada processo segue padrões rigorosos, garantindo
              precisão, consistência e respaldo ético em todas as etapas.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 text-6xl font-light text-[#c9ad7c]">
            03
          </div>
          <div className="relative pl-12">
            <Award className="w-8 h-8 mb-4 text-[#1b3659]" />
            <h3 className="text-xl font-light mb-4">
              Sólida Fundamentação Jurídica
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Aplicamos conhecimentos atualizados e interpretação criteriosa da
              lei para oferecer segurança e respaldo em cada decisão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
