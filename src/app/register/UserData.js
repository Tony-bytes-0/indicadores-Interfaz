//MUI Components
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextareaAutosize,
  ButtonGroup,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
//Redux
import { useDispatch, useSelector } from "react-redux";

import { setNombre } from "@/redux/register/userData/person/nombre";
import { setApellido } from "@/redux/register/userData/person/apellido";
import { setIdentificacion } from "@/redux/register/userData/person/identificacion";
import { setGenero } from "@/redux/register/userData/person/genero";
import { setTipoSangre } from "@/redux/register/userData/person/tipoSangre";
import { setFechaNacimiento } from "@/redux/register/userData/person/fechaNacimiento";
import { setTelefono } from "@/redux/register/userData/person/telefono";
import { setTelefonoEmergencia } from "@/redux/register/userData/person/telefonoEmergencia";
import { setDireccion } from "@/redux/register/userData/person/direccion";
import { setLocalidad } from "@/redux/register/userData/person/localidad";
import {
  clearUpdatePerson,
  setUpdatePerson,
} from "@/redux/register/userData/person/updatePerson";

//Axios
import axios from "axios";

//Modulos
import { bloodList } from "@/app/register/validations"; //objeto con personas estatico
import { isDateNotInFuture } from "@/app/register/validations";
import Separador from "@/components/Separador";

