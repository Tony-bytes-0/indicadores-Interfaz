import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

function Filter(props) {
  const [value, setValue] = useState("");
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  const [filterType, setFilterType] = useState("Cedula");
  const handleFilterType = (event) => {
    setFilterType(event.target.value);
  };
  const handleSetFilter = () => {
    //pass state to parent
    props.setFilter({
      param: value,
      filterType: filterType,
    });
  };
  const resetLoadingAndFetch = () => {
    props.handleLoading(true)
    props.fetchUserList()
  }
  return (
    <Grid item xs={12} className="mt-20 ml-5">
      <Box className="flex justify-center align-middle">
        <TextField // --------------------- TextField
          className="w-3/6"
          label="Your Input"
          variant="outlined"
          size="medium"
          sx={{ marginRight: 2 }} // Add some margin to the right of the TextField
          onChange={handleValue}
          value={value}
        />
        <Select // --------------------- select
          className="mr-5"
          defaultValue={"Todos"}
          onChange={resetLoadingAndFetch}
          value={filterType}
        >
          <MenuItem value={"Cedula"}> cedula </MenuItem>
        </Select>
        
        <Button // --------------------- Button
          variant="contained"
          color="primary"
          className="bg-blue-500 lowercase"
          onClick={handleSetFilter}
        >
          Buscar
        </Button>

        <Button // --------------------- Button
          variant="contained lowercase"
          color="success"
          className="bg-blue-500 mx-5"
          onClick={resetLoadingAndFetch}
        >
          Mostrar  todos
        </Button>
      </Box>
    </Grid>
  );
}

export default Filter;
