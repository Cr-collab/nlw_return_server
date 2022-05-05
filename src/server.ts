import express from 'express'

const app = express()

app.use(express.json())

// GET , POST , PUT , PATCH , DELETE

// GET = buscar minhas informações
// POST = CADASTRAR  INFORMAÇÕES
// PUT  =  ATULAIZAR INFORMÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO

app.post('/feedbacks', (request, response) => {
  console.log(request.body)
  return response.status(201).json(request.body)
})

app.listen(3333, () => console.log('SERVER IS RUNNING IN PORT 3333 🚀'))
