import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "/public/staticAssets/logoMinisterioParaLaSalud.png";
import fundaSalud from "/public/staticAssets/logoAmbulatorio.png";
import venezuelaDeTodos from "public/staticAssets/VenezuelaDeTodos.png";
import Image from "next/image";
import Separador from "@/components/Separador";

function Membrete(props) {
  const images = [
    {
      src: logo,
      width: 300,
      height: "auto",
      alt: "Logo Gobierno bolivariano",
    },
    {
      src: fundaSalud,
      width: 200,
      height: "auto",
      alt: "Fudnasalud logo",
    },
  ];
  const membreteText = [
    "REPUBLICA BOLIVARIANA DE VENEZUELA",
    " MINISTERIO DEL PODER POPULAR PARA LA SALUD",
    "FUNDACION PARA LA SALUD DEL ESTADO SUCRE",
  ];
  const getDate = () => {
    const hoy = new Date(Date.now());
    const año = hoy.getFullYear();
    const mes = hoy.getMonth() + 1; // Los meses en JavaScript comienzan en 0
    const dia = hoy.getDate();
    // Asegurarse de que el mes y el día sean de dos dígitos
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    return `${diaFormateado}-${mesFormateado}-${año}`;
  };
  const dinamicMsj = [
    " que padecen de: ",
    " residentes de la localidad: ",
    " atendidos entre las fechas: ",
    "y: ",
    " con fecha de nacimiento desde: ",
    "hasta: ",
    " mostrando pacientes del género: ",
  ];
  console.log('props de membrete: ', props)
  return (
    <Grid container xs={12}>
      {images.map((e) => (
        <Grid item xs={3} key={e.alt}>
          <Image src={e.src} width={e.width} height={e.height} alt={e.alt} />
        </Grid>
      ))}
      <Grid item xs={3}>
        {membreteText.map((e) => (
          <Grid item xs={12} key={e}>
            <span>
              <Typography variant="caption">{e}</Typography>
            </span>
          </Grid>
        ))}
      </Grid>
      <Image
        src={venezuelaDeTodos}
        width={200}
        height={"auto"}
        alt="Fudnasalud logo"
      />
      {/*primer nivel ____________________________________________________*/}
      <Grid item xs={12} margin={5}></Grid>
      <Grid item xs={6}>
        <Typography variant="caption" textAlign={"left"} fontSize={16}>
          <b>Fecha: {getDate()}</b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="caption" textAlign={"left"} fontSize={16}>
          <b>Firma del responsable: ___________________________</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          textAlign={"center"}
          marginTop={5}
          marginBottom={5}
        >
          {props.label}
          
        </Typography>
        {[props.enfermedad, props.localidad, props.fechaInicio, props.fechaFin, props.edadMin, props.edadMax, props.genero].map((e, index) => (
          <Typography
            key={index}
            variant="h6"
            textAlign={"center"}
            marginTop={1}
            marginBottom={1}
          >
            {e !== null && e !== undefined && e !== "" ? ` ${dinamicMsj[index]} ${e}` : ""}
          </Typography>
        ))}
        <Separador />
      </Grid>
    </Grid>
  );
}

export default Membrete;
