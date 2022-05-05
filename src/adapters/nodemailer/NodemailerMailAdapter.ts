import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer'; 

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c731211408f155",
      pass: "32d69137c2d4ff"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail (data: SendMailData) : Promise<void> {
        const  {body ,subject } =  data

        await transport.sendMail({
            from: "Equipe BCR <oi@feedget.com>",
            to: "Cristiano Azevedo <cristiccorrea@gami.com>",
            subject,
            html: body
          })
    };
    
}

