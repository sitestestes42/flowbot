import {NextRequest,NextResponse} from "next/server";
export async function POST(req:NextRequest){
 const {message,system}=await req.json();
 if(!process.env.GEMINI_API_KEY) return NextResponse.json({error:"GEMINI_API_KEY não configurada"},{status:500});
 const r=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+process.env.GEMINI_API_KEY,{
  method:"POST",headers:{"Content-Type":"application/json"},
  body:JSON.stringify({systemInstruction:{parts:[{text:system||"Você é um atendente profissional."}]},contents:[{role:"user",parts:[{text:message}]}]})
 });
 if(!r.ok)return NextResponse.json({error:"Falha na IA"},{status:r.status});
 const data=await r.json();
 const text=data?.candidates?.[0]?.content?.parts?.[0]?.text||"Não consegui responder agora.";
 return NextResponse.json({text});
}