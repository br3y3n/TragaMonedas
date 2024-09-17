import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'
import { dbConnection } from './src/DB/dbConnection.js'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));



import routesPartida from './src/routes/partida.js'
import authRouter from './src/routes/auth.routes.js'

app.use('/partida', routesPartida)
app.use('/api', authRouter)

const PORT = 30001

app.listen(PORT, ()=>{
    console.log('server funcionando correctamente')
})
dbConnection();