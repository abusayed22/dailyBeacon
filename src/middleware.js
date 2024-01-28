import {NextResponse} from 'next/server'
import { verifyToken } from './utility/token/JWTTokenHandler'


export async function middleware(req,res) {
    try {
        const token = req.cookies.get("token");
        const payload = await verifyToken(token['value']);
        const reqHeader = new Headers(req.headers);
        reqHeader.set("email",payload["email"]);
        reqHeader.set("id",payload["id"])
        

        return NextResponse.next({request:{headers:reqHeader}})
    } catch (error) {

        const reqHeader = new Headers(req.headers);
        reqHeader.set("email","0")
        reqHeader.set("id","0")
        
    }
}