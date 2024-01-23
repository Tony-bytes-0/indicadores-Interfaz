import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { setSelectedMonth } from '@/redux/graph/indicatiorSelectedMonth';
import { useDispatch } from 'react-redux';


export default function GroupOrientation() {
    const dispatch = useDispatch()
  return (
    <Box className='align-bottom	'
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" className='align-bottom	'>

        <Button className='my-7' key="one" onClick = { () => {dispatch(setSelectedMonth('Diciembre'))}} > Diciembre </Button>

        <Button className='my-7'  key="two" onClick = { () => {dispatch(setSelectedMonth('Enero'))}}>Enero</Button>

        <Button className='my-7'  key="three" onClick = { () => {dispatch(setSelectedMonth('Febrero'))}}>Febrero</Button>

      </ButtonGroup>

    </Box>
  );
}