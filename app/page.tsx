import Button from '@/components/Button'
import TestimonialCard from '@/components/TestimonialCard'
import ServiceCard from '@/components/ServiceCard'
import Timeline from '@/components/Timeline'
import GoogleMap from '@/components/GoogleMap'
import Link from 'next/link'
import Image from 'next/image'
import {
  oficinaInfo,
  depoimentos,
  servicos,
  timelineAtendimento,
  dicas,
} from '@/lib/data'
import { images } from '@/lib/images'
import { FiStar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.main}
            alt="Oficina Dr. Mecânico"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Oficina 5 Estrelas na{' '}
            <span className="text-yellow-400">Vila Prudente</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Atendimento rápido, honesto e de qualidade comprovada.
          </p>

          {/* Google Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current text-xl" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">
                  {oficinaInfo.notaGoogle.toFixed(1)}
                </div>
                <div className="text-sm text-gray-300">
                  {oficinaInfo.totalAvaliacoes} avaliações no Google
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/agendar" variant="primary" className="text-lg">
              Agendar Serviço
            </Button>
            <a
              href={`https://wa.me/${oficinaInfo.whatsapp}?text=Olá! Gostaria de mais informações sobre os serviços da Dr. Mecânico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="text-xl" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos Carousel */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.slice(0, 6).map((depoimento) => (
              <TestimonialCard key={depoimento.id} {...depoimento} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/depoimentos" variant="outline">
              Ver todos os depoimentos
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline items={timelineAtendimento} />

      {/* Bastidores e Equipe */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Bastidores e Equipe
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={images.team.equipe}
                    alt="Equipe Dr. Mecânico"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Equipe Especializada
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nossa equipe é formada por profissionais experientes e
                  dedicados, comprometidos em oferecer o melhor atendimento.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Ambiente Organizado
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Oficina limpa e organizada para garantir qualidade e
                    segurança.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Atendimento Diferenciado
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Café e água sempre disponíveis para sua comodidade.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Tecnologia Moderna
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Equipamentos modernos para diagnóstico preciso e rápido.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Higienização com Ozônio
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Serviço exclusivo de higienização para seu conforto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.slice(0, 6).map((servico) => (
              <ServiceCard key={servico.id} {...servico} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/servicos" variant="outline">
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Dicas do Dr. Mecânico */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
            Dicas do Dr. Mecânico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dicas.map((dica) => (
              <Link
                key={dica.id}
                href={`/dicas/${dica.slug}`}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={dica.imagem}
                    alt={dica.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {dica.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {dica.resumo}
                </p>
                <span className="text-yellow-400 font-semibold">
                  Ler mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <GoogleMap />
    </div>
  )
}

