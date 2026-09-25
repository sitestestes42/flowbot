import {NextRequest,NextResponse} from "next/server";
import {db} from "@/lib/prisma";

export async function GET(req:NextRequest){
 const {searchParams}=new URL(req.url);
 const mode=searchParams.get("hub.mode");
 const token=searchParams.get("hub.verify_token");
 const challenge=searchParams.get("hub.challenge");
 if(mode==="subscribe" && token===process.env.WHATSAPP_VERIFY_TOKEN) return new NextResponse(challenge||"");
 return new NextResponse("Forbidden",{status:403});
}

export async function POST(req:NextRequest){
 try{
  const body=await req.json();
  // A estrutura abaixo é o ponto de entrada. O processamento completo pode
  // ser expandido para salvar mensagens, chamar Gemini e responder pelo WhatsApp.
  console.log("WhatsApp webhook:",JSON.stringify(body));
  return NextResponse.json({received:true});
 }catch{return NextResponse.json({received:false},{status:400});}
}