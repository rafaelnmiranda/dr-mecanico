import { MetadataRoute } from 'next'
import { dicas } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dr-mecanico.vercel.app'

  const routes = [
    '',
    '/agendar',
    '/servicos',
    '/depoimentos',
    '/sobre',
    '/dicas',
  ]

  const dicasRoutes = dicas.map((dica) => `/dicas/${dica.slug}`)

  const allRoutes = [...routes, ...dicasRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}

