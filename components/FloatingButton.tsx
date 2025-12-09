'use client'

import Link from 'next/link'
import { FiCalendar } from 'react-icons/fi'

export default function FloatingButton() {
  return (
    <Link
      href="/agendar"
      className="fixed bottom-6 right-6 bg-yellow-400 text-black px-6 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 flex items-center space-x-2 font-semibold md:hidden"
      aria-label="Agendar serviço"
    >
      <FiCalendar className="text-xl" />
      <span>Agendar</span>
    </Link>
  )
}

