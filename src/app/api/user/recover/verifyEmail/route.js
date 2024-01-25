import { sendEmail } from '@/utility/email/EmailHandler';
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(req,res){
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url)
        const email = searchParams.get('email');

        const count = await prisma.users.count({
            where:{email:email}
        });

        if(count === 1) {
            const code = Math.floor(100000 + Math.random() * 900000);
            const emailText = `Your OTP is ${code}`;
            const emailSubject = `Email verification for reset password.`;

            await sendEmail(email,emailText,emailSubject)

            await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString() }
            })


            return NextResponse.json({ status: "success", msg: "verified email send otp" });

        } else{
            return NextResponse.json({ status: "faild", msg: "User not found!" });
        }
    


    } catch (error) {
        return NextResponse.json({status:"Email verification Failed!",data:error})
    }
}