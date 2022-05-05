import cors from 'cors';
import express from 'express'
import { routes } from './routes';

const app = express()

app.use(cors({
    origin: 'https://localhost:3000'
}))
app.use(express.json())

// GET , POST , PUT , PATCH , DELETE

// GET = buscar minhas informações
// POST = CADASTRAR  INFORMAÇÕES
// PUT  =  ATULAIZAR INFORMÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO

app.use(routes)

app.listen(3333, () => console.log('SERVER IS RUNNING IN PORT 3333 🚀'))
