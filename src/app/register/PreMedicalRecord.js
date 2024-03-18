import {
  Grid,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setMedicalRecordDate } from "@/redux/register/preMedicalRecord/MedicalRecordDate";
//Reducers
import { setSize } from "@/redux/register/preMedicalRecord/size";
import { setWeight } from "@/redux/register/preMedicalRecord/weight";
import { setTemp } from "@/redux/register/preMedicalRecord/temp";
import { setDiastolic } from "@/redux/register/preMedicalRecord/diastolic";
import { setSistolic } from "@/redux/register/preMedicalRecord/sistolic";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { isDateNotInFuture } from "./validations";
import Swal from "sweetalert2";
const sm = { width: "33%", maxWidth: "33%", padding: "10px" };
const full = { width: "40%", padding: "7px" };

export default function PreMedicalRecord() {
  const redAsteriskLocal = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: "red" },
        },
      },
    },
  });

  const dispatch = useDispatch();
  //const validateNumber = /^\d{1,9}$/;
  const validateTemp = /^\d{1,2}$/;
  const validateSize = /^\d{1,3}$/;

  const size = useSelector((state) => state.altura);
  const weight = useSelector((state) => state.peso);
  const temp = useSelector((state) => state.temperatura);
  const sistolic = useSelector((state) => state.sistolica);
  const diastolic = useSelector((state) => state.diastolica);
  const [debug, setDebug] = useState(false)

  const handleDebug = () => {setDebug(!debug)}
  const handleSize = (event) => {
    const inputValue = event.target.value;
    // Permitir borrar el último dígito o una cadena vacía
    if (inputValue === "" || inputValue.match(validateSize)) {
      dispatch(setSize(inputValue));
    }
  };

  const handleWeight = (event) => {
    if (
      event.target.value.match(validateSize) != null ||
      event.target.value === ""
    ) {
      dispatch(setWeight(event.target.value));
    }
  };
  const handleTemp = (event) => {
    if (
      event.target.value.match(validateTemp) != null ||
      event.target.value === ""
    ) {
      dispatch(setTemp(event.target.value));
    }
  };
  const handleSistolic = (event) => {
    if (
      event.target.value.match(validateTemp) != null ||
      event.target.value === ""
    ) {
      dispatch(setSistolic(event.target.value));
    }
  };
  const handleDiastolic = (event) => {
    if (event.target.value.match(validateTemp) != null) {
      dispatch(setDiastolic(event.target.value));
    }
  };

  const medicalRecordDate = useSelector((state) => state.fechaVisita);


  const handleMedicalRecordDate = (event) => {
    if(debug){
      dispatch(setMedicalRecordDate(event.target.value));
    }else{
      const isValid = isDateNotInFuture(event.target.value);
      if (isValid) {
        dispatch(setMedicalRecordDate(event.target.value));
      } else {
        Swal.fire({
          title: "Oops",
          text: "No se pueden seleccionar fechas en el futuro!",
          icon: "error",
          confirmButtonText: "Entendido",
        });
        dispatch(setMedicalRecordDate('2000-01-01'))
      }
    }
  }

  return (
    <>
      <Grid item xs={9}>
        <Box className="centrate" sx={{ marginTop: "10px" }}>
          <TextField
            sx={sm}
            label="Altura (Centimetros)"
            onChange={handleSize}
            value={size}
          />

          <TextField
            sx={sm}
            label="Peso (Kilogramos)"
            onChange={handleWeight}
            value={weight}
          >
            Peso
          </TextField>
          <TextField
            sx={sm}
            label="Temperatura (Grados Celcius)"
            onChange={handleTemp}
            value={temp}
          >
            Temperatura
          </TextField>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          className="my-3"
        >
          <TextField
            sx={full}
            label="Tension Sistolica"
            value={sistolic}
            onChange={handleSistolic}
          >
            Presion Arterial
          </TextField>
          <Typography sx={{ fontSize: "35px" }}> / </Typography>
          <TextField
            sx={full}
            label="Tension diastolica"
            value={diastolic}
            onChange={handleDiastolic}
          >
            Presion Arterial
          </TextField>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ padding: "3%" }}>
          <ThemeProvider theme={redAsteriskLocal}>
            <InputLabel required>Fecha de Consulta</InputLabel>
          </ThemeProvider>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={medicalRecordDate}
            onChange={handleMedicalRecordDate}
            required
          ></TextField>
        </FormControl>
        
        
        {debug ? (
        <Box className="flex">
          <CheckIcon fontSize="large" sx={{color: '#00FF78'}} />
          <Button onClick={handleDebug}>debug</Button>
        </Box>
      ) : (
        <Box className="flex">
          <ClearIcon fontSize="large" sx={{color: '#FF2E00'}}  />
          <Button onClick={handleDebug}>debug</Button>
        </Box>
      )}
      </Grid>
    </>
  );
}
