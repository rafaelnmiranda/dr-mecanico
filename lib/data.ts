export const oficinaInfo = {
  nome: 'Dr. Mecânico – Serviço Automotivo',
  endereco: 'Rua Ibitirama, 2036',
  bairro: 'Vila Prudente',
  cidade: 'São Paulo',
  cep: '03137-000',
  telefone: '11914898000',
  whatsapp: '5511914898000',
  notaGoogle: 5.0,
  totalAvaliacoes: 150,
  horarios: {
    semana: 'Seg–Sex: 8h às 19h',
    sabado: 'Sáb: 8h às 14h',
  },
  coordenadas: {
    lat: -23.5845,
    lng: -46.5842,
  },
}

import { images } from './images'

export const servicos = [
  {
    id: 'revisao',
    nome: 'Revisão',
    icone: '🔧',
    imagem: images.services.revisao,
    descricao: 'Manutenção preventiva completa para manter seu veículo sempre em dia.',
    quandoProcurar: 'A cada 10.000 km ou conforme recomendação do fabricante.',
  },
  {
    id: 'avaliacao-pre-compra',
    nome: 'Avaliação Pré-compra',
    icone: '🔍',
    imagem: images.services.avaliacaoPreCompra,
    descricao: 'Análise completa antes de comprar um veículo usado.',
    quandoProcurar: 'Antes de fechar negócio em um veículo seminovo ou usado.',
  },
  {
    id: 'amortecedores',
    nome: 'Amortecedores',
    icone: '⚙️',
    imagem: images.services.amortecedores,
    descricao: 'Troca e reparo de amortecedores para melhor estabilidade.',
    quandoProcurar: 'Quando sentir trepidações excessivas ou desgaste irregular dos pneus.',
  },
  {
    id: 'suspensao',
    nome: 'Suspensão',
    icone: '🚗',
    imagem: images.services.suspensao,
    descricao: 'Manutenção completa do sistema de suspensão.',
    quandoProcurar: 'Barulhos estranhos, instabilidade ou desgaste prematuro dos pneus.',
  },
  {
    id: 'freios',
    nome: 'Freios',
    icone: '🛑',
    imagem: images.services.freios,
    descricao: 'Troca de pastilhas, discos e fluido de freio.',
    quandoProcurar: 'Barulho ao frear, pedal mole ou luz de alerta no painel.',
  },
  {
    id: 'pneus',
    nome: 'Pneus',
    icone: '⭕',
    imagem: images.services.pneus,
    descricao: 'Troca e calibração de pneus.',
    quandoProcurar: 'Desgaste irregular, bolhas ou pneus abaixo do indicador TWI.',
  },
  {
    id: 'alinhamento',
    nome: 'Alinhamento',
    icone: '📐',
    imagem: images.services.alinhamento,
    descricao: 'Alinhamento de direção e geometria.',
    quandoProcurar: 'Volante desalinhado, puxando para um lado ou após troca de pneus.',
  },
  {
    id: 'balanceamento',
    nome: 'Balanceamento',
    icone: '⚖️',
    imagem: images.services.balanceamento,
    descricao: 'Balanceamento de rodas para eliminar vibrações.',
    quandoProcurar: 'Vibração no volante ou após troca de pneus.',
  },
  {
    id: 'troca-oleo',
    nome: 'Troca de Óleo',
    icone: '🛢️',
    imagem: images.services.trocaOleo,
    descricao: 'Troca de óleo e filtros.',
    quandoProcurar: 'A cada 5.000 a 10.000 km conforme especificação do fabricante.',
  },
  {
    id: 'limpeza-bico',
    nome: 'Limpeza de Bico',
    icone: '💧',
    imagem: images.services.limpezaBico,
    descricao: 'Limpeza e desobstrução dos bicos injetores.',
    quandoProcurar: 'Perda de potência, consumo excessivo ou falhas na partida.',
  },
  {
    id: 'mecanica-geral',
    nome: 'Mecânica em Geral',
    icone: '🔩',
    imagem: images.services.mecanicaGeral,
    descricao: 'Soluções completas para qualquer problema mecânico.',
    quandoProcurar: 'Qualquer problema mecânico que precise de diagnóstico profissional.',
  },
]

