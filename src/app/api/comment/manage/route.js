import { PrismaClient } from '@prisma/client';
import { headers } from 'next/headers';
// import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

// comment create
export async function POST(req,res) {
    try {
        const prisma = new PrismaClient();
        let reqData = await req.json();

        const headerList = headers();
        const user_id = parseInt(headerList.get("id"))
        reqData['user_id']=user_id

        const res = await prisma.comments.create({
            data: reqData
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}


// comment delete
export async function DELETE(req,res) {
    try {
        const prisma = new PrismaClient();
        let reqData = await req.json();

        const headerList = headers();
        const user_id = parseInt(headerList.get("id"))
        const comment_id = await reqData['id']

        const res = await prisma.comments.deleteMany({
            where: {
                AND:{
                    id:comment_id,
                    user_id:user_id,
                }
            }
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}