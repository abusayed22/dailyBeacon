import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req,res){
    try {
        const prisma = new PrismaClient();
    let reqData = await req.json();
    reqData["otp"]="0";
        
    const res = await prisma.users.create({
        data: reqData
    })
    

    return NextResponse.json({status:"Register Successfully",data: res})

    } catch (error) {
        return NextResponse.json({status:"Register Failed!",data:error})
    }
}