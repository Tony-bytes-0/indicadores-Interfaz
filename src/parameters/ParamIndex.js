import { Grid, Typography } from "@mui/material"
import Separador from "../Separador"

import Triage from "./Triage"
import Diagnostico from "./Diagnostico"
import Tension from "./Tension"
import AtencionEspecial from "./AtencionEspecial"


export default function ParamIndex(){

    return <Grid container padding={4}>
        <Grid item xs= {12} > <Typography variant="h4" textAlign={'center'}> Ajuste de indicadores</Typography> </Grid>
        <Separador />

        <Triage />

        <Diagnostico />

        <Tension />

        <AtencionEspecial />




    </Grid >
}