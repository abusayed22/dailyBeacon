import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const id = parseInt(searchParams.get("id"))
        const res = await prisma.news_details.findUnique({
            where: {news_id:id},
            
        });

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}