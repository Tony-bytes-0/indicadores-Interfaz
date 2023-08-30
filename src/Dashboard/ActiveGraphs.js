//MUI
import { Button, ButtonGroup, Grid } from "@mui/material"
import { Graph } from "./Graph"

//Redux
import { useSelector, useDispatch } from 'react-redux'
import {  totalAdultsToggle, totalAdultQueryToggle } from "../redux/graphState/activeGraphs"

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
  };//quitar, temporally static graph data object



export default function ActiveGraphs(){
  /*   const [totalAdults, setTotalAdults] = useState(true)
    const [totalAdultQuery, setTotalAdultQuery] = useState(true) */

    const activeGraphs = useSelector((state) => state.activeGraphs)
    const dispatch = useDispatch()

    return(<Grid container>

        {(activeGraphs.totalAdults) ? <Grid item xs={6} onClick={() => {}}><Graph data={data}  /></Grid> : null}

        {(activeGraphs.totalAdultQuery) ? <Grid item xs={6}><Graph data={data}  /> </Grid> : null}
    {/* DEV */}
        <Grid item xs={12}>
            <ButtonGroup>
                <Button onClick={() =>{dispatch(totalAdultsToggle())}}>total adultos</Button>
                <Button onClick={() =>{dispatch(totalAdultQueryToggle())}}>total consultats adulto</Button>

            </ButtonGroup>
        </Grid>
        

        
        

    </Grid>)
}


