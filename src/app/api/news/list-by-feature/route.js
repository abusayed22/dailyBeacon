import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const {searchParams} = new URL(req.url);
        const featId = parseInt(searchParams.get("featId"));
        const res = await prisma.news_list.findMany({
            where: {
                feature_id: featId
            }
        });

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}