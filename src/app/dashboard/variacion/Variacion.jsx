"use client";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Separador from "@/components/Separador";
import { setTopDiseases } from "@/redux/graph/topDiseases";
import CountLine from "./CountLine";
import IterateMonths from "./IterateMonths";
import { setTotalCount } from "@/redux/graph/totalCount";
import { ConstructionOutlined } from "@mui/icons-material";

export default function Variacion(props) {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.totalCount);
  const variacionFormula = calculateData(totalCount);
  const indicatorColors = IndicatorColors(variacionFormula);

  function twoDigits(number) {
    return parseFloat(number.toFixed(2));
  }
  function calculateData(months) {
    const newArray = [];
    for (let i = 0; i < 12; i++) {
      if (i == 0) {
        newArray.push(months[0]);
      } else {
        newArray.push(twoDigits((months[i] / months[i - 1] - 1) * 100));
      }
    }
    return newArray;
  }
  function IndicatorColors(months) {
    const color = [];
    const icon = [];
    for (let i = 0; i < 12; i++) {
      if (months[i] > 20) {
        color.push("#63FF60");
        icon.push("up");
      } else if (months[i] <= -10 ) {
        color.push("#FF5656");
        icon.push("down");
      } else {
        color.push("#B8B8B8");
        icon.push("same");
      }
    }
    return { color, icon };
  }
  function fetchHistoryGraph() {

    axios
      .get("http://localhost:4000/visitas/allMonths")
      .then(function (response) {
        const x = [];
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].totalregistros !== undefined) {
            x.push(response.data[i].totalregistros);
          }
        }
        dispatch(setTotalCount(Object.values(x)));
        console.log(response.data)
      });
  }

  useEffect(() => {
    fetchHistoryGraph();
  }, []);
  //para el grafico
  const monthLabels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return (
    <Grid container className="my-10">
      <Grid item xs={12}>
        <Typography textAlign={"center"} fontSize={30}>
          Índice de atención al ciudadano en el ambulatorio urbano 1 Bernardino Martínez año {props.year}
        </Typography>
      </Grid>

      <Separador />

      <Grid className="my-10 px-5" item xs={8}>
        <CountLine
          totalCount={Object.values(totalCount)}
          monthLabels={monthLabels}
        />
      </Grid>

      <Grid item xs={4}>
        <IterateMonths
          monthLabels={monthLabels}
          formula={variacionFormula}
          color={indicatorColors.color}
          icon={indicatorColors.icon}
        />
      </Grid>
    </Grid>
  );
}
