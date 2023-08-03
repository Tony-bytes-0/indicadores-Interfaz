import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Grid, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Selectors from './Selectors';

const regularPadding = {"margin-top":"40px"}

export default function ParametersRange() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return <Grid container spacing={2}>
    <Grid item xs = {12} >
      <FormGroup>
          <FormControlLabel label={<Typography variant='h5'> Mostrar incidencias medicas </Typography>} 
          labelPlacement="top" control={<Checkbox checked={checked} size='large' onChange={handleChange}/>} />
      </FormGroup>  
    </Grid>

    <Grid item xs={6}><Typography variant='h5'>  Mostrar los ultimos:  </Typography></Grid>
    <Selectors /> {/* esto tiene xs ={6}*/}
    <Grid item xs={12}>
        <Slider style={regularPadding}
            defaultValue={1} step={1} min={1} max={15}
            valueLabelDisplay="on" />  
    </Grid>

    <Grid item xs={12}>
        <Typography variant='h5'>  Mostrar advertencia <b>media</b> por dia  </Typography>
        <Slider style={regularPadding} defaultValue={5} step={5} min={5} max={100} valueLabelDisplay="on" />

        <Typography variant='h5'>  Mostrar advertencia <b>critica</b> por semana  </Typography>
        <Slider style={regularPadding} defaultValue={20} step={20} min={20} max={500} valueLabelDisplay="on" />

        <Typography variant='h5'>  Mostrar advertencia <b>critica</b> por mes  </Typography>
        <Slider style={regularPadding} defaultValue={20} step={20} min={20} max={1000} valueLabelDisplay="on" />
         
    </Grid>


  </Grid>
 
}