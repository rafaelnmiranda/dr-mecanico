'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/Button'
import { servicos, oficinaInfo } from '@/lib/data'
import { FiCalendar, FiClock, FiUser, FiPhone, FiTool } from 'react-icons/fi'

function AgendarForm() {
  const searchParams = useSearchParams()
  const servicoParam = searchParams.get('servico')

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    tipoServico: servicoParam || '',
    dataPreferida: '',
    periodo: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (servicoParam) {
      setFormData((prev) => ({ ...prev, tipoServico: servicoParam }))
    }
  }, [servicoParam])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, telefone: formatted })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Enviar para API
      const response = await fetch('/api/agendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)

        // Abrir WhatsApp com mensagem pré-formatada
        const servicoNome =
          servicos.find((s) => s.id === formData.tipoServico)?.nome ||
          formData.tipoServico
        const mensagem = `Olá! Gostaria de agendar um serviço.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
Serviço: ${servicoNome}
Data preferida: ${formData.dataPreferida}
Período: ${formData.periodo}`

        const whatsappUrl = `https://wa.me/${oficinaInfo.whatsapp}?text=${encodeURIComponent(
          mensagem
        )}`

        setTimeout(() => {
          window.open(whatsappUrl, '_blank')
        }, 1000)
      }
    } catch (error) {
      console.error('Erro ao enviar agendamento:', error)
      alert('Erro ao enviar agendamento. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
            Agendamento Enviado!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Seu agendamento foi recebido. Você será redirecionado para o
            WhatsApp para confirmar os detalhes.
          </p>
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Agendar Serviço
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Preencha o formulário abaixo e entraremos em contato para confirmar
            seu agendamento.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold mb-2 text-black dark:text-white"
              >
                <FiUser className="inline mr-2" />
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Telefone */}
            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-semibold mb-2 text-black dark:text-white"
              >
                <FiPhone className="inline mr-2" />
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="(11) 99999-9999"
                maxLength={15}
              />
            </div>

            {/* Tipo de Serviço */}
            <div>
              <label
                htmlFor="tipoServico"
                className="block text-sm font-semibold mb-2 text-black dark:text-white"
              >
                <FiTool className="inline mr-2" />
                Tipo de Serviço
              </label>
              <select
                id="tipoServico"
                name="tipoServico"
                required
                value={formData.tipoServico}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
              >
                <option value="">Selecione um serviço</option>
                {servicos.map((servico) => (
                  <option key={servico.id} value={servico.id}>
                    {servico.nome}
                  </option>
                ))}
              </select>
            </div>

            {/* Data Preferida */}
            <div>
              <label
                htmlFor="dataPreferida"
                className="block text-sm font-semibold mb-2 text-black dark:text-white"
              >
                <FiCalendar className="inline mr-2" />
                Data Preferida
              </label>
              <input
                type="date"
                id="dataPreferida"
                name="dataPreferida"
                required
                value={formData.dataPreferida}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
              />
            </div>

            {/* Período */}
            <div>
              <label
                htmlFor="periodo"
                className="block text-sm font-semibold mb-2 text-black dark:text-white"
              >
                <FiClock className="inline mr-2" />
                Período Preferido
              </label>
              <select
                id="periodo"
                name="periodo"
                required
                value={formData.periodo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
              >
                <option value="">Selecione um período</option>
                <option value="manha">Manhã (8h às 12h)</option>
                <option value="tarde">Tarde (13h às 19h)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-yellow-400 text-black px-6 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enviando...' : 'Enviar Agendamento'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
          <p>
            Ou entre em contato diretamente:{' '}
            <a
              href={`https://wa.me/${oficinaInfo.whatsapp}`}
              className="text-yellow-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AgendarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    }>
      <AgendarForm />
    </Suspense>
  )
}

