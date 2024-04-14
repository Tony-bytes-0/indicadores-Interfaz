import { Grid, Typography } from "@mui/material";
import { calculatePercentages } from "@/app/dashboard/common";
import React, { useEffect, useState } from "react";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import axios from "axios";
import Separador from "@/components/Separador";
import InfoCard from "@/app/dashboard/InfoCard";
import SelectMonth from "@/app/dashboard/morbilidad/SelectMonth";
import Swal from "sweetalert2";

export default function Morbilidad(props) {
  const [percentages, setPercentages] = useState([10, 12]);
  const [month, setMonth] = useState("0");
  const [graphData, setGraphData] = useState({
    labels: ["uno", "dos"],
    dataArray: [10, 20, 30, 40],
  });
  const handleMonth = (event) => {
    setMonth(event.target.value);
  };
  const params = {
    dateMonth: month
  }
  const fetchData = () => {
    axios.get(`http://localhost:4000/visitas/ordenar?mes=${month}`).then((response) => {
      console.log(response.data)
      if(response.data.length < 1){
        Swal.fire({
          title: 'No encontrado',
          text: 'Es posible que no existan registros en la fecha suministrada, verifique su elección e intente nuevamente',
          icon:'info'
        })
      }
      else{
        setGraphData({
          labels: response.data.map((e) => e.enfermedades_nombreEnfermedad),
          dataArray: response.data.map((e) => e.count),
        });
      }


      setPercentages(
        calculatePercentages(response.data.map((e) => parseInt(e.count)))
      );
    });
  };

/*   useEffect(() => {
    fethcGraph();
  }, []); */
  return (
    <Grid container className="my-10">
      <Typography textAlign={"center"} fontSize={30} className="mx-10">
        Índice de enfermedades mas frecuentes en el ambulatorio urbano I
        &quot;Dr. Bernardino Martínez&quot; año {props.year}
      </Typography>
      <Separador />
      <SelectMonth handleMonth={handleMonth} month={month} fetchData={fetchData} />
      <div className="w-full flex items-center justify-center">
        <DonutGraph data={graphData} xs={5} />
      </div>
      <Grid item xs={12} className="flex my-10 mx-5">
        {graphData.labels.map((e, index) => (
          <InfoCard
            title={e}
            number={graphData.dataArray[index]}
            key={index}
            percentage={percentages[index]}
            message={"Casos"}
            message2={"atendidos"}
            xs={2}
          />
        ))}
      </Grid>
    </Grid>
  );
}
