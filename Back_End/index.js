import express from 'express'
import routesPartida from './src/routes/partida.js'

const app = express()

app.use('/partida', routesPartida)

const PORT = 30001

app.listen(PORT, ()=>{
    console.log('server funcionando correctamente')
})