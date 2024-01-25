import {jwtVerify,SignJWT} from 'jose'

// encoded
export const createToken = async(email,id) => {
    const payload = {email:email,id:id}
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let token = await new SignJWT(payload)      // if issuer TODO: await
            .setProtectedHeader({alg:"HS256"})
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER)
            .setExpirationTime(process.env.jwt_EXPIRATION_TIME)
            .sign(secret)

    return token;
}

// decoded
export const verifyToken = async(token) => {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let decode = await jwtVerify(token,secret)

    return decode['payload']
}
