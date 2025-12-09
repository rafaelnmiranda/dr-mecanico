import { FiStar } from 'react-icons/fi'

interface TestimonialCardProps {
  autor: string
  nota: number
  texto: string
  data: string
}

export default function TestimonialCard({
  autor,
  nota,
  texto,
  data,
}: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(nota)].map((_, i) => (
            <FiStar key={i} className="fill-current" />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          {new Date(data).toLocaleDateString('pt-BR')}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{texto}</p>
      <p className="font-semibold text-black dark:text-white">— {autor}</p>
    </div>
  )
}

