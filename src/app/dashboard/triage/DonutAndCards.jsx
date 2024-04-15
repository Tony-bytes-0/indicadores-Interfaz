import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import InfoCard from "@/app/dashboard/InfoCard";

export default function DonutAndCards(props) {
  /*   const [percentages, setPercentages] = useState([10, 12]);
  const [graphData, setGraphData] = useState({
    labels: ["datos", "estaticos"],
    dataArray: [10, 20],
  }); */
  //console.log('dentro del donutAndCard ', props.dotColor)
  return (
    <Grid item xs={6} className={props.GridContainerclass}>
      {console.log(props, ' props de la dona')}
      <div className="w-full flex items-center justify-center">
        <DonutGraph
          data={props.graphData}
          xs={6}
          backgroundColor={props.backgroundColor}
          borderColor={props.borderColor}
          title={props.title}
        />
      </div>
      {props.graphData.labels.map((e, index) => (
        <InfoCard
          title={props.graphData.labels[index]}
          key={index}
          number={props.graphData.dataArray[index]}
          percentage={props.percentages[index]}
          message={props.message}
          dot={props.dot}
          dotColor={props.backgroundColor[index]}
        />
      ))}
    </Grid>
  );
}
