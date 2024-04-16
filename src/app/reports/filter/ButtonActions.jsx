import { Button, ButtonGroup, Grid } from "@mui/material";
import generatePDF, { Margin } from "react-to-pdf";
import React from "react";

function ButtonActions(props) {
  const downloadPDF = () => {
    generatePDF(() => document.getElementById("pdf"), {
      method: "save",
      filename: "function-example.pdf",
      page: { margin: Margin.MEDIUM },
    });
  };
  return (
    <Grid item xs={12} margin={5}>
      <ButtonGroup fullWidth variant="contained">
      <Button
          onClick={ props.tableData.length > 0 ? props.normalize : props.fetchReport}
          padding={10}
          className="bg-blue-500"
        >
          {props.tableData.length > 0 ? "Volver a Buscar" : "Generar Reporte"}
        </Button>
        {props.tableData.length > 0 ? (
          <Button
            onClick={downloadPDF}
            className="bg-yellow-300"
            style={{ color: "black" }}
            sx={{
              "&:hover": {
                background: "yellow", // Cambia 'red' por el color que desees para el hover
              },
            }}
          >
            <b>Convertir a PDF</b>
          </Button>
        ) : (
          <></>
        )}

      </ButtonGroup>
    </Grid>
  );
}

export default ButtonActions;
