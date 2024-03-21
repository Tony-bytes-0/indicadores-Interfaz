import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLocalidad } from "@/redux/Register/userData/person/localidad";
import { Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Add from "@/app/register/localidad/Add";
import ClearIcon from "@mui/icons-material/Clear";

function LocalidadList() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.localidad);
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);
  const [addField, setAdd] = useState(false);

  const fetchList = () => {
    axios.get("http://localhost:4000/localidad").then(function (response) {
      setList(response.data);
    });
  };
  const handleSelected = (event, newValue) => {
    dispatch(setLocalidad(newValue));
    setReady(true);
  };
  const handleBlur = () => {
    if (selected === null) {
      setReady(false);
    }
  };
  const handleAdd = () => {
    setAdd(!addField);
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <Box className="flex">
      {ready ? (
        <Box className="flex">
          <CheckIcon fontSize="large" sx={{ color: "#00FF78" }} />
        </Box>
      ) : (
        <Box className="flex">
          <ClearIcon fontSize="large" sx={{ color: "#FF2E00" }} />
        </Box>
      )}
      <Autocomplete
        className="mx-5 w-3/6"
        options={list}
        isOptionEqualToValue={(option, value) => option.id != undefined}
        getOptionLabel={(opcion) => opcion.nombreLocalidad}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Seleccione una localidad"
            variant="outlined"
          />
        )}
        onChange={handleSelected}
        value={selected}
        onBlur={handleBlur}
      />
      {addField ? (
        <Add fetchList={fetchList} handleAdd={handleAdd} />
      ) : (
        <Button className="lowercase text-white bg-blue-600" onClick={handleAdd}>
          agregar otra localidad
        </Button>
      )}
    </Box>
  );
}

export default LocalidadList;
