import Button from './Button'
import Image from 'next/image'

interface ServiceCardProps {
  nome: string
  icone: string
  imagem?: string
  descricao: string
  quandoProcurar: string
  id: string
}

export default function ServiceCard({
  nome,
  icone,
  imagem,
  descricao,
  quandoProcurar,
  id,
}: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow h-full flex flex-col">
      {imagem ? (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={imagem}
            alt={nome}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="text-4xl mb-4">{icone}</div>
      )}
      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
        {nome}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {descricao}
      </p>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
          Quando procurar:
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {quandoProcurar}
        </p>
      </div>
      <Button
        href={`/agendar?servico=${id}`}
        variant="primary"
        className="w-full"
      >
        Agendar este serviço
      </Button>
    </div>
  )
}

