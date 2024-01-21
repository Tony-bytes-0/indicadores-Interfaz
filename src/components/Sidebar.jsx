"use client"
//MUI
import Button from '@mui/material/Button';
import { Paper, MenuList, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
    //iconos
import HealingIcon from '@mui/icons-material/Healing'; 
import FolderSharedIcon from '@mui/icons-material/FolderShared'; 
import GroupsIcon from '@mui/icons-material/Groups';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useDispatch } from 'react-redux';
import Link from 'next/link';


export default function SideBar() {//MAIN
    //const loggedUser = useSelector(state => state.loginController)

    //const [register, setRegister] = useState(false)
    const [crud, setCrud] = useState(false)
    const [query, setQuery] = useState(false)
    //const [indicator, setIndicators] = useState(false)


    //const basicStyles = {"padding":"15px","marginTop":"20px","display":"flex"}
    return <Paper sx={{ width: '17%', maxWidth: '100%', height: '10000px',  position: 'fixed' }} className='bg-slate-300' >{/*aqui esta el slate!!!*/}
    <MenuList>
        <Box><Button></Button></Box>

        <MenuItem >
            <ListItemIcon > <DashboardIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'18px'}sx={{"padding":"10px"}} > 
                    <Link href='/dashboard' > <b>Dashboard </b></Link> 
                </Typography>     
        </MenuItem>

        <MenuItem className='p-3  m-2'>
            <ListItemIcon> <CreateNewFolderIcon /> </ListItemIcon>
                <Typography noWrap fontSize={'15px'} > 
                    <Link href='/register'> <b>historia medica </b></Link>
                </Typography>     
        </MenuItem>

        <MenuItem onClick={() => {setQuery(!query); setCrud(false);  }}>
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

        <MenuItem onClick={() => {setCrud(!crud); setQuery(false);  }}>
            <Typography noWrap fontSize={'15px'}sx={{"padding":"10px"}} > <b>Gestionar Datos</b> </Typography>
        </MenuItem>
            
            {crud ? (<MenuList className = 'fadeIn'>
            <MenuItem >
                <ListItemIcon> <HealingIcon /> </ListItemIcon>
                <Link href='/diseasesCrud' > Enfermedades</Link>
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

