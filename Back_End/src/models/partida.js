import mongoose from "mongoose";

const partidaSchema = mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        creditosIniciales: {
            type:Number,
            require:true,
            trim:true
        },
        creditosFinal: {
            type:Number,
            require:true,
            trim:true,
            default:0
        },
        numeroIntentos: {
            type:Number,
            require:true,
            trim:true,
            default:0

        },
        acertietos: {
            type:Number,
            require:true,
            trim:true,
            default:0

        },
        desaciertos: {
            type:Number,
            require:true,
            trim:true,
            default:0
        },
    }
)

const PartidaModel = mongoose.model('partida', partidaSchema)

export default PartidaModel