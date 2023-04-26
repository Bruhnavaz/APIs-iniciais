import express from 'express'
import db from './db.js'
import userRouter from './Routes/userRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

app.use('/users', userRouter)

app.listen(port, () => console.log("server rodando na porta "+port))