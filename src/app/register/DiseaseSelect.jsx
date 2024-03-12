import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEnfermedad } from "@/redux/register/preMedicalRecord/enfermedad";
import DiseaseModal from "./DiseaseModal";

import axios from "axios";
import { useEffect } from "react";

function DiseaseSelect() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const selected = useSelector((state) => state.enfermedades);
  const handleEnfermedad = (event) => {
    dispatch(setEnfermedad(event.target.value));
  };

  const fetchList = () => {
    axios.get("http://localhost:4000/enfermedades").then(function (response) {
      setList(response.data);
    });
  };

  useEffect(() => {
    fetchList();
  }, [dispatch]);

  return (
    <Grid item xs={12} className="w-max m-2 p-2">
      <FormControl fullWidth>
        {" "}
        <InputLabel>Enfermedad detectada</InputLabel>
        <Select
          variant="filled"
          label="Enfermedad detectada"
          value={selected}
          onChange={handleEnfermedad}
          defaultValue=""
        >
          {list.map((e) => (
            <MenuItem value={e.id} key={e.id + " Enfermedad detectada"}>
              {e.nombreEnfermedad}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DiseaseModal fetchList = {fetchList} />
    </Grid>
  );
}

export default DiseaseSelect;