export const depoimentos = [
  {
    id: 1,
    autor: 'Carlos Silva',
    nota: 5,
    texto: 'Atendimento rápido e honesto! Não inventaram problemas desnecessários. Recomendo!',
    data: '2024-01-15',
  },
  {
    id: 2,
    autor: 'Maria Santos',
    nota: 5,
    texto: 'Melhor oficina da região! Diagnóstico correto na primeira tentativa. Equipe muito atenciosa.',
    data: '2024-01-10',
  },
  {
    id: 3,
    autor: 'João Oliveira',
    nota: 5,
    texto: 'Preço justo e serviço de qualidade. Ambiente limpo e organizado. Voltarei sempre!',
    data: '2024-01-08',
  },
  {
    id: 4,
    autor: 'Ana Costa',
    nota: 5,
    texto: 'Rapidez impressionante! Fizeram tudo no mesmo dia e com transparência total nos valores.',
    data: '2024-01-05',
  },
  {
    id: 5,
    autor: 'Pedro Almeida',
    nota: 5,
    texto: 'Oficina 5 estrelas de verdade! Atendimento diferenciado e cafézinho enquanto espera.',
    data: '2024-01-03',
  },
  {
    id: 6,
    autor: 'Fernanda Lima',
    nota: 5,
    texto: 'Honestidade acima de tudo! Explicaram tudo detalhadamente e não tentaram empurrar serviços desnecessários.',
    data: '2023-12-28',
  },
]

