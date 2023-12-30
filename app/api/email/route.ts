// import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';

// export async function POST(request: NextRequest) {
//     const { email, name, message, phone } = await request.json();

//     const transport = nodemailer.createTransport({
//         service: 'gmail',
//         /* 
//         setting service as 'gmail' is same as providing these setings:
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true
//         If you want to use a different email provider other than gmail, you need to provide these manually.
//         Or you can go use these well known services and their settings at
//         https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
//     */
//         auth: {
//             user: process.env.MY_EMAIL,
//             pass: process.env.MY_PASSWORD,
//         },
//     });

//     const mailOptions: Mail.Options = {
//         from: process.env.MY_EMAIL,
//         to: process.env.MY_EMAIL,
//         // cc: email, (uncomment this line if you want to send a copy to the sender)
//         subject: `Message from ${name}`,
//         text: `Hi I'm ${name} with email (${email}) and phone number ${phone} \n ${message} \n From my portfolio site`,
//     };

//     const sendMailPromise = () =>
//         new Promise<string>((resolve, reject) => {
//         transport.sendMail(mailOptions, function (err) {
//             if (!err) {
//             resolve('Email sent');
//             } else {
//             reject(err.message);
//             }
//         });
//         });

//     try {
//         await sendMailPromise();
//         return NextResponse.json({ message: 'Email sent' });
//     } catch (err) {
//         return NextResponse.json({ error: err }, { status: 500 });
//     }
// }


import { promisify } from 'util';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
    },
});

const sendMailPromise = promisify(transport.sendMail.bind(transport));

export async function POST(request: NextRequest) {
    const { email, name, message, phone } = await request.json();

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name}`,
        text: `Hi I'm ${name} with email (${email}) and phone number ${phone} \n ${message} \n From my portfolio site`,
    };

    try {
        await sendMailPromise(mailOptions);
        const jsonResponse = { message: 'Email sent' };
        //console.log('Response:', jsonResponse); // Add this line for logging
        return NextResponse.json(jsonResponse);
    } catch (err) {
        const errorResponse = { error: err};
        //console.log('Error Response:', errorResponse); // Add this line for logging
        return NextResponse.json(errorResponse, { status: 500 });
    }
}
