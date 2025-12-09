import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { dicas } from '@/lib/data'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return dicas.map((dica) => ({
    slug: dica.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const dica = dicas.find((d) => d.slug === params.slug)

  if (!dica) {
    return {
      title: 'Dica não encontrada - Dr. Mecânico',
    }
  }

  return {
    title: `${dica.titulo} - Dicas do Dr. Mecânico`,
    description: dica.resumo,
  }
}

export default function DicaPage({ params }: PageProps) {
  const dica = dicas.find((d) => d.slug === params.slug)

  if (!dica) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/dicas"
          className="text-yellow-400 hover:underline mb-6 inline-block"
        >
          ← Voltar para Dicas
        </Link>

        <article className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-96 rounded-lg mb-6 overflow-hidden">
              <Image
                src={dica.imagem}
                alt={dica.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              {dica.titulo}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {dica.resumo}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Publicado em{' '}
              {new Date(dica.data).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {dica.conteudo.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null

              // Headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h1
                    key={index}
                    className="text-3xl font-bold mt-8 mb-4 text-black dark:text-white"
                  >
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-6 mb-3 text-black dark:text-white"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-bold mt-4 mb-2 text-black dark:text-white"
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }

              // Lists
              if (paragraph.startsWith('- ')) {
                return (
                  <li
                    key={index}
                    className="ml-6 mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {paragraph.replace('- ', '')}
                  </li>
                )
              }

              // Regular paragraphs
              return (
                <p
                  key={index}
                  className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                Precisa de ajuda profissional?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Na Dr. Mecânico, oferecemos diagnóstico honesto e transparente.
                Agende seu serviço conosco!
              </p>
              <Link
                href="/agendar"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all inline-block"
              >
                Agendar Serviço
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

