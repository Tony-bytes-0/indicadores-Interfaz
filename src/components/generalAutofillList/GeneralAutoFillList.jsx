import React, { useCallback, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import axios from "axios";
import { Box, Button, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Add from "@/components/generalAutofillList/Add";
import ClearIcon from "@mui/icons-material/Clear";
//props : reduxState,

function GeneralAutofillList(props) {
  const selected = useSelector((state) => state[props.reduxState]);
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);
  const [addField, setAdd] = useState(false);
  
  const fetchList = useCallback (() => {
    axios.get("http://localhost:4000/" + props.route).then(function (response) {
      setList(response.data);
    });
  }, [props.route]);
  const handleSelected = useCallback((event, newValue)=> {
    console.log(newValue)
    props.handler(newValue);
    setReady(true);
  }, [])
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
  }, [fetchList ]);

  const boxStyles = {marginTop: 1, display: 'flex'}
  return (
    <Grid item xs={props.selectorGridXsSize} >
      <Box sx={boxStyles}>
      {ready ? (
        <Box className="flex" >
          <CheckIcon fontSize="large" sx={{ color: "#00FF78" }} />
        </Box>
      ) : (
        <Box className="flex">
          <ClearIcon fontSize="large" sx={{ color: "#FF2E00" }} />
        </Box>
      )}
      <Autocomplete
      fullWidth
        className="mx-5 w-full"
        options={list}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(opcion) => (opcion ? opcion[props.listNameProperty] : "")}
        renderInput={(params) => (
          <TextField {...params} label={props.listLabel} variant="outlined" />
        )}
        onChange={handleSelected}
        value={selected}
        onBlur={handleBlur}
      />
      
      {addField ? (
        <Add fetchList={fetchList} handleAdd={handleAdd} addLabel={props.addLabel} route = {props.route} listNameProperty={props.listNameProperty} />
      ) : (
        <Button className="lowercase" onClick={handleAdd}>
          {props.buttonAddText}
        </Button>
      )}
      </Box>
    </Grid>
  );
}

export default GeneralAutofillList;
