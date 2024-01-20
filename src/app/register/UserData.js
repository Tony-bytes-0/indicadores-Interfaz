//React
import { useState, useEffect } from 'react'

//MUI Components
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button, TextareaAutosize, ButtonGroup, Box  } from "@mui/material"

//Redux
import { useDispatch, useSelector } from 'react-redux'

import { setNombre } from '@/redux/register/userData/person/nombre'
import { setApellido } from '@/redux/register/userData/person/apellido'
import { setIdentificacion } from '@/redux/register/userData/person/identificacion'
import { setGenero } from '@/redux/register/userData/person/genero'
import { setTipoSangre } from '@/redux/register/userData/person/tipoSangre'
import { setFechaNacimiento } from '@/redux/register/userData/person/fechaNacimiento'
import { setTelefono } from '@/redux/register/userData/person/telefono'
import { setTelefonoEmergencia } from '@/redux/register/userData/person/telefonoEmergencia'
import { setDireccion } from '@/redux/register/userData/person/direccion'

//Axios
import axios from "axios"

//Modulos
import { bloodList } from '@/app/register/staticValuesList'//objeto con personas estatico
import Separador from '@/components/Separador'
// import UserType from './UserType'
//Iconos

/* import { setEstadoList } from '@/redux/register/registerController/estadoList'
import { setMunicipioList } from '@/redux/register/registerController/municipioList'
import { setParroquiaList } from '@/redux/register/registerController/parroquiaList'
import { setComunidadList } from '@/redux/register/registerController/comunidadList'
import { setSectorList } from '@/redux/register/registerController/sectorList' */





