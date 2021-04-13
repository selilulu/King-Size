import nodemailer from 'nodemailer';

const sendEmail = (options)  => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'SendGrid',
        auth:{
          user: process.env.EMAIL_USERNAME || 'apikey',
          pass: process.env.EMAIL_PASSWORD || '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'   
        }
    })
    const mailOptions = {
        from: process.env.EMAIL_FROM || 'khiatihouda@gmail.com',
        to: options.to,
        subject: options.subject,
        html: options.text,
    };

    transporter.sendMail(mailOptions,function(err, info){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
export default sendEmail;