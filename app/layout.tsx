import "./globals.css";
import Link from "next/link";
export const metadata={title:"FlowBot — Painel",description:"Painel de automação WhatsApp"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <div className="layout"><aside className="side"><div className="brand">Flow<b>Bot</b></div><nav className="nav">
 <Link href="/">Dashboard</Link><Link href="/conversations">Conversas</Link><Link href="/leads">Leads</Link><Link href="/products">Produtos</Link><Link href="/bot">Bot / IA</Link><Link href="/knowledge">Conhecimento</Link><Link href="/whatsapp">WhatsApp</Link><Link href="/settings">Configurações</Link>
 </nav></aside><main className="main">{children}</main></div>
}