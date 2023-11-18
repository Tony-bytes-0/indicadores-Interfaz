import * as React from 'react';
//MUI
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


import { useSelector } from 'react-redux';
import Separador from '@/components/Separador'


function giveMeTotal(obj){
  const x = Object.values(obj); let total = 0; for(let i of x){
    if(typeof(i) !== 'string'){ total+=i; }
  } return total
}

function BasicTable() {

  const triage = useSelector(state => state.lastMonth.triage)
  const diagnostico = useSelector(state => state.lastMonth.diagnostico)
  const tension = useSelector(state => state.lastMonth.tension)
  const atencionEspecial = useSelector(state => state.lastMonth.atencionEspecial)

  const list = [triage, diagnostico, tension, atencionEspecial]

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="center"><b>Especialidad</b></TableCell>
            <TableCell align="center"><b>Total general</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (

            <TableRow align="center" key={row.name} > 
                <TableCell align="center"> {row.name} </TableCell>
                <TableCell align="center"> {giveMeTotal(row)} </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}        
      
export default function LastMonthResume() {

  return (<>

    <Separador />

    <Typography sx={{textAlign:'center', fontSize:30, align:'center', margin:'auto'}}>Resumen del mes anterior</Typography>

    <BasicTable />

    
  </>);
}