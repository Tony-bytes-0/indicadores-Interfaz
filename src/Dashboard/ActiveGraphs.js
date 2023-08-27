import { Box, Button, ButtonGroup, Grid } from "@mui/material"
import { Graph } from "./Graph"
import { useState } from "react"

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };//quitar



export default function ActiveGraphs(){
    const [totalAdults, setTotalAdults] = useState(true)
    const [totalAdultQuery, setTotalAdultQuery] = useState(true)

    return(<Grid container>

        {(totalAdults) ? <Grid item xs={6} onClick={() => {setTotalAdults(!totalAdults)}}><Graph data={data}  /></Grid> : null}

        {(totalAdultQuery) ? <Grid item xs={6}><Graph data={data}  /> </Grid> : null}
    {/* DEV */}
        <Grid items xs={12}>
            <ButtonGroup>
                <Button onClick={() => {setTotalAdults(!totalAdults)}}>toggle adults</Button>
                <Button onClick={() => {setTotalAdultQuery(!totalAdultQuery)}}>toggle queryAdults</Button>

            </ButtonGroup>
        </Grid>
      
        

        
        

    </Grid>)
}


