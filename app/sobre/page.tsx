import { oficinaInfo, depoimentos } from '@/lib/data'
import { images } from '@/lib/images'
import Image from 'next/image'
import { FiStar, FiCheckCircle } from 'react-icons/fi'

export const metadata = {
  title: 'Sobre Nós - Dr. Mecânico',
  description: 'Conheça a história e os diferenciais da Dr. Mecânico na Vila Prudente.',
}

const diferenciais = [
  {
    titulo: 'Atendimento Rápido',
    descricao: 'Agilidade sem comprometer a qualidade do serviço.',
  },
  {
    titulo: 'Honestidade Absoluta',
    descricao: 'Não inventamos problemas. Diagnóstico transparente e confiável.',
  },
  {
    titulo: 'Diagnóstico Correto',
    descricao: 'Identificamos o problema real na primeira tentativa.',
  },
  {
    titulo: 'Preço Justo',
    descricao: 'Valores transparentes e competitivos no mercado.',
  },
  {
    titulo: 'Organização',
    descricao: 'Oficina limpa e organizada para seu conforto.',
  },
  {
    titulo: 'Equipe Atenciosa',
    descricao: 'Profissionais dedicados e prontos para ajudar.',
  },
  {
    titulo: 'Café e Água',
    descricao: 'Cortesia para sua comodidade durante a espera.',
  },
  {
    titulo: 'Higienização com Ozônio',
    descricao: 'Serviço exclusivo para deixar seu veículo limpo e sem odores.',
  },
]

export default function SobrePage() {
  // Calcular média de palavras dos depoimentos sobre rapidez, honestidade, etc
  const depoimentosRapidez = depoimentos.filter((d) =>
    d.texto.toLowerCase().includes('rápido')
  ).length
  const depoimentosHonestidade = depoimentos.filter(
    (d) =>
      d.texto.toLowerCase().includes('honest') ||
      d.texto.toLowerCase().includes('transpar')
  ).length

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Sobre a{' '}
            <span className="text-yellow-400">Dr. Mecânico</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Oficina 5 estrelas na Vila Prudente, comprometida com atendimento
            rápido, honesto e de qualidade comprovada.
          </p>
        </div>

        {/* História */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                A Dr. Mecânico nasceu com o propósito de oferecer um serviço
                automotivo diferenciado na região da Vila Prudente. Desde o
                início, nossa missão foi clara: ser uma oficina que os clientes
                possam confiar completamente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Com anos de experiência no mercado automotivo, construímos uma
                reputação baseada em três pilares fundamentais: rapidez,
                honestidade e qualidade. Não acreditamos em inventar problemas
                ou empurrar serviços desnecessários. Nosso compromisso é com o
                diagnóstico correto e a solução eficiente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hoje, somos reconhecidos como uma oficina 5 estrelas, com mais
                de {oficinaInfo.totalAvaliacoes} avaliações positivas no Google.
                Nossa equipe é formada por profissionais experientes e
                dedicados, sempre prontos para oferecer o melhor atendimento.
              </p>
            </div>
          </div>
        </div>

        {/* Destaques dos Reviews */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Destaques do Nosso Atendimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FiStar className="text-yellow-400 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Rapidez
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {depoimentosRapidez}% dos nossos clientes destacam a rapidez do
                nosso atendimento. Fazemos o possível para resolver seu problema
                no mesmo dia.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FiCheckCircle className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Honestidade
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {depoimentosHonestidade}% dos depoimentos mencionam nossa
                transparência e honestidade. Não inventamos problemas, apenas
                resolvemos os reais.
              </p>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diferenciais.map((diferencial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400"
              >
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {diferencial.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {diferencial.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
              Nossa Equipe
            </h2>
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={images.team.equipe}
                  alt="Equipe Dr. Mecânico"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Profissionais Especializados
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Nossa equipe é formada por mecânicos experientes e
                especializados, comprometidos em oferecer o melhor atendimento.
                Cada membro da equipe passa por treinamento contínuo para
                manter-se atualizado com as mais recentes tecnologias e
                técnicas automotivas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Venha Conhecer a Dr. Mecânico
            </h2>
            <p className="text-black/80 mb-6 text-lg">
              Estamos prontos para atender você com qualidade e transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/agendar"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 inline-block"
              >
                Agendar Serviço
              </a>
              <a
                href={`https://wa.me/${oficinaInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 inline-block"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

