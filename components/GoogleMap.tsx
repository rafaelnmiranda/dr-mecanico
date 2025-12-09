'use client'

import { oficinaInfo } from '@/lib/data'

export default function GoogleMap() {
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    `${oficinaInfo.endereco}, ${oficinaInfo.bairro}, ${oficinaInfo.cidade}`
  )}`

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${oficinaInfo.endereco}, ${oficinaInfo.bairro}, ${oficinaInfo.cidade}`
  )}`

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
          Como Chegar
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <div className="mb-4">
              <p className="text-lg font-semibold text-black dark:text-white mb-2">
                {oficinaInfo.endereco}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {oficinaInfo.bairro} - {oficinaInfo.cidade}
              </p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-black dark:text-white mb-1">
                Horários:
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {oficinaInfo.horarios.semana}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {oficinaInfo.horarios.sabado}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
              >
                📍 Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                🗺️ Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

