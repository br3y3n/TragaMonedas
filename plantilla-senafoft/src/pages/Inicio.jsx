import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import ModalInicio from "../components/ModalInicio";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
const Inicio = () => {
  const [modalInicio, setModalInicio] = useState(false);
  const { idPartida } = useContext(GlobalContext);
  const [partida, setPartida] = useState({
    acertietos: 0,
    creditosFinal: 0,
    creditosIniciales: 10000,
    desaciertos: 0,
    nombre: "brayan delgado",
    numeroIntentos: 0,
  });
  const [valorApostar, setValorApostar] = useState(0);
  const [numeroRandom, setNumeroRandom] = useState([]);
  const handleClose = () => {
    setModalInicio(false);
  };
  console.log(idPartida);

  useEffect(() => {
    const traerParitda = async () => {
      if (idPartida) {
        const response = await axios.get(
          `http://127.0.0.1:30001/partida/${idPartida}`
        );
        setPartida(response.data.partidasUser);
      }
    };
    traerParitda();
  }, [idPartida]);

  const numRandom =()=>{
      if(numeroRandom.length >=3){
    setInterval(()=>{
        const num = Math.floor(Math.random() * 10)
        setNumeroRandom(prev => [... prev, num])
        },500)
    }
  }
  console.log(numeroRandom)
  return (
    <article>
      <div className=" mt-10 ml-5 flex gap-5">
        <Button onClick={() => setModalInicio(true)}>Inicio</Button>
        <Button>Ajustes</Button>
      </div>

      <section>
        {partida && (
          <div>
            <div className="flex gap-10 justify-end mr-10 text-lg drop-shadow-lg font-semibold">
              <div className="text-center">
                <h1>Creditos iniciales</h1>
                <h1 className="text-blue-gray-700">
                  {partida.creditosIniciales}
                </h1>
              </div>
              <div className="text-center">
                <h1>aciertos</h1>
                <h1 className="text-blue-gray-700">{partida.acertietos}</h1>
              </div>
              <div className="text-center">
                <h1>desaciertos</h1>
                <h1 className="text-blue-gray-700">{partida.desaciertos}</h1>
              </div>
              <div className="text-center">
                <h1>numero intentos</h1>
                <h1 className="text-blue-gray-700">{partida.numeroIntentos}</h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
              <h1 className="text-blue-gray-300 text-4xl mt-5 drop-shadow-md">
                Numero Random
              </h1>
              <h1 className="text-9xl drop-shadow-lg font-extralight">756</h1>
              <h1 className="text-blue-gray-300 text-4xl mt-5 drop-shadow-md">
                Valor Apostar
              </h1>
              <h1 className="text-6xl drop-shadow-lg font-extralight ">
                {valorApostar}
              </h1>
              <div className="flex gap-5 text-3xl">
                <button onClick={() => setValorApostar(valorApostar + 10)}>
                  ➕
                </button>
                <button onClick={() => setValorApostar(valorApostar - 10)}>
                  ➖
                </button>
              </div>
              <button onClick={()=>numRandom()} className="bg-blue-gray-800 text-white shadow-md w-96 py-3 rounded-lg">
                Apostar
              </button>
            </div>
          </div>
        )}
      </section>

      <ModalInicio open={modalInicio} handleClose={handleClose} />
    </article>
  );
};

export default Inicio;
