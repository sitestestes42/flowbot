import {db} from "@/lib/prisma";
export default async function Dashboard(){
 const company=await db.company.findFirst();
 const contacts=company?await db.contact.count({where:{companyId:company.id}}):0;
 const messages=company?await db.message.count({where:{companyId:company.id}}):0;
 const leads=company?await db.lead.count({where:{companyId:company.id}}):0;
 return <><div className="top"><div><h1>Dashboard</h1><div className="sub">{company?.name||"Sua empresa"} · visão geral</div></div><span className="pill">● Sistema online</span></div>
 <div className="grid"><div className="card metric"><small>Contatos</small><strong>{contacts}</strong><span className="up">base total</span></div><div className="card metric"><small>Mensagens</small><strong>{messages}</strong><span className="up">histórico</span></div><div className="card metric"><small>Leads</small><strong>{leads}</strong><span className="up">capturados</span></div><div className="card metric"><small>IA</small><strong>ON</strong><span className="up">automação ativa</span></div></div>
 <div className="section"><h2 className="section-title">Comece configurando seu FlowBot</h2><div className="grid"><a className="card" href="/bot"><b>1. Configure a IA</b><p className="sub">Nome, personalidade e regras.</p></a><a className="card" href="/knowledge"><b>2. Adicione conhecimento</b><p className="sub">Informações que o bot pode usar.</p></a><a className="card" href="/whatsapp"><b>3. Conecte o WhatsApp</b><p className="sub">Credenciais e webhook.</p></a><a className="card" href="/products"><b>4. Cadastre serviços</b><p className="sub">Produtos, preços e descrições.</p></a></div></div></>
}