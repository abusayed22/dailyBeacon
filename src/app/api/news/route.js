import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// get
export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const res = await prisma.news_list.findMany({
            // include:{
            //     news_details: true,
            //     news_sliders: true,
            // }
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
        const reqData = await req.json()
        const res = await prisma.news_list.create({
            data:{
                title: reqData["title"],
                short_des: reqData["short_des"],
                thumnail: reqData['thumnail'],
                feature_id: 1,
                category_id: 1,
                type: reqData["type"],
                news_sliders:{
                    create:{
                        short_title: reqData["s_short_title"],
                        img: reqData["s_img"],
                    }
                },
                news_details: {
                    create: {
                        long_des: reqData["d_long_des"],
                        img_1: reqData["d_img_1"],
                        img_2: reqData["d_img_2"],
                        img_3: reqData["d_img_3"],
                    }
                }
            }
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}