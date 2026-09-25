import {NextRequest,NextResponse} from "next/server";
export async function POST(req:NextRequest){
 const {to,text}=await req.json();
 if(!process.env.WHATSAPP_ACCESS_TOKEN||!process.env.WHATSAPP_PHONE_NUMBER_ID)
  return NextResponse.json({error:"Credenciais do WhatsApp não configuradas"},{status:500});
 const url=`https://graph.facebook.com/v23.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
 const r=await fetch(url,{method:"POST",headers:{Authorization:`Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,"Content-Type":"application/json"},body:JSON.stringify({messaging_product:"whatsapp",to,type:"text",text:{body:text}})});
 const data=await r.json();
 return NextResponse.json(data,{status:r.status});
}