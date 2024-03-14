import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function Add(props) {
  const [valor, setValor] = useState("");

  const handleNew = () => {
    axios
      .post("http://localhost:4000/enfermedades", {
        nombreEnfermedad: valor,
      })
      .then((response) => {
        Swal.fire({
          title: "¡Completado!",
          text: "La enfermedad introducida ha sido creada con exito",
          icon: "success",
          confirmButtonText: "Entendido",
        });
        props.fetchList()
        props.handleAdd()
      })
      .catch((e) => {
        Swal.fire({
          title: "Uy!, Ha ocurrido un error desconocido",
          text:e,
          icon: "error",
          confirmButtonText: "Oops",
        });
      });
  };
  // Función para manejar el cambio en el valor del campo
  const manejarCambio = (event) => {
    setValor(event.target.value);
  };

  return (
    <Box className='flex' >
      <TextField
        label="Sintoma Nuevo"
        variant="outlined"
        value={valor} // El valor del campo es controlado por el estado
        onChange={manejarCambio} // Actualiza el estado cuando el valor cambia
      />
      <Button  onClick={handleNew} className="uppercase bg-blue-500 text-white ">+</Button>

    </Box>
  );
}

export default Add;
