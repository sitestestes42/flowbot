# FlowBot — site de vendas

Site responsivo para vender automação de atendimento no WhatsApp.

## 1. Rodar localmente

Abra `index.html` no navegador.

Para desenvolvimento, também pode usar:

```bash
python3 -m http.server 3000
```

Depois acesse `http://localhost:3000`.

## 2. Configuração rápida

Abra `config.js` e altere:

- `brandName`
- `whatsappSalesNumber`
- preços dos planos
- textos dos planos
- `apiBaseUrl`, se você tiver um backend

## 3. Importante sobre APIs

NÃO coloque chaves secretas de Gemini, OpenAI, WhatsApp ou banco de dados no `config.js` ou no HTML.

O correto é:

Browser → seu backend → API externa

As chaves ficam no backend, normalmente em variáveis de ambiente:

```env
GEMINI_API_KEY=
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
DATABASE_URL=
```

## 4. Formulário

Sem backend configurado, o formulário abre uma conversa de WhatsApp com os dados preenchidos.

Com backend, configure:

```js
apiBaseUrl: "https://sua-api.com",
leadEndpoint: "/api/leads"
```

O frontend enviará:

```json
{
  "name": "Nome",
  "business": "Empresa",
  "phone": "WhatsApp"
}
```

## 5. Próxima etapa

Este projeto é a camada comercial/front-end. Para transformar o FlowBot em um SaaS real, conecte:

- WhatsApp Business Platform ou provedor oficial
- Gemini/OpenAI
- banco de dados
- autenticação
- backend para webhooks
- painel de conversas
- configurações por cliente
