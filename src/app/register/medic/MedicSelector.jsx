"use client";
import { setMedico, resetMedico } from "@/redux/register/userData/medico/medico";
import { MedicationOutlined } from "@mui/icons-material";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MedicSelector = () => {
  const dispatch = useDispatch()
  const medico = useSelector((state) => state.medico);
  const [medicList, setMedicList] = useState([]);
  const axiosRoute = "http://localhost:4000/medico";
  const fetchMedicList = () => {
    axios.get(axiosRoute).then((response) => {
      setMedicList(response.data);
    });
  };
  const handleChange = (event) => {
    dispatch(setMedico(event.target.value))
  }
  useEffect(() => {
    fetchMedicList();
  }, []);
  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Medico / enfermera /responsable de la revision</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={medico}
          label="Age"
          variant="filled"
          onChange={handleChange}
          getOptionLabel = {(option) => option.name}
          defaultValue=""
        >
          {medicList.map((e) => (
            <MenuItem key={e.id} value={e}>
              {e.nombreMedico} - codigo: {e.sacs} - especialidad: {e.especialidad} 
              - nivel academico: {e.nivelAcademico !== null ? e.nivelAcademico.nivelAcademico : 'no tiene' }
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
};

export default MedicSelector;
