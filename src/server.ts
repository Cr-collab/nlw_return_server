import express from 'express'
import nodemailer from 'nodemailer';
import { prisma } from './prisma'

const app = express()

app.use(express.json())

// GET , POST , PUT , PATCH , DELETE

// GET = buscar minhas informações
// POST = CADASTRAR  INFORMAÇÕES
// PUT  =  ATULAIZAR INFORMÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c731211408f155",
    pass: "32d69137c2d4ff"
  }
});


app.post('/feedbacks', async (request, response) => {
  
  const { type , comment , screenshot} = request.body;

    const feedeback =  await  prisma.feedback.create({
    data: {
      comment,
      type,
      screenshot
    }})


    await transport.sendMail({
      from: "Equipe BCR <oi@feedget.com>",
      to: "Cristiano Azevedo <cristiccorrea@gami.com>",
      subject: "Novo  feedback",
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p> Tipo do feedback ${type}</p>`,
        `<p> Comentário : ${comment}</p>`,
        `</div>`
      ].join('\n')
    })
    
  return response.status(201).json(request.body)
})

app.listen(3333, () => console.log('SERVER IS RUNNING IN PORT 3333 🚀'))
