import express from 'express'
import cors from "cors"
import { dbConnection } from './src/DB/dbConnection.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));


import routesPartida from './src/routes/partida.js'

app.use('/partida', routesPartida)

const PORT = 30001

app.listen(PORT, ()=>{
    console.log('server funcionando correctamente')
})
dbConnection();