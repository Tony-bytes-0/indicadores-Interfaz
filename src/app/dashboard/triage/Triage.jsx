import React, { useEffect, useState } from "react";
import DonutAndCards from "./DonutAndCards";
import { Grid, Typography } from "@mui/material";
import Separador from "@/components/Separador";
import axios from "axios";
import {
  determinateDotColor,
  calculatePercentages,
} from "@/app/dashboard/common";

function Triage(props) {
  const [generoData, setGeneroData] = useState({
    graphData: {
      labels: ["cargando...", "cargando..."],
      dataArray: [1, 2],
    },
    percentages: [50, 50],
    dotColor: ["#63FF60", "FFC300", "FF5656"],
  });
  const [edadesData, setEdadesData] = useState({
    graphData: {
      labels: ["cargando...", "cargando..."],
      dataArray: [1, 2],
    },
    percentages: [50, 50],
    dotColor: ["#63FF60", "FFC300", "FF5656"],
  });
  function fetchData() {
    axios
      .get("http://localhost:4000/visitas/ordenarPorGenero")
      .then((response) => {
        setGeneroData({
          graphData: {
            labels: response.data.map((e) => e.genero),
            dataArray: response.data.map((e) => e.count),
          },
          percentages: calculatePercentages(
            response.data.map((e) => parseInt(e.count))
          ),
        });
      });
    axios
      .get("http://localhost:4000/visitas/ordenarPorEdad")
      .then((response) => {
        setEdadesData({
          graphData: {
            labels: response.data.map((e) => e.age_group),
            dataArray: response.data.map((e) => e.count),
          },
          percentages: calculatePercentages(
            response.data.map((e) => parseInt(e.count))
          ),
        });
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  const MayorMenor = {
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  };

  return (
    <Grid container>
      <Typography textAlign={"center"} fontSize={30} className="mt-10 mx-10">
        {"Total de casos atendidos ordenados por triaje en el ambulatorio urbano I 'Dr. Bernardino Martínez' año " +
          props.year}
      </Typography>
      <Separador />

      <DonutAndCards
      title={'Totales por género'}
        year={props.year}
        graphData={generoData.graphData}
        percentages={generoData.percentages}
        message={"Totales"}
        backgroundColor={["rgba(10, 142, 255, 1)", "rgba(222, 134, 255, 1)"]}
        borderColor={["rgba(10, 142, 255, 1)", "rgba(222, 134, 255, 1)"]}
        dot
        dotColor={determinateDotColor({
          values: generoData.percentages,
          range: { bien: 55, mal: 80 },
        })}
      />
      <DonutAndCards
      title={'Totales por edad'}
        year={props.year}
        graphData={edadesData.graphData}
        percentages={edadesData.percentages}
        message={"Totales"}
        backgroundColor={["rgba(90, 234, 250, 1)", "rgba(125, 255, 87, 1)"]}
        borderColor={["rgba(90, 234, 250, 1)", "rgba(125, 255, 87, 1)"]}
        dot
        dotColor={determinateDotColor({
          values: edadesData.percentages,
          range: { bien: 50, mal: 80 },
        })}
      />
    </Grid>
  );
}

export default Triage;
