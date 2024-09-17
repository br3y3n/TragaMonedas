import PartidaModel from "../models/partida.js"

export const createPartida = async (req,res)=>{
    try {
        const data = req.body
        const partida = await PartidaModel.create(data)

        return res.status(201).json({
            msg:'partida creada exitosamente',
            partida
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg:'hubo un error',
            error:error
        })
    }
}

export const getPartida = async(req, res)=>{
    try {
        const {id} = req.params
        const partidasUser = await PartidaModel.findOne({_id:id})

        if(partidasUser){
            return res.status(200).json({
                partidasUser
            })
        }
        return res.status(404).json({
            msg:'no tienes partidas '
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg:'hubo un error',
            error:error
        })
        
    }
}

export const patchPartida =async (req,res)=>{
    try {
        const {id} = req.params
        const data = req.data
        const partida = await PartidaModel.findByIdAndUpdate(id, data,
            { new: true }
        );
        if(partida){
            return res.status(200).json({
                partida
            })

        }

        return res.status(401).json({
            msg:'partida no encontrada'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg:'hubo un error',
            error:error
        })
    }
}