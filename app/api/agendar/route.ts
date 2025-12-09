import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.nome || !body.telefone || !body.tipoServico || !body.dataPreferida || !body.periodo) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com:
    // - Banco de dados (Supabase, MongoDB, etc)
    // - Serviço de email (SendGrid, Resend, etc)
    // - CRM (HubSpot, Pipedrive, etc)
    // - Planilha Google Sheets via API
    
    // Por enquanto, apenas logamos os dados (em produção, salve em um banco de dados)
    console.log('Novo agendamento recebido:', body)

    // Simulação de sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Agendamento recebido com sucesso',
        data: body,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar agendamento:', error)
    return NextResponse.json(
      { error: 'Erro ao processar agendamento' },
      { status: 500 }
    )
  }
}

