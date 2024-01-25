import { createToken } from '@/utility/token/JWTTokenHandler';
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req,res){
    try {
        const prisma = new PrismaClient();
    let reqData = await req.json();
        
    const res = await prisma.users.findUnique({
        where:reqData
    })
    
    if(res.length === 0) {
        return NextResponse.json({status:"user no exit!",data: res})

    } else {

        const token = await createToken(res["email"],res['id']);
        const tokenDuration = new Date(Date.now() + 24*60*60*1000);
        const cookieString = `token=${token}; expires=${tokenDuration.toUTCString()};path=/`

        return NextResponse.json({status:"Login Successfully",data: token},{status:200,headers:{'set-cookie':cookieString}})
    }


    } catch (error) {
        console.log(error)
        return NextResponse.json({status:"Register Failed!",data:error})
    }
}