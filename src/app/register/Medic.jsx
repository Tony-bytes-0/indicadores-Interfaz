import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSacs } from "@/redux/register/userData/medico/sacs";
import { setNombreMedico } from "@/redux/register/userData/medico/nombreMedico";
import { setEspecialidad } from "@/redux/register/userData/medico/especialidad";
import Separador from "@/components/Separador";
import axios from "axios";

export default function Medic() {
  const dispatch = useDispatch();
  const sacs = useSelector((state) => state.sacs);
  const nombreMedico = useSelector((state) => state.nombreMedico);
  const especialidad = useSelector((state) => state.especialidad);

  const handleSacs = (event) => {
    dispatch(setSacs(event.target.value));
  };
  const handleNombreMedico = (event) => {
    dispatch(setNombreMedico(event.target.value));
  };
  const handleEspecialidad = (event) => {
    dispatch(setEspecialidad(event.target.value));
  };

  const sm = { width: "25%", maxWidth: "25%", padding: "5px" };

  function fetchSacs(sacs) {
    console.log("se va a enviar: ", sacs);

    axios
      .get("http://localhost:4000/medico/" + sacs)
      .then((response) => {
        dispatch(setNombreMedico(response.data.nombreMedico));
        dispatch(setEspecialidad(response.data.especialidad));
      })
      .catch((e) => {
        console.log("no existe ese codigo SACS en la base de datos");
      })
      .finally(() => {
        console.log("se termino la busqueda!");
      });
  }
  const postMedic = () => {
    axios
      .post("http://localhost:4000/medico", {
        sacs,
        nombreMedico,
        especialidad,
      })
      .then((response) => {
        const msj = `${nombreMedico} hasido registrado con exito, con el codigo SACS: ${sacs}`
        alert(msj)
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <Grid container className="fadeIn p-6">
      <Separador label={"Datos del Medico"} />

      <Grid item xs={12}>
        <div>
          <TextField
            sx={sm}
            label="SACS "
            variant="filled"
            onChange={handleSacs}
            value={sacs}
            onBlur={() => fetchSacs(sacs)}
            required
          />

          <TextField
            sx={sm}
            label="nombre medico"
            variant="filled"
            onChange={handleNombreMedico}
            value={nombreMedico}
          />

          <TextField
            sx={sm}
            label="especialidad"
            variant="filled"
            onChange={handleEspecialidad}
            value={especialidad}
          />

          <Button
            variant="contained"
            className="bg-blue-600 m-1 p-3"
            onClick={postMedic}
          >
            Añadir Medico
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
