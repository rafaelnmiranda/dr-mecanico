import TestimonialCard from '@/components/TestimonialCard'
import { depoimentos, oficinaInfo } from '@/lib/data'
import { FiStar } from 'react-icons/fi'

export const metadata = {
  title: 'Depoimentos - Dr. Mecânico',
  description: 'Veja o que nossos clientes dizem sobre a Dr. Mecânico na Vila Prudente.',
}

export default function DepoimentosPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Depoimentos dos Nossos Clientes
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current text-2xl" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-2xl text-black dark:text-white">
                  {oficinaInfo.notaGoogle.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {oficinaInfo.totalAvaliacoes} avaliações no Google
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o
            que eles têm a dizer sobre nosso atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {depoimentos.map((depoimento) => (
            <TestimonialCard key={depoimento.id} {...depoimento} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Deixe seu depoimento no Google
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Sua opinião é muito importante para nós! Ajude outros clientes
              compartilhando sua experiência.
            </p>
            <a
              href="https://g.page/r/CHANGE_THIS_TO_YOUR_GOOGLE_MY_BUSINESS_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 inline-block"
            >
              Avaliar no Google
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

