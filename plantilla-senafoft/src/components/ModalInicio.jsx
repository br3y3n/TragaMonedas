import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {AuthContext} from '../context/AuthContext'
const ModalInicio = ({open, handleClose}) => {
    const {setIdPartida} = useContext(GlobalContext)
    const {user} = useContext(AuthContext)
    console.log(user)
    const [creditosIniciales, setCreditosIniciales] = useState();
    const crearPartida = async()=>{
        const response = await axios.post('http://127.0.0.1:30001/partida',{
            nombre , creditosIniciales
        })
        if(response.data.msg){
            setIdPartida(response.data.partida._id)
            alert(`tus creditos iniciales son ${creditosIniciales}`)
            handleClose()
        }
    }
  return (
    <>
    {
        open&& (
    <Dialog size="sm" open={open}>
      <DialogHeader>Ingresa tus creditos iniciales</DialogHeader>
      <DialogBody>
        <Input 
        onChange={(e)=> setCreditosIniciales(e.target.value)}
        placeholder="000.000" />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          className="mr-1"
          onClick={()=> handleClose()}
        >
          <span>Cancel</span>
        </Button>
        <Button onClick={()=>crearPartida()} variant="gradient" color="green" >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
         )
        }
  </>
  )
}

export default ModalInicio
