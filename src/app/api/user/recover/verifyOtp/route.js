import { sendEmail } from '@/utility/email/EmailHandler';
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req,res){
    try {
        const prisma = new PrismaClient();
        const reqData = await req.json();

        const count = await prisma.users.count({
            where:reqData
        });

        if(count === 1) {
           
            return NextResponse.json({ status: "success", msg: "otp match done" });

        } else{
            return NextResponse.json({ status: "failed", msg: "Otp is not valid!" });
        }
    

    } catch (error) {
        return NextResponse.json({status:"Email verification Failed!",data:error})
    }
}