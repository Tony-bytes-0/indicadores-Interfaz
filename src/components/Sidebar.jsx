"use client"
//MUI
import Button from '@mui/material/Button';
import { Paper, MenuList, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
    //iconos
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'; 
import CloseIcon from '@mui/icons-material/Close'; import FilterIcon from '@mui/icons-material/Filter';
import HealingIcon from '@mui/icons-material/Healing'; import ScienceIcon from '@mui/icons-material/Science';
import FolderSharedIcon from '@mui/icons-material/FolderShared'; import GroupsIcon from '@mui/icons-material/Groups';
import BiotechIcon from '@mui/icons-material/Biotech'; import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useDispatch } from 'react-redux';
import { closeMenu } from '@/redux/Menu/menuController';
import Link from 'next/link';


export default function SideBar() {//MAIN
    //const loggedUser = useSelector(state => state.loginController)
    const dispatch = useDispatch()

    const [register, setRegister] = useState(false)
    const [crud, setCrud] = useState(false)
    const [query, setQuery] = useState(false)
    const [indicator, setIndicators] = useState(false)


    //const basicStyles = {"padding":"15px","marginTop":"20px","display":"flex"}
    return <Paper sx={{ width: '17%', maxWidth: '100%', height: '10000px',  position: 'fixed' }} className='bg-slate-500' >{/*aqui esta el slate!!!*/}
    <MenuList>
        <MenuItem onClick={() => {dispatch(closeMenu())}}><Box className='centrate'><CloseIcon /></Box></MenuItem>
        <Box><Button></Button> </Box>
        <MenuItem onClick={() => {setRegister(!register); setCrud(false); setQuery(false);  setIndicators(false)}}>
            <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} ><b>Registro</b> </Typography>
        </MenuItem>
        
            {register ? (<MenuList className = 'fadeIn'>

            <MenuItem  onClick={() => {}} >
                <ListItemIcon> <CreateNewFolderIcon /> </ListItemIcon>
                <Link href='/register' >Historia Medica </Link>
            </MenuItem>

            
            </MenuList>):(<p></p>)}

        <MenuItem onClick={() => {setQuery(!query); setRegister(false); setCrud(false);  setIndicators(false)}}>
            <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} > <b>Consulta</b> </Typography>
        </MenuItem>
            
            {query ? (<MenuList className = 'fadeIn'>
            <MenuItem >
                <ListItemIcon> <GroupsIcon /> </ListItemIcon>
                <Link href='/showAllUsers' >Todos los Usuarios </Link>
            </MenuItem>

            <MenuItem >
                <ListItemIcon> <FolderSharedIcon /> </ListItemIcon>
                <Link href='/medicalRecords' > Ver Historias Medicas</Link>
            </MenuItem>
            </MenuList>):<p></p>}

        <MenuItem onClick={() => {setCrud(!crud); setRegister(false); setQuery(false); setIndicators(false) }}>
            <Typography noWrap fontSize={'15px'}sx={{"padding":"10px"}} > <b>Gestionar Datos</b> </Typography>
        </MenuItem>
            
            {crud ? (<MenuList className = 'fadeIn'>
            <MenuItem >
                <ListItemIcon> <HealingIcon /> </ListItemIcon>
                <Link href='/diseasesCrud' > Enfermedades</Link>
            </MenuItem>

            <MenuItem >
                <ListItemIcon> <CoronavirusIcon /> </ListItemIcon>
                <Link href='/AllergiesCrud' > Alergias</Link>
            </MenuItem>

            <MenuItem >
                <ListItemIcon> <BiotechIcon /> </ListItemIcon>
                <Link href='/coprouroCrud' > Copro/uro </Link>
            </MenuItem>

            <MenuItem >
                <ListItemIcon> <ScienceIcon /> </ListItemIcon>
                <Link href='/ematologyCrud' > Hematologias</Link>

            </MenuItem>

            <MenuItem >
                <ListItemIcon> <FilterIcon />  </ListItemIcon>
                <Link href='/radiographysCrud' > Radiografias</Link>

            </MenuItem>
            </MenuList>):<p></p>}

        <MenuItem onClick={() => {setIndicators(!query); setRegister(false); setCrud(false); setQuery(false)}}>
            <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} > <b> Indicadores </b> </Typography>
        </MenuItem>
            
            {indicator ? (<MenuList className = 'fadeIn'>
            <MenuItem >
                <ListItemIcon> <GroupsIcon /> </ListItemIcon>
                <Link href='/dashboard' > Resumen del mes actual </Link>
            </MenuItem>

            <MenuItem >
                <ListItemIcon> <FolderSharedIcon /> </ListItemIcon>
                <Link href='/medicalRecords' > Resumen del mes anterior </Link>
            </MenuItem>
            </MenuList>):<p></p>}

    </MenuList>
  </Paper>
}
//         return <div className='SIDEBAR'>
//             <Box className='centrate'> 
//  < AccountCircleRoundedIcon/> <AppRegistrationRoundedIcon /> <LocalHospitalIcon />
//             </Box>
//             <ButtonGroup  
//                 disableElevation
//                 className='buttonMenuBtn'
//                 orientation="vertical"
//                 aria-label="Disabled buttons">
//                     <Box>
//                         <Button onClick={() => {navigate('/users')}}  sx = {basicStyles}> Registro de Personas </Button>
//                         <PeopleRoundedIcon sx={{"width":"300px","maxWidth":"40%", "display":"flex"}} onClick={() =>{alert('wiu wiu')}} />
//                         <PeopleRoundedIcon sx={{"width":"300px","maxWidth":"40%", "display":"flex"}} onClick={() =>{alert('wiu wiu')}} />
//                     </Box>
                    
                    

//                     <Button   onClick={() => {navigate('/register')}} 
//                         sx = {basicStyles}>
//                         Registro de Historia Medica
//                     </Button>

//                     <Button  onClick={ () => {navigate('/showAllUsers')} }
//                         sx = {basicStyles}>
//                         Ver Todos los Usuarios
//                     </Button>

//                     <Button sx = {basicStyles} onClick={ () => {navigate('/medicalRecords'); } } >Consulta de Historias Medicas </Button>


//                     <Button  sx = {basicStyles} onClick={ 
//                         handleCrud
//                     }>Gestion de Datos </Button>

//                     {crud ?(<Box className='statusBarMenu centrate'>
//                         <ButtonGroup disableElevation variant="outlined" orientation="vertical"aria-label="Disabled elevation buttons" sx={{"width":"90%"}} > 

//                             <Button onClick={ () => {navigate('/diseasesCrud'); } } > Enfermedades </Button>
//                             <Button onClick={ () => {navigate('/AllergiesCrud'); } } > Tipos de Alergias </Button>
//                             <Button onClick={ () => {navigate('/coprouroCrud'); } } > Examenes de Laboratoio </Button>
//                             <Button onClick={ () => {navigate('/ematologyCrud'); } } > Ematologias </Button>
                            


//                         </ButtonGroup>


//                     </Box>
//                     ) : (<></>)}                    
                
//             </ButtonGroup>
//        </div>
//}

