//MUI
import { Grid } from "@mui/material"
import { Graph } from "./Graph"

//Redux
import { useSelector } from 'react-redux'



const graph = { 

  borderColor: [
      'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',  'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
    ],

  backgroundColor:[
      'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
  ]
}

export default function ActiveGraphs(){

  const triageGraph = useSelector(state => state.provisionalData.triage)
  const diagnosticoGraph = useSelector(state => state.diagnostico.diagnostico)
  const tensionGraph = useSelector(state => state.tension.tension)
  const atencionEspecial = useSelector(state => state.atencionEspecial.atencionEspecial)

  const activeGraphs = useSelector((state) => state.activeGraphs)

  const triage = {
    labels: ['Mujeres', 'Hombres'], 
    datasets: [{
        label:'Triaje', 
        data:  Object.values(triageGraph) ,
        backgroundColor: graph.backgroundColor,
        borderColor: graph.borderColor,
        }
    ]
  }
  const diagnostico = {
    labels: ['Primera consulta adultos', 'Consulta sucesiva adultos'],
    datasets: [{
      label: 'Diagnosticados', data:  Object.values(diagnosticoGraph),
      backgroundColor: graph.backgroundColor,
      borderColor: graph.borderColor,
    }
    ]
  }
  const tension = {
    labels: ['Normal', 'Hipertenso', 'Hipotenso'],
    datasets: [{
      label: 'Tensión', data:  Object.values(tensionGraph),
      backgroundColor: graph.backgroundColor,
      borderColor: graph.borderColor,
    }
    ]
  }
  const especialidades = {
    labels: ['Odontología', 'Oftalmologuía', 'Traumatología', 'O.R.L', 'Pediatria', 'Medicina Interna'],
    datasets: [{
      label: 'Atención especial', data: Object.values(atencionEspecial),
      backgroundColor: graph.backgroundColor,
      borderColor: graph.borderColor,
    }
    ]
  }
    

  return (<Grid container display={'flex'}>

        {(activeGraphs.totalAdults) ? <Grid item xs={3} ><Graph graph={triage}  /></Grid> : null}

        {(activeGraphs.diagnostico) ? <Grid item xs={3}><Graph graph={diagnostico}  /> </Grid> : null} 

        {(activeGraphs.tension) ? <Grid item xs={3}><Graph graph={tension} /> </Grid> : null} 

        {(activeGraphs.especialidades) ? <Grid item xs={3}><Graph graph={especialidades} /> </Grid> : null} 



    </Grid>)
}


