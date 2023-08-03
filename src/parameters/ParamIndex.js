import { Grid, Typography } from "@mui/material"
import ParametersRange from "./ParametersRange"
import Separador from "../Separador"


export default function ParamIndex(){

    return <Grid container padding={4}>
        <Grid item xs= {12} > <Typography variant="h4" className='rojo'> Ajuste de indicadores</Typography> </Grid>
        <Separador label=' Incidencias medicas ' />

        <Grid item xs={12} className="section"> <ParametersRange /> </Grid>


    </Grid >
}