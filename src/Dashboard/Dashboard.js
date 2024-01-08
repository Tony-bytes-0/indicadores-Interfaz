import {  Grid, Typography  } from '@mui/material';
import DataDisplay from './DataDisplay';
//import { red, pink, purple, blue, teal, lime, orange, blueGrey  } from '@mui/material/colors';
//const color = {red: red[400], pink: pink[400], purple: purple[300], blue: blue[400], teal: teal[300], lime:lime[400], orange:orange[300], blueGrey:blueGrey[400] }
//import { faker } from '@faker-js/faker';
import Separador from '../Separador';
import ActiveGraphs from './ActiveGraphs';
import LastMonthResume from './LastMonthResume';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    
    const triageTotal = useSelector(state => state.provisionalData.triage)
    const atencionEspecialTotal = useSelector(state => state.atencionEspecial.atencionEspecial)
    const diagnosticoTotal = useSelector(state => state.diagnostico.diagnostico)
    const tensionTotal = useSelector(state => state.tension.tension)
    
function giveMeTotal(obj){
    const x = Object.values(obj); let total = 0; for(let i of x){ total+=i;} return total
}


    return <Grid container display={'flex'}>

        <Grid item xs= {12} > <Typography textAlign={'center'} fontSize={30}>Totales del mes en curso</Typography> </Grid>

        <Grid item xs={3}><DataDisplay text='Triaje' total={giveMeTotal(triageTotal)} /></Grid>
        
        <Grid item xs={3}><DataDisplay text='Diagnóstico' total={giveMeTotal(diagnosticoTotal)}  /></Grid>

        <Grid item xs={3}><DataDisplay text='Tensión' total={giveMeTotal(tensionTotal)}   /></Grid>

        <Grid item xs={3}><DataDisplay text='Atención especial' total={giveMeTotal(atencionEspecialTotal)}  /></Grid>

        

        <Separador />
        
        <ActiveGraphs  />

        <LastMonthResume text={'Resumen mes anterior'} /> 


    </Grid>
}
