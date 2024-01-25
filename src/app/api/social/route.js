import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// get
export async function GET(req,res) {
    try {
        const prisma = new PrismaClient();
        const res = await prisma.socials.findMany();

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        return NextResponse.json({status:'failed!', data: error})
    }
}

// post
export async function POST(req,res) {
    try {
        const prisma = new PrismaClient();
        const res = await prisma.socials.create({
            data:{
                facebook: "https://www.facebook.com/",
                youtube: "https://www.youtube.com/",
                twitter: "https://www.twitter.com/",
                linkedin: "https://www.linkedin.com/",
                about: "about",
                address: "address",
            }
        })

        return NextResponse.json({status:'success', data: res})

    } catch (error) {
        
    }
}