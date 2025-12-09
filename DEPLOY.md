# Guia de Deploy - Dr. Mecânico

## 🚀 Deploy na Vercel

### Método 1: Via GitHub (Recomendado)

1. **Criar repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/dr-mecanico.git
   git push -u origin main
   ```

2. **Conectar na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "Add New Project"
   - Selecione o repositório `dr-mecanico`
   - A Vercel detectará automaticamente o Next.js

3. **Configurar variáveis de ambiente (opcional)**
   - Se você tiver uma chave do Google Maps API, adicione em:
   - Settings → Environment Variables
   - Nome: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Valor: sua chave da API

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo concluir (geralmente 2-3 minutos)
   - Seu site estará disponível em `https://dr-mecanico.vercel.app`

### Método 2: Via CLI da Vercel

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Fazer login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy de produção**
   ```bash
   vercel --prod
   ```

## 🔧 Configurações Pós-Deploy

### 1. Domínio Personalizado (Opcional)

1. Na Vercel, vá em Settings → Domains
2. Adicione seu domínio (ex: `www.dr-mecanico.com.br`)
3. Siga as instruções de DNS fornecidas pela Vercel

### 2. Google My Business API (Futuro)

Para integrar depoimentos reais do Google:
1. Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/)
2. Ative a API do Google My Business
3. Adicione as credenciais como variáveis de ambiente na Vercel

### 3. Banco de Dados (Futuro)

Para salvar agendamentos:
1. Escolha um serviço (Supabase, MongoDB, etc)
2. Configure as variáveis de ambiente na Vercel
3. Atualize `/app/api/agendar/route.ts` para salvar os dados

## 📊 Monitoramento

- **Analytics**: Configure Google Analytics ou Vercel Analytics
- **Logs**: Acesse os logs em Vercel → Deployments → [seu deploy] → Functions
- **Performance**: Use Vercel Analytics para monitorar performance

## 🔄 Atualizações Futuras

Para atualizar o site:
1. Faça as alterações no código
2. Commit e push para o GitHub
3. A Vercel fará deploy automático

Ou use:
```bash
vercel --prod
```

## ✅ Checklist Pós-Deploy

- [ ] Site está acessível
- [ ] Todas as páginas carregam corretamente
- [ ] Formulário de agendamento funciona
- [ ] Links do WhatsApp funcionam
- [ ] Mapa do Google carrega (se configurado)
- [ ] SEO está configurado (verificar com Google Search Console)
- [ ] Mobile está responsivo
- [ ] Performance está boa (verificar Lighthouse)

## 🆘 Troubleshooting

### Erro de Build
- Verifique os logs na Vercel
- Certifique-se de que todas as dependências estão no `package.json`
- Verifique se não há erros de TypeScript

### Mapa não carrega
- Verifique se a chave do Google Maps está configurada
- Verifique se o domínio está autorizado na Google Cloud Console

### Formulário não envia
- Verifique os logs da função `/api/agendar`
- Certifique-se de que a API route está funcionando

---

**Suporte**: Para dúvidas sobre deploy, consulte a [documentação da Vercel](https://vercel.com/docs)