const redAsteriskLocal = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});
export default function UserData(props) {
  //MAIN
  const dispatch = useDispatch(); //DEV
  const validateNumber = /^\d{1,9}$/;
  const validatePhone = /^\d{1,11}$/;

  const alphabetic = /^[a-zA-Z]+$/;
  //Estado de variables de datos
  const nombre = useSelector((state) => state.nombre);
  const apellido = useSelector((state) => state.apellido);
  const identificacion = useSelector((state) => state.identificacion);
  const genero = useSelector((state) => state.genero);
  const fechaNacimiento = useSelector((state) => state.fechaNacimiento);
  const telefono = useSelector((state) => state.telefono);
  const tipoSangre = useSelector((state) => state.tipoSangre);
  const telefonoEmergencia = useSelector((state) => state.telefonoEmergencia);
  const direccion = useSelector((state) => state.direccion);

  const handleLastName = (event) => {
    const inputValue = event.target.value;
    // Permitir borrar el último dígito o una cadena vacía
    if (inputValue === "" || inputValue.match(alphabetic)) {
      dispatch(setApellido(inputValue));
    }
  };
  const handleName = (event) => {
    const inputValue = event.target.value;
    // Permitir borrar el último dígito o una cadena vacía
    if (inputValue === "" || inputValue.match(alphabetic)) {
      dispatch(setNombre(inputValue));
    }
  };
  const handleGender = (event) => {
    dispatch(setGenero(event.target.value));
  }; //GENDER
  const handleBirthdate = (event) => {
    const isValid = isDateNotInFuture(event.target.value);
    if (isValid) {
      dispatch(setFechaNacimiento(event.target.value));
    } else {
      alert("no se pueden seleccionar fechas en el futuro!");
      dispatch(setFechaNacimiento("2000-01-01"));
    }
  }; //BIRTHDATE
  const handleBloodType = (event) => {
    dispatch(setTipoSangre(event.target.value));
  }; //BLOODTYPE
  const handleDirection = (event) => {
    dispatch(setDireccion(event.target.value));
  }; //DIRECTION
  const handleDni = (event) => {
    const inputValue = event.target.value;
    // Permitir borrar el último dígito o una cadena vacía
    if (inputValue === "" || inputValue.match(validateNumber)) {
      dispatch(setIdentificacion(inputValue));
    }
  };
  const handleCellphone = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || inputValue.match(validatePhone) != null) {
      dispatch(setTelefono(event.target.value));
    }
  }; //CELLPHONE
  const handleEmergency = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || inputValue.match(validatePhone) != null) {
      dispatch(setTelefonoEmergencia(event.target.value));
    }
  }; //EMERGENCY

  const estadosList = useSelector((state) => state.estadoList);
  const municipioList = useSelector((state) => state.municipioList);
  const parroquiaList = useSelector((state) => state.parroquiaList);
  const comunidadList = useSelector((state) => state.comunidadList);
  const sectorList = useSelector((state) => state.sectorList);

  function setValues(x) {
    dispatch(setNombre(x.nombre));
    dispatch(setApellido(x.apellido));
    dispatch(setGenero(x.genero));
    dispatch(setIdentificacion(x.identificacion));
    dispatch(setTelefono(x.telefono));
    dispatch(setTelefonoEmergencia(x.telefonoEmergencia));
    dispatch(setFechaNacimiento(x.fechaNacimiento));
    dispatch(setTipoSangre(x.tipoSangre));
    dispatch(setDireccion(x.direccion));
    dispatch(setUpdatePerson(x));
    dispatch(setLocalidad(x.localidad));
  }

  function getPersonByDni() {
    axios
      .get("http://localhost:4000/persona/" + identificacion)
      .then((response) => {
        setValues(response.data);
      })
      .catch((e) => {
        console.log("no existe esa cedula en la base de datos");
        dispatch(clearUpdatePerson());
      })
      .finally(() => {
        console.log("se termino la busqueda!");
      });
  }
  const sm = { width: "25%", maxWidth: "25%", padding: "5px" };
  const full = { width: "100%", display: "flex", padding: "0px" };

  return (
    <>
      <Grid container sx={{ padding: "2%" }} spacing={1} className="fadeIn">
        <Separador label="Datos Personales del Paciente" />
        <Grid item xs={12}>
          <ThemeProvider theme={redAsteriskLocal}>
            <TextField
              sx={sm}
              label={"Cedula "}
              variant="filled"
              value={identificacion}
              onChange={handleDni}
              onBlur={() => {
                getPersonByDni();
              }}
              required
            />

            <TextField
              sx={sm}
              label="Nombre"
              variant="filled"
              onChange={handleName}
              value={nombre}
              required
            />
            <TextField
              sx={sm}
              label="Apellido"
              variant="filled"
              value={apellido}
              onChange={handleLastName}
              required
            />
          </ThemeProvider>

          <FormControl sx={sm}>
            <InputLabel>Genero</InputLabel>
            <Select
              label="Genero"
              variant="filled"
              value={genero}
              onChange={handleGender}
              defaultValue={""}
            >
              <MenuItem value={"masculino"}>Masculino</MenuItem>
              <MenuItem value={"femenino"}>Femenino</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Telefono"
            sx={sm}
            variant="filled"
            value={telefono}
            onChange={handleCellphone}
          />
          <TextField
            label="Telefono de Emergencia"
            sx={sm}
            variant="filled"
            value={telefonoEmergencia}
            onChange={handleEmergency}
          />
          <ThemeProvider theme={redAsteriskLocal}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              sx={sm}
              value={fechaNacimiento}
              InputLabelProps={{ shrink: true }}
              variant="filled"
              onChange={handleBirthdate}
              required
            />
          </ThemeProvider>
          <FormControl sx={sm}>
            <InputLabel>Tipo de Sangre</InputLabel>
            <Select
              label="Tipo de Sangre"
              variant="filled"
              id="BloodType"
              value={tipoSangre}
              onChange={handleBloodType}
              defaultValue=""
            >
              {bloodList.map((e) => (
                <MenuItem key={e + "blood"} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Separador label="Localidad del Paciente" />
      </Grid>

      <Grid item xs={12} className="text-center">
        <TextareaAutosize
          className="text-center items-center m-auto border-solid border-4 rounded"
          aria-label="minimum height"
          minRows={2}
          placeholder="Direccion de la Habitacion"
          style={{ width: "90%", display: "flex" }}
          value={direccion}
          onChange={handleDirection}
        />
      </Grid>

      <Box className="centrate">
        <ButtonGroup
          disableElevation
          className="centrate"
          variant="contained"
          aria-label="Disabled buttons"
          sx={{ padding: "10px", margin: "10px", alignItems: "center" }}
        >
          {/* <Button onClick={() => {console.log(identificacion.length)}} >Ver sector</Button> */}
        </ButtonGroup>
      </Box>
    </>
  );
}
