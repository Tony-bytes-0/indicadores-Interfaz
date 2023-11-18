//React
import * as React from 'react';
import { useState } from 'react';
//axios
import axios from 'axios';

//MUI
import { Grid, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"

//redux
import { useDispatch, useSelector } from 'react-redux';
import { removeActiveCoprouro, addActiveCoprouro } from '@/redux/Register/coprouro/activeCoprouro';
import { addCoprouro, removeCoprouro, setCoprouro } from '@/redux/Register/coprouro/coprouro';

function LabTest(){//selector
	//React States
	const[value, setValue] = useState("")//valor seleccionado
	const [disableBtn, setBtn] = useState(true)//controlar el boton
	const handleExam = (event) => {
		let aux = event.target.value
		setBtn(false)//al tocar el selector, activar el boton
		setValue( aux );
	}
	//Redux
	const dispatch = useDispatch() 
	const coprouro = useSelector(state => state.coprouro)//valor del selector de sintomas
	

	useState( () => {
        fetchCoprouro() 
    }, [])

    async function fetchCoprouro(){
        axios.get('http://localhost:300/tcoprouro')
            .then(response => {
                dispatch(setCoprouro(response.data))
				console.log(response.data)
            })
            .catch(e => {
                return e;
            });
    }
  
	return<>
		<Grid container style={{"backgroundColor":"white", "padding":"5%"}} >
			<Grid item xs={10}>
				<FormControl fullWidth sx={{"padding":"3%"}}>
					<InputLabel>Examenes</InputLabel>
					<Select label="Examenes" variant="outlined" value={value} onChange={handleExam}>
						{coprouro.map((e) => <MenuItem value={e.nombre} key={e.id}>{e.nombre}</MenuItem>)}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2} >
				<div className="centrate" style={{"position":"relative","top":"30%"}}>
					<Button variant='contained' disabled={disableBtn} fullWidth onClick={() => {
						const aux = value
						console.log(aux)
						setValue('')//devolver select a valor nulo
						setBtn(true)//desactivar añadir
						dispatch(addActiveCoprouro(aux))//añadir estado activo
						dispatch(removeCoprouro(aux))//remover el mismo estado del selector estatico
					}}>Agregar</Button>
  
				</div>
			</Grid>
		</Grid>
	</>
  }
  
  
  function BasicTable() {//tabla donde se reflejan los sintomas
	const activeCoprouro = useSelector(state => state.activeCoprouro)//sintomas activos por defecto = [] 
	const dispatch = useDispatch() 
	
	  return <Grid container>
        <Grid item xs={12}>
		<TableContainer component={Paper}>
		  <Table sx={{ minWidth: 650 }} aria-label="simple table" >
			<TableHead>
			  <TableRow>{/* aqui defino la cantidad de filas! */}
				<TableCell align="center"><h4><b>Examenes Selecionados</b></h4></TableCell>
				<TableCell align="center"></TableCell>
			  </TableRow>
			</TableHead>
	
			<TableBody>
			  {activeCoprouro.map((e) => (
				<TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				  <TableCell align="center">{e.nombre}</TableCell>
				  <TableCell align="center"><Button variant="contained" onClick={() => {
					console.log(e)
					dispatch(addCoprouro(e))//devuelve el valor a la lista usada por el selector
					dispatch(removeActiveCoprouro(e))//quita el simtoma de la lista de activos, filtra por nombre
				  }}>Eliminar</Button></TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
        </Grid>
		</Grid>
	}

export default function Coprouro(){
    return<>
        <LabTest/>
        <BasicTable/>
    </>
}