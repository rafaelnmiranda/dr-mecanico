import Link from 'next/link'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import { oficinaInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-400">Dr.</span> Mecânico
            </h3>
            <p className="text-gray-400">
              Oficina 5 estrelas na Vila Prudente. Atendimento rápido, honesto
              e de qualidade comprovada.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/servicos" className="hover:text-yellow-400">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="hover:text-yellow-400">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/dicas" className="hover:text-yellow-400">
                  Dicas
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-yellow-400">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="hover:text-yellow-400">
                  Agendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 text-yellow-400" />
                <span>
                  {oficinaInfo.endereco}, {oficinaInfo.bairro} - {oficinaInfo.cidade}
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-yellow-400" />
                <a
                  href={`https://wa.me/${oficinaInfo.whatsapp}`}
                  className="hover:text-yellow-400"
                >
                  (11) 91489-8000
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="mr-2 mt-1 text-yellow-400" />
                <div>
                  <div>{oficinaInfo.horarios.semana}</div>
                  <div>{oficinaInfo.horarios.sabado}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Dr. Mecânico - Serviço Automotivo.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

