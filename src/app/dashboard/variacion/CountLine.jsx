"use client";
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTotalCount } from "@/redux/graph/totalCount";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function CountLine() {
  const monthLabels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.totalCount);
  function setTemp(temp) {
    const x = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].totalregistros !== undefined) {
        x.push(temp[i].totalregistros);
      }
    }
    dispatch(setTotalCount(x));
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/visitas/allMonths")
      .then(function (response) {
        setTemp(response.data);
      });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Indice variacion en la atencion ciudadana en el ambulatorio urbano 1 Bernardino Martínez",
      },
    },
  };

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Porcentaje de variacion",
        data: Object.values(totalCount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: true

      },
    ],

  };

  return <Line options={options} data={data} />;
}
