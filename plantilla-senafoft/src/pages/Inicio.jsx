import { Button } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import ModalInicio from '../components/ModalInicio';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
const Inicio = () => {
    const [modalInicio, setModalInicio] = useState(false);
    const {idPartida} = useContext(GlobalContext)
    const [partida, setPartida] = useState()
    const handleClose =()=>{
        setModalInicio(false)
    }
    console.log(idPartida)
  
    useEffect(()=>{
        const traerParitda = async()=>{
            if(idPartida){      
                const response = await axios.get(`http://127.0.0.1:30001/partida/${idPartida}`)
                setPartida(response.data.partidasUser)
            }
        }
        traerParitda()
    },[])

    console.log(partida)
  return (
    <article>
        <div className=' mt-10 ml-5 flex gap-5'>
        <Button onClick={()=>setModalInicio(true)}>Inicio</Button>
        <Button>Ajustes</Button>
        </div>

        <section>
      
        {partida && (
            <div>
                <div></div>
            </div>
        )}
        </section>

    <ModalInicio  open={modalInicio} handleClose={handleClose}/>
    </article>
  )
}

export default Inicio
