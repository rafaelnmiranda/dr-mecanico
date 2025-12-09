import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Mecânico - Oficina 5 Estrelas na Vila Prudente',
  description: 'Atendimento rápido, honesto e de qualidade comprovada. Oficina automotiva especializada em revisão, freios, suspensão, pneus e muito mais.',
  keywords: 'oficina mecânica, Vila Prudente, revisão automotiva, freios, suspensão, pneus, alinhamento, balanceamento',
  openGraph: {
    title: 'Dr. Mecânico - Oficina 5 Estrelas na Vila Prudente',
    description: 'Atendimento rápido, honesto e de qualidade comprovada.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Dr. Mecânico - Serviço Automotivo',
              image: 'https://dr-mecanico.vercel.app/og-image.jpg',
              '@id': 'https://dr-mecanico.vercel.app',
              url: 'https://dr-mecanico.vercel.app',
              telephone: '+5511914898000',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Ibitirama, 2036',
                addressLocality: 'Vila Prudente',
                addressRegion: 'SP',
                postalCode: '03137-000',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -23.5845,
                longitude: -46.5842,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '19:00',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '150',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}

