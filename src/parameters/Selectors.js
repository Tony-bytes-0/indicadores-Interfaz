import * as React from 'react';
import {Grid, InputLabel, MenuItem, FormControl, Select} from '@mui/material'


export default function Selectors() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid item xs={6} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rango
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={20}>Meses</MenuItem>
          <MenuItem value={30}>Semanas</MenuItem>
          <MenuItem value={30}>Dias</MenuItem>

        </Select>
      </FormControl>
    </ Grid>
  );
}