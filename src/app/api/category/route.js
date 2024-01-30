import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// get
export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const res = await prisma.categories.findMany({
            select:{
                id:true,
                name:true
            }
        });

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}

// post
export async function POST(req,res) {
    try {
        const prisma = new PrismaClient();
        const reqData= await req.json()
        const res = await prisma.categories.create({
            data:reqData,
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}