export const dicas = [
  {
    id: 1,
    slug: '6-sinais-problema-suspensao',
    titulo: '6 Sinais de Problema na Suspensão',
    resumo: 'Aprenda a identificar quando seu carro precisa de atenção na suspensão antes que o problema se agrave.',
    conteudo: `
# 6 Sinais de Problema na Suspensão

A suspensão do seu veículo é fundamental para garantir conforto, segurança e estabilidade. Quando há problemas, alguns sinais são claros e não devem ser ignorados.

## 1. Barulhos Estranhos

Se você ouve barulhos de "toc toc" ou "rangido" ao passar por buracos ou lombadas, pode ser sinal de amortecedores ou molas desgastados.

## 2. Carro "Afundando" ao Frear

Quando você freia e o carro parece "mergulhar" para frente de forma excessiva, os amortecedores podem estar comprometidos.

## 3. Desgaste Irregular dos Pneus

Pneus com desgaste desigual indicam problemas de alinhamento ou suspensão. Observe se há áreas mais gastas que outras.

## 4. Instabilidade em Curvas

Se o carro balança muito em curvas ou parece "flutuar", a suspensão precisa de atenção urgente.

## 5. Trepidações Excessivas

Vibrações no volante ou no banco ao dirigir em pistas irregulares são sinais claros de desgaste.

## 6. Veículo Desalinhado

Se o carro puxa para um lado mesmo com o volante reto, pode ser problema na suspensão ou alinhamento.

## Quando Procurar um Mecânico?

Ao identificar qualquer um desses sinais, procure uma oficina de confiança. Na Dr. Mecânico, fazemos diagnóstico honesto e transparente, sem inventar problemas desnecessários.
    `,
    imagem: images.tips.suspensao,
    data: '2024-01-20',
  },
  {
    id: 2,
    slug: 'checklist-antes-viajar',
    titulo: 'Checklist Antes de Viajar',
    resumo: 'Confira os itens essenciais para garantir uma viagem segura e tranquila com seu veículo.',
    conteudo: `
# Checklist Antes de Viajar

Antes de pegar a estrada, é fundamental verificar alguns itens do seu veículo para garantir segurança e tranquilidade.

## Itens de Segurança

- **Freios**: Teste os freios em local seguro. Se sentir pedal mole ou barulhos, procure uma oficina.
- **Pneus**: Verifique a calibragem, profundidade do sulco (mínimo 1,6mm) e presença de bolhas ou cortes.
- **Luzes**: Teste faróis, lanternas, setas e luz de freio.
- **Cinto de segurança**: Verifique se todos os cintos estão funcionando corretamente.

## Fluidos e Níveis

- **Óleo do motor**: Verifique o nível e a qualidade do óleo.
- **Água do radiador**: Confira o nível e complete se necessário.
- **Limpador de para-brisa**: Verifique se há água no reservatório.
- **Fluido de freio**: Nível adequado é essencial para segurança.

## Documentação

- **CNH**: Certifique-se de que está válida.
- **CRLV**: Documento do veículo em dia.
- **Seguro**: Verifique a validade do seguro obrigatório.

## Itens Extras Recomendados

- **Estepe**: Verifique se está calibrado e em bom estado.
- **Macaco e chave de roda**: Essenciais em caso de pneu furado.
- **Kit de primeiros socorros**: Sempre útil em emergências.
- **Triângulo e extintor**: Obrigatórios por lei.

## Na Dr. Mecânico

Oferecemos revisão pré-viagem completa para garantir que seu veículo esteja 100% seguro para a estrada. Agende sua revisão conosco!
    `,
    imagem: images.tips.viagem,
    data: '2024-01-18',
  },
  {
    id: 3,
    slug: 'manter-carro-otimas-condicoes',
    titulo: 'Como Manter o Carro em Ótimas Condições',
    resumo: 'Dicas práticas para prolongar a vida útil do seu veículo e evitar problemas inesperados.',
    conteudo: `
# Como Manter o Carro em Ótimas Condições

Manter seu veículo em bom estado não é apenas questão de economia, mas também de segurança. Siga estas dicas simples:

## Manutenção Preventiva Regular

### Troca de Óleo

A troca de óleo é uma das manutenções mais importantes. Siga o intervalo recomendado pelo fabricante (geralmente a cada 5.000 a 10.000 km).

### Filtros

Troque os filtros de ar, óleo e combustível conforme a recomendação. Filtros sujos comprometem o desempenho e aumentam o consumo.

## Cuidados Diários

### Calibragem dos Pneus

Verifique a calibragem semanalmente. Pneus descalibrados aumentam o consumo de combustível e desgastam prematuramente.

### Limpeza

Mantenha o carro limpo, especialmente o para-brisa e retrovisores. A limpeza interna também ajuda a preservar o veículo.

### Cuidado com Combustível

Use sempre combustível de qualidade e evite deixar o tanque na reserva constantemente.

## Atenção aos Sinais

Fique atento a:
- Barulhos estranhos
- Luzes de alerta no painel
- Mudanças no comportamento do veículo
- Consumo excessivo de combustível

## Revisões Periódicas

Faça revisões periódicas em uma oficina de confiança. Na Dr. Mecânico, oferecemos revisões completas com diagnóstico honesto e transparente.

## Benefícios da Manutenção Preventiva

- Maior segurança
- Economia a longo prazo
- Melhor desempenho
- Valorização do veículo
- Menos surpresas desagradáveis

Invista na manutenção preventiva e tenha um veículo sempre em ótimas condições!
    `,
    imagem: images.tips.manutencao,
    data: '2024-01-15',
  },
  {
    id: 4,
    slug: 'higienizacao-ozonio-importante',
    titulo: 'Por que a Higienização com Ozônio é Importante?',
    resumo: 'Entenda os benefícios da higienização com ozônio para o interior do seu veículo.',
    conteudo: `
# Por que a Higienização com Ozônio é Importante?

A higienização com ozônio é um processo moderno e eficiente para eliminar odores, bactérias e vírus do interior do veículo.

## O que é Ozônio?

O ozônio (O₃) é uma molécula composta por três átomos de oxigênio. É um poderoso agente oxidante que elimina microrganismos e odores de forma natural.

## Benefícios da Higienização com Ozônio

### Eliminação de Odores

Remove odores de cigarro, animais, umidade, mofo e outros odores persistentes que ficam impregnados no estofamento e ar-condicionado.

### Eliminação de Bactérias e Vírus

O ozônio é eficaz contra uma ampla gama de microrganismos, incluindo bactérias, vírus e fungos, deixando o ambiente mais saudável.

### Limpeza Profunda

Atinge áreas difíceis de limpar manualmente, como dutos de ar-condicionado, estofamentos profundos e espaços entre bancos.

### Processo Natural

Não utiliza produtos químicos agressivos, sendo uma opção mais ecológica e segura.

## Quando Fazer Higienização com Ozônio?

- Após comprar um veículo usado
- Após problemas com mofo ou umidade
- Para eliminar odores persistentes
- Após uso prolongado do veículo
- Como manutenção preventiva (recomendado a cada 6 meses)

## Na Dr. Mecânico

Oferecemos serviço de higienização com ozônio para deixar seu veículo limpo, sem odores e mais saudável. Agende seu serviço conosco!
    `,
    imagem: images.tips.ozonio,
    data: '2024-01-12',
  },
]

export const timelineAtendimento = [
  {
    etapa: 1,
    titulo: 'Recepção',
    descricao: 'Você é recebido com atenção e seu veículo é avaliado inicialmente.',
  },
  {
    etapa: 2,
    titulo: 'Diagnóstico Honesto',
    descricao: 'Fazemos uma análise completa e transparente, sem inventar problemas.',
  },
  {
    etapa: 3,
    titulo: 'Execução Rápida',
    descricao: 'Serviço realizado com agilidade e qualidade, respeitando prazos combinados.',
  },
  {
    etapa: 4,
    titulo: 'Entrega com Checklist',
    descricao: 'Seu veículo é entregue limpo, com checklist completo e explicação do que foi feito.',
  },
]

export const equipe = [
  {
    nome: 'Equipe Dr. Mecânico',
    cargo: 'Especialistas Automotivos',
    descricao: 'Nossa equipe é formada por profissionais experientes e dedicados.',
  },
]

