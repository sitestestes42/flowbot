import {PrismaClient} from "@prisma/client";
const db=new PrismaClient();
async function main(){await db.company.create({data:{name:"Empresa Demo",phone:"5511999999999",botName:"Ana",welcome:"Olá! Como posso ajudar?",prompt:"Você é a atendente da Empresa Demo. Seja profissional, simpática e objetiva."}})}
main().finally(()=>db.$disconnect());