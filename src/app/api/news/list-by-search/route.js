import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const key = searchParams.get("key");
        const res = await prisma.news_list.findMany({
            where: {title:{contains:key}}
        });

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}