import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, lazy, Suspense } from "react";

export default function BasicTable(props) {
/*   const [isModalOpen, setModal] = useState(false);
  const [personalData, setPersonalData] = useState({
    Nombre: "",
    Identificación: "",
    Genero: "",
    Fecha_de_Nacimiento: "",
    Alergias: "",
    Grupo_sanguíneo: "",
    Telefono_y_Telefono_secundario: "",
    Dirección: "",
  });
  const [medicalData, setMedicalData] = useState({
    Síntomas: "",
    Tension_sistólica_y_diastólica: "",
    Temperatura: "",
    Peso: "",
    Altura: "",
    Observaciones: "",
    Fecha_de_visita: "",
    Medico_responsable: "",
  });
  const LazyModal = lazy(() => import("./SelectedRegisterModal"));
  const isWomen = (sus) => {
    if (sus == "femenino") {
      return true;
    } else return false;
  };
  const closeModal = () => {
    setModal(false);
  };
  function filterAndDispatch(id) {
    const result = props.userList.find((item) => item.id === parseInt(id));
    setPersonalData({
      Nombre: result.persona.nombre + result.persona.apellido,
      Identificación: result.persona.identificacion,
      Genero: result.persona.genero,
      Fecha_de_Nacimiento: result.persona.fechaNacimiento,
      Alergias: result.persona.alergias,
      Grupo_sanguíneo: result.persona.tipoSangre,
      Telefono_y_Telefono_secundario:
        result.persona.telefono + " / " + result.persona.telefonoEmergencia,
      Dirección: result.persona.direccion,
    });
    setMedicalData({
      Sintomas: result.enfermedades.nombreEnfermedad,
      Tension_sistólica_y_diastólica:
        result.tensionSistolica + " / " + result.tensionDiastolica,
      Temperatura: result.temperatura,
      Peso: result.pese,
      Altura: result.altura,
      Observaciones: result.observaciones,
      Fecha_de_visita: result.fechaVisita,
      Medico_responsable: result.medico.nombreMedico,
    });
  } */
  function formatDate(fechaString) {
    console.log('before: ', fechaString)
    const fecha = new Date(fechaString);
    const dia = fecha.getDate().toString()
    const mes = fecha.getMonth()  // Los meses en JavaScript empiezan en 0
    const ano = fecha.getFullYear();
    console.log(`${dia}-${mes}-${ano}`)
    return `${dia}-${mes}-${ano}`;
   }
  const toggleModal = (event) => {
    filterAndDispatch(event.currentTarget.id);
    setModal(!isModalOpen);
  };
/*   useEffect(() => {
    console.log('useEffect!', personalData, medicalData)
  }, [personalData, medicalData]) */
  return (
    <TableContainer
      component={Paper}
      className="animationSlideIn mt-10 p-18 mr-10"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* aqui defino la cantidad de filas! */}
            <TableCell align="left">
              <b>Nombre </b>
            </TableCell>

            <TableCell align="left">
              <b>Síntoma principal</b>
            </TableCell>
            <TableCell align="left">
              <b>Peso</b>
            </TableCell>
            <TableCell align="left">
              <b>Altura</b>
            </TableCell>
            <TableCell align="left">
              <b>Temperatura</b>
            </TableCell>
            <TableCell align="left">
              <b>Presión arterial</b>
            </TableCell>
            <TableCell align="left">
              <b>Satisfacción del paciente con la atención</b>
            </TableCell>
            <TableCell align="left">
              <b>Médico responsable por la consulta</b>
            </TableCell>
            <TableCell align="left">
              <b>Fecha de visita</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userList.map((row, index) => (
            <TableRow
              key={row.index}
              className="hover:shadow-lg hover:bg-slate-200 "
            >
              <TableCell id="nombre">
                {row.persona_nombre + " " + row.persona_apellido}{" "}
              </TableCell>
              <TableCell>{row.enfermedad_nombreEnfermedad}</TableCell>
              <TableCell align="left">{row.peso}</TableCell>
              <TableCell align="left">{row.altura}</TableCell>
              <TableCell align="left">{row.temperatura}</TableCell>
              <TableCell align="left">{row.visitas_tensionSistolica} / {row.visitas_tensionDiastolica}</TableCell>
              <TableCell align="left">{row.visitas_satisfaccionPaciente}</TableCell>
              <TableCell align="left">{row.medico_nombreMedico} código: {row.medico_sacs}</TableCell>
              <TableCell align="left">{formatDate(row.fechavisita)}</TableCell>
              {/* <TableCell>{formatDate(row.fechaVisita)}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
{/*         {isModalOpen ? (
          <Box className="bg-slate-200 fixed inset-0 flex items-center justify-center z-50 rounded p-5 m-20 overflow-auto">
            <Button
              variant="contained"
              className="bg-red-500 top-0 right-0 absolute z-50 opacity-70"
              onClick={closeModal}
            >
              X
            </Button>
            <Suspense fallback={<div>Cargando ...</div>}>
              <LazyModal
                primary={Object.keys(personalData)}
                secundary={Object.values(personalData)}
                icon={true}
                Genero={isWomen(personalData.Genero)}
              />
              <LazyModal
                primary={Object.keys(medicalData)}
                secundary={Object.values(medicalData)}
              />
            </Suspense>
          </Box>
        ) : (
          <></>
        )} */}
      </Table>
    </TableContainer>
  );
}
