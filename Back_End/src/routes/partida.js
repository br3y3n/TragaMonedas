import { Router } from "express";
import { createPartida, getPartida, patchPartida } from "../controllers/partida.js";


const routesPartida = Router()

routesPartida.get('/:id', getPartida)
routesPartida.post('/', createPartida)
routesPartida.patch('/:id',patchPartida )

export default routesPartida