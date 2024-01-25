import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req,res){
    try {
        const prisma = new PrismaClient();
        const reqData = await req.json();

        const count = await prisma.users.count({
            where:{email: reqData["email"],otp:reqData['otp']}
        });

        if(count === 1) {

            await prisma.users.update({
                where: {email:reqData["email"]},
                data:{password:reqData["password"],otp:"0"}
            })
           
            return NextResponse.json({ status: "success", msg: "Password reset done" });

        } else{
            return NextResponse.json({ status: "failed", msg: "Otp is not valid!" });
        }
    

    } catch (error) {
        return NextResponse.json({status:"Email verification Failed!",data:error})
    }
}