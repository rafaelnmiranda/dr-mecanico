# Dr. Mecânico - Site Oficial

Site completo, responsivo e minimalista para a oficina **Dr. Mecânico – Serviço Automotivo**, localizada na Vila Prudente, São Paulo.

## 🚀 Características

- ✅ Design minimalista e moderno
- ✅ Totalmente responsivo (mobile-first)
- ✅ Performance otimizada para Vercel
- ✅ SEO configurado com dados estruturados
- ✅ Integração com WhatsApp
- ✅ Formulário de agendamento funcional
- ✅ Dark mode automático (baseado na preferência do sistema)
- ✅ Botão flutuante de agendamento para mobile

## 📋 Páginas

- **Home** (`/`) - Hero, depoimentos, linha do tempo, serviços, dicas e mapa
- **Agendar** (`/agendar`) - Formulário de agendamento com integração WhatsApp
- **Serviços** (`/servicos`) - Lista completa de serviços oferecidos
- **Depoimentos** (`/depoimentos`) - Reviews do Google My Business
- **Dicas** (`/dicas`) - Mini-blog com dicas automotivas
- **Sobre** (`/sobre`) - História da oficina e diferenciais

## 🛠️ Stack Tecnológica

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **React Icons** - Ícones
- **Vercel** - Deploy e hospedagem

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/rafaelnmiranda/dr-mecanico.git
cd dr-mecanico
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🚀 Deploy na Vercel

### Opção 1: Deploy via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte seu repositório GitHub
4. A Vercel detectará automaticamente o Next.js e fará o deploy

### Opção 2: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Execute o deploy:
```bash
vercel
```

3. Siga as instruções no terminal

## 🔧 Configurações Opcionais

### Google Maps API (Opcional)

Para usar o mapa do Google Maps com embed, você pode adicionar uma chave de API:

1. Crie um arquivo `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua-chave-aqui
```

2. Obtenha uma chave em [Google Cloud Console](https://console.cloud.google.com/)

**Nota:** O site funciona sem a chave do Google Maps, mas o mapa pode não carregar. Você pode usar links diretos para Google Maps e Waze como alternativa.

### Integração com Banco de Dados (Futuro)

A API route `/api/agendar` está preparada para integração com:
- Supabase
- MongoDB
- Google Sheets
- Qualquer outro serviço de backend

Atualmente, os agendamentos são apenas logados no console. Para produção, implemente a persistência de dados.

## 📱 Funcionalidades Principais

### Formulário de Agendamento

- Validação de campos
- Formatação automática de telefone
- Integração com WhatsApp
- API route para processamento

### Depoimentos

- Carrossel de depoimentos do Google
- Cards responsivos
- Sistema preparado para integração com Google My Business API

### Serviços

- Cards informativos
- Links diretos para agendamento
- Descrições detalhadas

### Blog (Dicas)

- Posts estáticos
- Páginas individuais para cada dica
- Sistema preparado para CMS futuro

## 🎨 Paleta de Cores

- **Preto** (`#000000`) - Cor principal
- **Amarelo** (`#FFD700`) - Destaques e CTAs
- **Vermelho** (`#DC2626`) - Ações secundárias

## 📞 Informações de Contato

- **Endereço:** Rua Ibitirama, 2036 – Vila Prudente – SP
- **WhatsApp:** (11) 91489-8000
- **Horários:**
  - Seg–Sex: 8h às 19h
  - Sáb: 8h às 14h

## 📝 Estrutura do Projeto

```
dr-mecanico/
├── app/
│   ├── api/
│   │   └── agendar/
│   │       └── route.ts          # API route para agendamentos
│   ├── agendar/
│   │   └── page.tsx              # Página de agendamento
│   ├── servicos/
│   │   └── page.tsx              # Página de serviços
│   ├── depoimentos/
│   │   └── page.tsx              # Página de depoimentos
│   ├── dicas/
│   │   ├── page.tsx              # Lista de dicas
│   │   └── [slug]/
│   │       └── page.tsx          # Página individual de dica
│   ├── sobre/
│   │   └── page.tsx              # Página sobre
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Home page
│   └── globals.css               # Estilos globais
├── components/
│   ├── Button.tsx                # Componente de botão
│   ├── FloatingButton.tsx        # Botão flutuante mobile
│   ├── Footer.tsx                 # Rodapé
│   ├── GoogleMap.tsx             # Componente de mapa
│   ├── Header.tsx                # Cabeçalho
│   ├── ServiceCard.tsx           # Card de serviço
│   ├── TestimonialCard.tsx        # Card de depoimento
│   └── Timeline.tsx               # Linha do tempo
├── lib/
│   └── data.ts                   # Dados estáticos (serviços, depoimentos, etc)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔄 Próximos Passos (Melhorias Futuras)

- [ ] Integração real com Google My Business API para depoimentos
- [ ] Sistema de CMS para gerenciar dicas/blog
- [ ] Integração com banco de dados para agendamentos
- [ ] Sistema de notificações por email
- [ ] Painel administrativo
- [ ] Integração com Google Analytics
- [ ] Otimização de imagens com Next.js Image

## 📄 Licença

Este projeto é proprietário da Dr. Mecânico – Serviço Automotivo.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato:
- WhatsApp: (11) 91489-8000
- Email: contato@dr-mecanico.com.br (se disponível)

---

Desenvolvido com ❤️ para a Dr. Mecânico
