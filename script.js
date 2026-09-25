const cfg = window.FLOWBOT_CONFIG || {};

document.getElementById("year").textContent = new Date().getFullYear();

const pricingGrid = document.getElementById("pricingGrid");
(pricingGrid && cfg.plans || []).forEach(plan => {
  const card = document.createElement("article");
  card.className = "price-card" + (plan.popular ? " popular" : "");
  card.innerHTML = `
    ${plan.popular ? '<span class="badge">MAIS PROCURADO</span>' : ''}
    <h3>${escapeHtml(plan.name)}</h3>
    <div class="price">${cfg.currency || "R$"} ${escapeHtml(plan.price)} <small>${escapeHtml(plan.period)}</small></div>
    <p>${escapeHtml(plan.description)}</p>
    <ul>${plan.features.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    <a class="btn ${plan.popular ? "btn-primary" : "btn-outline"}" target="_blank" href="${whatsappLink("Olá! Quero saber mais sobre o plano " + plan.name + " do FlowBot.")}">Quero este plano</a>
  `;
  pricingGrid.appendChild(card);
});

function whatsappLink(message) {
  const n = String(cfg.whatsappSalesNumber || "").replace(/\D/g, "");
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : "#contato";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

// Demonstração do chat
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.innerHTML = escapeHtml(text);
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function demoReply(text) {
  const t = text.toLowerCase();
  if (t.includes("serviço")) return "Claro! Temos atendimento personalizado, orçamento e suporte. Posso te mostrar as opções disponíveis.";
  if (t.includes("agend")) return "Perfeito! 😊 Me informe seu nome e o melhor período para atendimento. Nossa equipe confirma o horário.";
  if (t.includes("atendente") || t.includes("humano")) return "Sem problema. Vou encaminhar sua conversa para um atendente humano.";
  return "Entendi! Posso ajudar com serviços, agendamento, informações ou encaminhar você para nossa equipe.";
}

function sendDemo() {
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatInput.value = "";
  setTimeout(() => addMessage(demoReply(text), "bot"), 450);
}

sendBtn?.addEventListener("click", sendDemo);
chatInput?.addEventListener("keydown", e => { if (e.key === "Enter") sendDemo(); });

document.querySelectorAll(".quick-actions button").forEach(btn => {
  btn.addEventListener("click", () => {
    chatInput.value = btn.dataset.message || "";
    sendDemo();
  });
});

// Formulário
const form = document.getElementById("leadForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (!cfg.apiBaseUrl) {
    const msg = `Olá! Meu nome é ${data.name}. Tenho interesse em automatizar o WhatsApp da empresa ${data.business}. Meu número é ${data.phone}.`;
    status.textContent = "Abrindo seu WhatsApp...";
    window.open(whatsappLink(msg), "_blank");
    return;
  }

  status.textContent = "Enviando...";
  try {
    const response = await fetch(`${cfg.apiBaseUrl}${cfg.leadEndpoint}`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Falha");
    status.textContent = "Recebemos seus dados. Obrigado!";
    form.reset();
  } catch {
    status.textContent = "Não foi possível enviar agora. Tente novamente.";
  }
});

// Menu mobile simples
document.getElementById("menuBtn")?.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  const visible = getComputedStyle(nav).display !== "none";
  nav.style.display = visible ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "#090b0c";
  nav.style.flexDirection = "column";
  nav.style.borderBottom = "1px solid rgba(255,255,255,.09)";
});
