import express from 'express'
import cors from 'cors'
import db from './db.js'
import userRouter from './Routes/userRoutes.js'
import produtoRouter from './Routes/produtoRoutes.js'
import fornecedorRouter from './Routes/fornecedorRoutes.js'
import carrinhoRouter from './Routes/carrinhoRoutes.js'
import bannerRouter from './Routes/bannerRoutes.js'

const app = express()
const port = process.env.port || 3000;

app.use(express.json())
app.use(cors())

db.sync(() => console.log('Banco de dados preparado'))

app.use('/users', userRouter)
app.use('/produto', produtoRouter)
app.use('/fornecedor', fornecedorRouter)
app.use('/carrinho', carrinhoRouter)
app.use('/banner', bannerRouter)

app.listen(port, () => console.log("server rodando na porta "+port))