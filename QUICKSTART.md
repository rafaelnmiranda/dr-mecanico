# 🚀 Quick Start - Dr. Mecânico

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## 📁 Estrutura Principal

- **`app/`** - Páginas e rotas do Next.js
- **`components/`** - Componentes React reutilizáveis
- **`lib/data.ts`** - Dados estáticos (serviços, depoimentos, etc)
- **`public/`** - Arquivos estáticos (imagens, robots.txt)

## 🎯 Páginas Disponíveis

- `/` - Home
- `/agendar` - Formulário de agendamento
- `/servicos` - Lista de serviços
- `/depoimentos` - Reviews do Google
- `/dicas` - Blog com dicas
- `/dicas/[slug]` - Post individual
- `/sobre` - Sobre a oficina

## 🔧 Personalização

### Alterar Dados da Oficina

Edite `lib/data.ts`:
- Informações de contato
- Serviços oferecidos
- Depoimentos
- Dicas do blog

### Alterar Cores

Edite `tailwind.config.js`:
```js
colors: {
  primary: {
    black: '#000000',
    yellow: '#FFD700',
    red: '#DC2626',
  },
}
```

### Adicionar Google Maps API

1. Crie arquivo `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua-chave
```

2. Obtenha chave em: https://console.cloud.google.com/

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🚀 Deploy

Veja `DEPLOY.md` para instruções completas.

**Deploy rápido na Vercel:**
```bash
npm i -g vercel
vercel
```

---

**Pronto para usar!** 🎉

