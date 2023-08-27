import {  Grid  } from '@mui/material';
import DataDisplay from './DataDisplay';
import { red, pink, purple, blue, teal, lime, orange, blueGrey  } from '@mui/material/colors';
//import { faker } from '@faker-js/faker';
import Separador from '../Separador';
import ActiveGraphs from './ActiveGraphs';


const color = {red: red[400], pink: pink[400], purple: purple[300], blue: blue[400], teal: teal[300], lime:lime[400], orange:orange[300], blueGrey:blueGrey[400] }

const db = {
    adults:{value:32},  totalMedicalConsultation:{value:54}
}

export default function Dashboard() {

    return <Grid container display={'flex'}>

        <Grid item xs={3}><DataDisplay text='Total Adultos' data={db.adults.value} color={color.red} /></Grid>
        
        <Grid item xs={3}><DataDisplay text='Total de Consultas Adulto' data={db.totalMedicalConsultation.value} color={color.pink}/></Grid>
{/* 
        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.purple}/></Grid>

        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.blue}/></Grid>
    
        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.teal}/></Grid>

        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.lime}/></Grid>

        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.orange}/></Grid>

        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.blueGrey}/></Grid>

        <Grid item xs={3}><DataDisplay text={faker.person.fullName()} data={faker.number.int(500)} color={color.red}/></Grid> */}

        <Separador />
        
        <ActiveGraphs  />

    </Grid>
}
