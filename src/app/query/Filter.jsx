import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import generatePDF, { Margin } from "react-to-pdf";


function Filter(props) {
  const downloadPDF = () => {
    generatePDF(() => document.getElementById("pdf"), {
      method: "save",
      filename: "function-example.pdf",
      page: { margin: Margin.MEDIUM },
    });
  };
  return (
    <Grid item xs={12} className="mt-20 ml-5">
      <Box className="flex justify-center align-middle">
        <TextField // --------------------- TextField
          className="w-3/6"
          label="Insertar cedula de identidad"
          variant="outlined"
          size="medium"
          sx={{ marginRight: 2 }} // Add some margin to the right of the TextField
          onChange={props.handleFilter}
          value={props.filter}
        />

        <ButtonGroup variant="contained" className="bg-blue-500 lowercase">

          {props.show ? <Button onClick={props.reset}>Volver a buscar</Button> :           <Button color="primary" onClick={props.fetchData}>
            Buscar
          </Button>}
          {props.show ?           
          <Button
          onClick={downloadPDF}
            className="bg-yellow-300"
            style={{ color: "black" }}
            sx={{
              "&:hover": {
                background: "yellow", // Cambia 'red' por el color que desees para el hover
              },
            }}
          >Convertir a PDF </Button>: <></>}
        </ButtonGroup>
      </Box>
    </Grid>
  );
}

export default Filter;

/*   const [filterType, setFilterType] = useState("Cedula");
  const handleFilterType = (event) => {
    setFilterType(event.target.value);
  }; */
/*   const handleSetFilter = () => {
    props.setFilter({
      param: value,
      filterType: filterType,
    });
  }; */

{
  /*         <Select // --------------------- select
          className="mr-5"
          defaultValue={"Todos"}
          onChange={resetLoadingAndFetch}
          value={filterType}
        >
          <MenuItem value={"Cedula"}> cedula </MenuItem>
        </Select> */
}