export default function UserData(props){//MAIN
    const dispatch = useDispatch() //DEV
    const validateNumber="[0-9]";
    //Estado de variables de datos
    const nombre = useSelector(state => state.nombre); 
    const apellido = useSelector(state => state.apellido);  
    const identificacion = useSelector(state => state.identificacion);
    const genero = useSelector(state => state.genero);
    const fechaNacimiento = useSelector(state => state.fechaNacimiento);
    const telefono = useSelector(state => state.telefono);
    const tipoSangre = useSelector(state => state.tipoSangre);
    const telefonoEmergencia = useSelector(state => state.telefonoEmergencia);
    const direccion = useSelector(state => state.direccion);
    //const sector = useSelector(state => state.sector);



    const handleName = (event) => { dispatch(setNombre(event.target.value)) }//NAME
    const handleLastName = (event) => {dispatch(setApellido(event.target.value))}//LASTNAME   
    const handleGender = (event) => {dispatch(setGenero(event.target.value)) }//GENDER  
    const handleBirthdate = (event) => { dispatch(setFechaNacimiento(event.target.value))}//BIRTHDATE
    const handleBloodType = (event) => { dispatch(setTipoSangre(event.target.value)) }//BLOODTYPE
    const handleDirection = (event) => { dispatch(setDireccion(event.target.value)) }//DIRECTION
    const handleSector = (event) => { dispatch(setSector(event.target.value)) }//SECTOR
    const handleDni = (event) => { if(event.target.value.match(validateNumber) != null && event.target.value.length < 10) { dispatch(setIdentificacion(event.target.value)) } }//DNI
    const handleCellphone = (event) => {  if(event.target.value.match(validateNumber) != null){ dispatch(setTelefono(event.target.value)) } }//CELLPHONE
    const handleEmergency = (event) => {  if(event.target.value.match(validateNumber) != null){ dispatch(setTelefonoEmergencia(event.target.value)) } }//EMERGENCY

/*     useEffect( () => {
            function fetchEstado (){
        axios.get('http://localhost:300/estado')
        .then(response => { dispatch(setEstadoList(response.data)); }).catch(response => { console.log(response) })
    }
    function fetchMunicipio (){
        axios.get('http://localhost:300/municipio')
        .then(response => { dispatch(setMunicipioList(response.data)) }).catch(response => { console.log(response) })
    }
    function fetchParroquia (){
        axios.get('http://localhost:300/parroquia')
        .then(response => { dispatch( setParroquiaList(response.data) ) }).catch(response => { console.log(response) })
    }
    function fetchComunidad (){
        axios.get('http://localhost:300/comunidad')
        .then(response => { dispatch( setComunidadList(response.data) ) }).catch(response => { console.log(response) })
    }
    function fetchSector (){
        axios.get('http://localhost:300/sector')
        //.then(response => { dispatch(setSectorList(response.data)) }).catch(response => {console.log(response)})
    }
        fetchMunicipio(); fetchParroquia(); fetchSector(); fetchEstado();fetchComunidad(); 
        //dispatch(setSector(''));
    }, [dispatch])

    const [estado, setEstado] = useState(''); 
    const [municipio, setMunicipio] = useState(''); 
    const [parroquia, setParroquia] = useState(''); 
    const [comunidad, setComunidad] = useState('');  */

/*     const handleEstado = (event) => { setEstado(event.target.value) }//ESTADO
    const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    const handleParroquia = (event) => { setParroquia(event.target.value) }//PARROQUIA
    const handleComunidad = (event) => { setComunidad(event.target.value) }//COMUNIDAD */

    const estadosList = useSelector(state => state.estadoList)
    const municipioList = useSelector(state => state.municipioList)
    const parroquiaList = useSelector(state => state.parroquiaList)
    const comunidadList = useSelector(state => state.comunidadList)
    const sectorList = useSelector(state => state.sectorList)

/*     function avalibleMunicipios (){
        if(estado === '') return [{'id':'1', 'nombre_municipio':''}]// al estar vacio, devolver un objeto de muestra
        
        else {const selectedEstadoId =  estadosList.find(x => x.nombre_estado === estado).id;//sacar el id del seleccionado 
            const nonEmptyList = municipioList.filter( x => x.estado !== null); //sacar valores con estado nulo
            return nonEmptyList.filter(x => x.estado.id === selectedEstadoId) }
    }
    function avalibleParroquias (){ 
        if(municipio === '') return [{'id':'1', 'nombre_parroquia':''}] 
        else {const selectedId =  municipioList.find(x => x.nombre_municipio === municipio).id;
            const nonEmptyList = parroquiaList.filter( x => x.municipio !== null); 
            return nonEmptyList.filter(x => x.municipio.id === selectedId) }
    }
    function avalibleComunidades (){
        if(parroquia === '') return [{'id':'1', 'nombre_comunidad':''}] 
        else {const selectedId = parroquiaList.find( x => x.nombre_parroquia === parroquia).id; 
            const nonEmptyList = comunidadList.filter( x => x.parroquia !== null );
            return nonEmptyList.filter(x => x.parroquia.id === selectedId)
        }
    }
    function avalibleSectores (){ 
        if(comunidad === '') return  [{'id':'1', 'nombre_sector':''}] 
        else{ const selectedId = comunidadList.find(x => x.nombre_comunidad === comunidad).id;
            const nonEmptyList = sectorList.filter(x => x.comunidad !== null );
            return nonEmptyList.filter(x => x.comunidad.id === selectedId)
        }
    } */

    function setValues (x){
        dispatch(setNombre(x.nombre)); 
        dispatch(setApellido(x.apellido)); 
        dispatch(setGenero(x.genero));
        dispatch(setIdentificacion(x.identificacion));
        dispatch(setTelefono(x.telefono)); 
        dispatch(setTelefonoEmergencia(x.telefonoEmergencia)); 
        dispatch(setFechaNacimiento(x.fechaNacimiento)); 
        dispatch(setTipoSangre(x.tipoSangre)); 
        dispatch(setDireccion(x.direccion));
    }
    const [welcome, setWelcome] = useState(true)//para hacer acciones solamente al cargar la pagina :)
    if(welcome && props.toggleUpdate){//esseto trigerea al abrir la modal de edicion
        setWelcome(false)
        setUpdateValues(props.target)
    }

    function getPersonByDni (){
        axios.get('http://localhost:4000/persona/' + identificacion)
        .then(response => {
            setValues(response.data)
        })
        .catch(e => {
            console.log('no existe esa cedula en la base de datos')
        })
        .finally(() => {console.log('se termino la busqueda!')})
        
    }
    const sm = { width: '25%', maxWidth: '25%', padding:'5px' }
    const full = { width: '100%', display:'flex', padding: '0px' }

    return<>
            <Grid container sx={{"padding":"2%"}} spacing={1} className='fadeIn'>
                <Separador label = 'Datos Personales del Paciente' />
                <Grid item xs={12} >
                    <TextField sx={sm} label="Cedula" variant="filled" type= {'number'} value={identificacion} onChange = {handleDni} onBlur={() => { getPersonByDni() }}  />
                    <TextField sx={sm} label="Nombre" variant="filled" onChange = {handleName} value = {nombre} />
                    <TextField sx={sm} label="Apellido" variant="filled" value = {apellido} onChange = {handleLastName}  />

                    <FormControl sx = {sm} >
                        <InputLabel>Genero</InputLabel>
                        <Select label="Genero" variant="filled" value = {genero} onChange={handleGender} defaultValue={''} >
                            <MenuItem value={'masculino'}>Masculino</MenuItem>
                            <MenuItem value={'femenino'}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>  
                

                <Grid item xs = {12}>
                    <TextField label="Telefono" sx={sm} variant="filled" type={'number'} value = {telefono}  onChange={handleCellphone}  />
                    <TextField label="Telefono de Emergencia" sx={sm} variant="filled" type={'number'} value = {telefonoEmergencia} onChange={handleEmergency} />
                    <TextField label="Fecha de Nacimiento" type="date" sx={sm} value={fechaNacimiento} InputLabelProps={{shrink: true}} variant="filled" onChange={handleBirthdate} />
                    <FormControl sx = {sm}>
                        <InputLabel>Tipo de Sangre</InputLabel>
                        <Select label="Tipo de Sangre" variant="filled" id="BloodType" value={tipoSangre} onChange={handleBloodType} defaultValue = "">
                            {bloodList.map((e) => <MenuItem key={e+'blood'} value={e}>{e}</MenuItem>)}
                        </Select>
                    </FormControl>   
                </Grid>
                
                                                            <Separador label='Localidad del Paciente' />

                                                            
{/*                 <Grid item xs = {4}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Estado</InputLabel>
                        <Select variant="filled" label="estado" value={estado} onChange={handleEstado} defaultValue = "">
                            {estadosList.map((e) => <MenuItem value={e.nombre_estado} key={e.id +' Municipio'}>{e.nombre_estado}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid>

                <Grid item xs = {4}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Municipio</InputLabel>
                        <Select variant="filled" label="municipio" value={municipio} onChange={handleMunicipio} defaultValue = "">
                            {avalibleMunicipios().map((e) => <MenuItem value={e.nombre_municipio} key={e.id +' Municipio'}>{e.nombre_municipio}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid>

                <Grid item xs={4}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Parroquia</InputLabel>
                        <Select variant="filled" label="parroquia" value={parroquia} onChange={handleParroquia} defaultValue = "">
                            {avalibleParroquias().map((e) => <MenuItem value={e.nombre_parroquia} key={e.id + 'parroquia'}>{e.nombre_parroquia}</MenuItem> )}
                        </Select>
                    </FormControl>  
                    
                </Box></Grid>

                <Grid item xs = {6}><Box sx={full}>
                    <FormControl sx = {full} > <InputLabel>Comunidad</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={comunidad} onChange={handleComunidad} defaultValue = "">
                            {avalibleComunidades().map((e) => <MenuItem value={e.nombre_comunidad} key={e.id+' comunidad'}>{e.nombre_comunidad}</MenuItem> )}
                        </Select>
                    </FormControl> 
                </Box></Grid>

                <Grid item xs = {6}><Box sx={full}>
                    <FormControl sx={full}> <InputLabel>Sector</InputLabel>
                        <Select variant="filled" label="Genero" 
                        value={sector} onChange={handleSector} defaultValue = "">
                            {avalibleSectores().map((e) => <MenuItem value={e.nombre_sector} key={e.id + ' sector'}>{e.nombre_sector}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Box></Grid> */}

            </Grid>
            
            <Grid item xs={12} className='text-center' >
                <TextareaAutosize className='text-center items-center m-auto border-solid border-4 rounded'  aria-label="minimum height" minRows={2} placeholder="Direccion de la Habitacion" style={{ width: "90%",display:"flex" }}
                value={direccion} onChange={handleDirection}/>
            </Grid>

            <Box className='centrate'><ButtonGroup disableElevation className='centrate' variant="contained" aria-label="Disabled buttons" 
                sx={{'padding':'10px', 'margin':'10px','alignItems':'center'}}>
                {/* <Button onClick={() => {console.log(identificacion.length)}} >Ver sector</Button> */}
            </ButtonGroup></Box>
        </>
    }