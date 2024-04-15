import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Separador from "@/components/Separador";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import axios from "axios";

function Capacitacion(props) {
  const [graphData, setGraphData] = useState({
    labels: ["estatico", "estatico", "estatico"],
    dataArray: [1, 2, 3],
  });
  useEffect(() => {
    axios
      .get("http://localhost:4000/medico/nivelAcademico")
      .then((response) => {
        console.log(response.data);
        setGraphData({
          labels: response.data.map((e) => e.nivelAcademico),
          dataArray: response.data.map((e) => e.count),
        });
      });
  }, []);
  return (
    <Grid container alignItems={'center'} justifyContent={'center'}>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          color="initial"
          fontSize={30}
          textAlign={"center"}
        >
          Índice de nivel academico en el ambulatorio urbano I &quot;Dr.
          Bernardino Martínez&quot; año {props.year}
        </Typography>
      </Grid>
      <Separador />

      <DonutGraph
        data={graphData}
        title={
          "Distribucion entre los grados academicos presentes en el personal"
        }
        titleSize={20}
        xs={3}
      />
    </Grid>
  );
}

export default Capacitacion;
