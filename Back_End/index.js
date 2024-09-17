import express from 'express'
import { dbConnection } from './src/DB/dbConnection.js'

const app = express()
app.use(express.json())


import routesPartida from './src/routes/partida.js'

app.use('/partida', routesPartida)

const PORT = 30001

app.listen(PORT, ()=>{
    console.log('server funcionando correctamente')
})
dbConnection();