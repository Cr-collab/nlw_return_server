import express from 'express'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

// GET , POST , PUT , PATCH , DELETE

// GET = buscar minhas informações
// POST = CADASTRAR  INFORMAÇÕES
// PUT  =  ATULAIZAR INFORMÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO

app.post('/feedbacks', async (request, response) => {
  
  const { type , comment , screenshot} = request.body;

    const feedeback =  await  prisma.feedback.create({
    data: {
      comment,
      type,
      screenshot
    }})
  return response.status(201).json(feedeback)
})

app.listen(3333, () => console.log('SERVER IS RUNNING IN PORT 3333 🚀'))
