import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const type = searchParams.get("type");
        const res = await prisma.news_list.findMany({
            where:{type:type}
        });

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}