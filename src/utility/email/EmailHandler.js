import nodemailer from "nodemailer"


export const sendEmail = async (emailTO,emailText,emailSubject) => {
    const transporter = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port: 25,
        secure:false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false}
    })

    let MailOptions={
        from: "DailyBecon news <info@teamrabbil.com>",
        to: emailTO,
        subject: emailSubject,
        text: emailText
    }

    return transporter.sendMail(MailOptions)
}