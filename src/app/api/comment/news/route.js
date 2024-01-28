import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// get
export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        let {searchParams} = new URL(req.url);
        let news_id = parseInt(searchParams.get("news_id"))
        
        const res = await prisma.comments.findMany({
            where: {news_id:news_id},
            include: {users:{select:{firstName:true,lastName:true}}}
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}