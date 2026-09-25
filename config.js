/*
  CONFIGURAÇÃO DO FLOWBOT
  ========================
  Este arquivo é seguro para dados públicos.
  NUNCA coloque chaves secretas de Gemini/OpenAI/WhatsApp aqui.
  Chaves secretas devem ficar no backend (.env).
*/

window.FLOWBOT_CONFIG = {
  brandName: "FlowBot",
  whatsappSalesNumber: "5511999999999", // número para o botão de vendas, com DDI + DDD
  currency: "R$",

  plans: [
    {
      name: "Inicial",
      price: "297",
      period: "configuração",
      description: "Para negócios que querem começar a automatizar.",
      features: ["Bot personalizado", "Perguntas frequentes", "Menu de atendimento", "Encaminhamento para humano"],
      popular: false
    },
    {
      name: "Profissional",
      price: "697",
      period: "configuração",
      description: "Para empresas que querem usar IA no atendimento.",
      features: ["Tudo do Inicial", "IA para conversas", "Catálogo de serviços", "Captura de leads", "Regras personalizadas"],
      popular: true
    },
    {
      name: "Mensal",
      price: "149",
      period: "/mês",
      description: "Manutenção e operação contínua do seu atendimento.",
      features: ["Hospedagem", "Manutenção", "Ajustes no bot", "Monitoramento"],
      popular: false
    }
  ],

  // Se você tiver um backend próprio, coloque a URL aqui.
  // Exemplo: "https://api.seudominio.com"
  apiBaseUrl: "",

  // Endpoint opcional para receber leads do formulário.
  // Exemplo: "/api/leads"
  leadEndpoint: "/api/leads"
};
