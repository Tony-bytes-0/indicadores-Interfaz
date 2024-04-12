"use client";
import Separador from "@/components/Separador";
import GeneralAutoFillList from "@/components/generalAutofillList/GeneralAutoFillList";
import { setEspecialidad } from "@/redux/register/userData/medico/especialidad";
import { setNivelAcademico } from "@/redux/register/userData/medico/nivelAcademico";
import { setNombreMedico } from "@/redux/register/userData/medico/nombreMedico";
import { setSacs } from "@/redux/register/userData/medico/sacs";
import { resetMedico } from "@/redux/register/userData/medico/medico";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  ButtonGroup,
} from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const redAsteriskLocal = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

export default function AddMedic(props) {
  const validateNumber = /^\d{1,9}$/;
  const alphabetic = /^[a-zA-Z ]+$/;
  const dispatch = useDispatch();
  const sacs = useSelector((state) => state.sacs);
  const nombreMedico = useSelector((state) => state.nombreMedico);
  const especialidad = useSelector((state) => state.especialidad);
  const nivelAcademico = useSelector((state) => state.nivelAcademico);

  const normalizeFields = () => {
    dispatch(resetMedico());
    dispatch(setSacs(""));
    dispatch(setEspecialidad(""));
    dispatch(setNombreMedico(""));
  };

  const handleEspecialidad = (event) => {
    if (
      event.target.value.match(alphabetic) != null ||
      event.target.value === ""
    ) {
      dispatch(setEspecialidad(event.target.value));
    }
  };
  const handleNivelAcademico = (event) => {
    console.log(event);
    dispatch(setNivelAcademico(event));
  };
  const handleNombreMedico = (event) => {
    if (
      event.target.value.match(alphabetic) != null ||
      event.target.value === ""
    ) {
      dispatch(setNombreMedico(event.target.value));
    }
  };
  const handleSacs = (event) => {
    if (
      event.target.value.match(validateNumber) != null ||
      event.target.value === ""
    ) {
      dispatch(setSacs(event.target.value));
    }
  };

  function fetchSacs(sacs) {
    axios
      .get("http://localhost:4000/medico/" + sacs)
      .then((response) => {
        dispatch(setNombreMedico(response.data.nombreMedico));
        dispatch(setEspecialidad(response.data.especialidad));
        dispatch(
          setNivelAcademico(response.data.nivelAcademico.nivelAcademico)
        );
        if (typeof response.data === string) {
          console.log("si es string, deberia estar vacio!");
        } else {
          console.log("si existe u medico");
        }
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
        nivelAcademico,
      })
      .then((response) => {
        const msj = `${nombreMedico} hasido registrado con exito, con el codigo SACS: ${sacs}`;
        alert(msj);
        props.handleSelect();
        normalizeFields();
      })
      .catch((e) => {
        alert(e);
      });
  };
  const comunStyles = { marginLeft: 0.2, padding: 1 };
  const data = [
    { name: "Nombre", variable: nombreMedico, handler: handleNombreMedico },
    {
      name: "Especialidad",
      variable: especialidad,
      handler: handleEspecialidad,
    },
  ];
  return (
    /*     
      
      <Grid item xs={10}>
        <MedicSelector />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" className="bg-blue-600 m-1 p-4 lowercase">
          añadir medico
        </Button>
      </Grid> */
    <Grid container className="p-6">
      <Separador label={"Datos del Medico"} />
      <Grid item xs={2}>
        <ThemeProvider theme={redAsteriskLocal}>
          <TextField
            fullWidth
            sx={comunStyles}
            label={"SACS"}
            variant="filled"
            onChange={handleSacs}
            value={sacs}
            onBlur={() => fetchSacs(sacs)}
            required
          />
        </ThemeProvider>
      </Grid>

      {data.map((e) => (
        <Grid item xs={2.5} key={e.name}>
          <TextField
            fullWidth
            key={e.name}
            sx={comunStyles}
            label={e.name}
            variant="filled"
            onChange={e.handler}
            value={e.variable}
            required
          />
        </Grid>
      ))}
      <GeneralAutoFillList
        selectorGridXsSize={5}
        variable={nivelAcademico}
        route={"nivelAcademico"}
        handler={handleNivelAcademico}
        listLabel={"Nivel academico"}
        listNameProperty="nivelAcademico"
        buttonAddText={"+"}
        addLabel={"nueva mencion / grado academico"}
        addField={true}
      />
      <Grid item xs={12}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button className="bg-blue-600 m-1 p-4 lowercase" onClick={postMedic}>
            Añadir Medico
          </Button>
          <Button
            className="bg-red-600 m-1 p-4 lowercase"
            onClick={() => {
              props.handleSelect();
            }}
          >
            X
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
        ></ButtonGroup>
      </Grid>
    </Grid>
  );
}
