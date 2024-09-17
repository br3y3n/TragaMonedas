import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const ModalAjustes = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Reglas
        </Button>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Reglas del juego</DialogHeader>
          <DialogBody>
            <div>
              <ul>
                <li>- Ingresa el numero de creditos maximo de 50 creditos.</li>
                <li>- Por cada tiro vas a apostar 5 creditos</li>
                <li>- Si tienes 3 numero iguales significa que ganaste, con lo cual sumaras 10 creditos.</li>
                <li>- En caso tal de que los numeros no concuerden perderas tus 5 creditos.</li>
                <li>- Si te qeudas sin creditos perderas.</li>
              </ul>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Cerrar</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );

}

export default ModalAjustes;
