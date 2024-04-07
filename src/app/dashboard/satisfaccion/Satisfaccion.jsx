import React, { useEffect, useState } from "react";
import {
  determinateDotColor,
  calculatePercentages,
  fillMonths,
  graphColors
} from "@/app/dashboard/common";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import { Grid, Typography } from "@mui/material";
import Separador from "@/components/Separador";
import GroupBar from "@/app/dashboard/graphs/GroupBar";
import axios from "axios";

function Satisfaccion(props) {
  const [graphData, setGraphData] = useState({
    labels: ["Buena", "Regular", "Deficiente"],
    dataArray: [
      10, 20, 15,
    ],
    buena: 0,
    regular: 0,
    deficiente: 0,
  });
  const [graphBuena, setGraphBuena] = useState(1);
  const [graphRegular, setGraphRegular] = useState(2);
  const [graphDeficiente, setGraphDeficiente] = useState(3);
  const [buena, setBuena] = useState([]);
  const [regular, setRegular] = useState([]);
  const [deficiente, setDeficiente] = useState([]);
  const constructData = () => {
    return {
      labels: ["Buena", "Regular", "Deficiente"],
      dataArray: [graphBuena, graphRegular, graphDeficiente],
    };
  };
  const constructBackgroundColors = () => {
    return  Object.entries(graphColors).map((e) => e[1].backgroundColor)
  }
  const constructBorderColors = () => {
    return  Object.entries(graphColors).map((e) => e[1].borderColor)
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/visitas/satisfaccion?param=Buena")
      .then((response) => {
        setBuena(response.data.map((e) => parseInt(e.count)));
        setGraphBuena(
          response.data
            .map((e) => parseInt(e.count))
            .reduce((acc, actual) => acc + actual, 0)
        );
      });
    axios
      .get("http://localhost:4000/visitas/satisfaccion?param=Regular")
      .then((response) => {
        setRegular(response.data.map((e) => parseInt(e.count)));
        setGraphRegular(
          response.data
            .map((e) => parseInt(e.count))
            .reduce((acc, actual) => acc + actual, 0)
        );
      });
    axios
      .get("http://localhost:4000/visitas/satisfaccion?param=Deficiente")
      .then((response) => {
        setDeficiente(response.data.map((e) => parseInt(e.count)));
        setGraphDeficiente(
          response.data
            .map((e) => parseInt(e.count))
            .reduce((acc, actual) => acc + actual, 0)
        );
      });
  }, []);
  return (
    <Grid container>
      <Typography variant="body1" color="initial" fontSize={30}>
        Índice de satisfacción del paciente en el ambulatorio año {props.year}
      </Typography>
      <Separador />
      <DonutGraph
        data={constructData()}
        title={"Promedio general"}
        titleSize={20}
        xs={3}
        backgroundColor={constructBackgroundColors()}
        borderColor = {constructBorderColors()}
      />
      <GroupBar
        title={"Total por meses"}
        xs={7}
        firstLabel={"Buena"}
        firstArray={buena}
        firstBorderColor={graphColors.buena.borderColor}
        firstBackgroundColor={graphColors.buena.backgroundColor}
        secoundLabel={"Regular"}
        secoundArray={regular}
        secoundBorderColor = {graphColors.regular.borderColor}
        secoundBackgroundColor = {graphColors.regular.backgroundColor}
        thirdLabel={"Deficiente"}
        thirdBorderColor = {graphColors.deficiente.borderColor}
        thirdBackgroundColor = {graphColors.deficiente.backgroundColor}
        thirdArray={deficiente}
      />
    </Grid>
  );
}

export default Satisfaccion;
