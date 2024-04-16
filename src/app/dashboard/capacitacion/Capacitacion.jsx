import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Separador from "@/components/Separador";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import axios from "axios";
import { morbilidadBackgroundColors, morbilidadBorderColors } from "../common";
import InfoCard from "@/app/dashboard/InfoCard";
import { calculatePercentages } from "../common";

function Capacitacion(props) {
  const [graphData, setGraphData] = useState({
    labels: ["estatico", "estatico", "estatico"],
    dataArray: [1, 2, 3],
  });
  const [percentages, setPercentages] = useState([
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/medico/nivelAcademico")
      .then((response) => {
        console.log(response.data);
        setGraphData({
          labels: response.data.map((e) => e.nivelAcademico),
          dataArray: response.data.map((e) => e.count),
        });
        setPercentages(calculatePercentages(response.data.map((e) => parseInt(e.count))))
      });
  }, []);
  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
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
        backgroundColor={morbilidadBackgroundColors}
        borderColor={morbilidadBorderColors}
        xs={6}
      />
      <Grid container xs={12}>
        {graphData.labels.map((e, index) => (
          <InfoCard
            title={e}
            number={graphData.dataArray[index]}
            key={index}
            percentage={percentages[index]}
            message={"Profesionales"}
            message2={"registrados"}
            xs={2}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Capacitacion;
