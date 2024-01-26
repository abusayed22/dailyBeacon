import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// get
export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const res = await prisma.news_sliders.findMany();

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}

