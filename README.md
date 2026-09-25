# FlowBot SaaS

Painel de automação de atendimento WhatsApp preparado para Vercel + PostgreSQL + Gemini + WhatsApp Business Platform.

## Rodar
1. `npm install`
2. copie `.env.example` para `.env`
3. preencha `DATABASE_URL`
4. `npx prisma generate`
5. `npx prisma db push`
6. `npm run dev`

## Vercel
Configure as mesmas variáveis no Project Settings > Environment Variables.

## Webhook
Configure no provedor oficial do WhatsApp:
`https://SEU-DOMINIO.vercel.app/api/whatsapp/webhook`

Use `WHATSAPP_VERIFY_TOKEN` como token de verificação.

## Importante
O projeto contém o painel, banco e endpoints-base. A integração oficial do WhatsApp exige configuração da conta Business e credenciais válidas. Nunca exponha `WHATSAPP_ACCESS_TOKEN` ou `GEMINI_API_KEY` no frontend.

## Próximas etapas recomendadas
- autenticação real (Auth.js/Clerk/Supabase Auth)
- autorização por empresa/usuário
- persistência completa do webhook
- processamento de mensagens recebidas
- chamada Gemini com contexto da empresa
- resposta automática via WhatsApp
- fila/retry para webhooks
- interface de inbox em tempo real
- cobrança/assinaturas


## Correção para Vercel
O projeto usa o alias `@/` e o `tsconfig.json` já está configurado com `baseUrl`/`paths`.
O `postinstall` executa `prisma generate` automaticamente no build da Vercel.

Build Command: `npm run build`
Install Command: `npm install`

## Versão Prisma
Este projeto fixa Prisma e @prisma/client em 6.19.3 para manter compatibilidade com `prisma/schema.prisma` e com o código que importa `@prisma/client`.
