"use client";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function DiseaseModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [nombreEnfermedad, setNombreEnfermedad] = useState("");
  const handleName = (event) => {
    setNombreEnfermedad(event.target.value);
  };
  const postNombreEnfermedad = () => {
    axios
      .post("http://localhost:4000/enfermedades", {
        nombreEnfermedad: nombreEnfermedad,
      })
      .then((response) => {
        alert("la enfermedad introducida ha sido creada con exito");
        console.log({ nombreEnfermedad: nombreEnfermedad });
        setNombreEnfermedad("");
        setIsModalOpen(false);
        props.fetchList()
      })
      .catch((e) => {
        alert("error desconocido");
      });
  };

  return (
    <>
      <Button
        variant="contained"
        className="bg-blue-500 items-center justify-center lowercase my-10"
        onClick={toggleModal}
      >
        agregar enfermedad
      </Button>
      {isModalOpen ? (
        <></>
      ) : (
        <Box className="bg-slate-200 fixed inset-56 flex items-center justify-center z-50 rounded ">
          <Button
            variant="contained"
            className="bg-red-500 top-0 right-0 absolute"
            onClick={toggleModal}
          >
            X
          </Button>
          <Box className="w-full justify-center items-center flex">
            <FormControl>
              <TextField
                label="nombre de la enfermedad"
                onChange={handleName}
                value={nombreEnfermedad}
              ></TextField>
              <Button
                variant="contained"
                className="bg-blue-500 flex"
                onClick={postNombreEnfermedad}
              >
                <AddIcon />
              </Button>
            </FormControl>
          </Box>
        </Box>
      )}
    </>
  );
}
