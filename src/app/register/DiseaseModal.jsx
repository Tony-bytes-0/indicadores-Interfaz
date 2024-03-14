"use client";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Swal from 'sweetalert2';
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
        toggleModal()
        Swal.fire({
          title: '¡Completado!',
          text: 'La enfermedad introducida ha sido creada con exito',
          icon: 'success',
          confirmButtonText: 'Entendido'
      });
        setNombreEnfermedad("");
        props.fetchList()
      })
      .catch((e) => {
        Swal.fire({
          title: 'Uy!, Ha ocurrido un error desconocido',
          icon: 'error',
          confirmButtonText: 'Oops'
      });
      });
  };

  return (
    <>
      <Button
        variant="contained"
        className="bg-blue-500 items-center justify-center lowercase mx-2 p-4"
        onClick={toggleModal}
      >
        Agregar sintoma
      </Button>
      {isModalOpen ? (
        <></>
      ) : (
        <Box className="bg-slate-200 fixed inset-56 flex items-center justify-center z-50 rounded ">
          <Button
            variant="contained"
            className="bg-red-500 top-0 right-0 absolute"
            onClick={toggleModal}
            id="boton-modal-enfermedad"
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
