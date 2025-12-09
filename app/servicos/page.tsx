import ServiceCard from '@/components/ServiceCard'
import { servicos } from '@/lib/data'

export const metadata = {
  title: 'Serviços - Dr. Mecânico',
  description: 'Conheça todos os serviços oferecidos pela Dr. Mecânico na Vila Prudente.',
}

export default function ServicosPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com qualidade
            e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <ServiceCard key={servico.id} {...servico} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Não encontrou o que procura?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Entre em contato conosco! Oferecemos serviços de mecânica em geral
              e podemos ajudar com qualquer necessidade do seu veículo.
            </p>
            <a
              href={`https://wa.me/5511914898000?text=Olá! Gostaria de mais informações sobre os serviços.`}
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
  )
}

