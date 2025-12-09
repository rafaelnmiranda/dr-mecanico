interface TimelineItem {
  etapa: number
  titulo: string
  descricao: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          Linha do Tempo do Atendimento
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={item.etapa} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {item.etapa}
                  </div>
                  {index < items.length - 1 && (
                    <div className="w-1 h-20 bg-yellow-400 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

