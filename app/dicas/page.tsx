import Link from 'next/link'
import Image from 'next/image'
import { dicas } from '@/lib/data'

export const metadata = {
  title: 'Dicas do Dr. Mecânico - Blog',
  description: 'Dicas e informações úteis sobre manutenção automotiva e cuidados com seu veículo.',
}

export default function DicasPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Dicas do Dr. Mecânico
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Informações úteis para manter seu veículo sempre em ótimas condições.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dicas.map((dica) => (
            <Link
              key={dica.id}
              href={`/dicas/${dica.slug}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-105"
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
              <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
                {dica.titulo}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {dica.resumo}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(dica.data).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-yellow-400 font-semibold">
                  Ler mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

