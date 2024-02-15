"use client"
//MUI
import Button from '@mui/material/Button';
import { Paper, MenuList, MenuItem, ListItemIcon, Typography, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';
    //iconos


import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link';


export default function SideBar() {//MAIN

    const [crud, setCrud] = useState(false)
    const [query, setQuery] = useState(false)


    //const basicStyles = {"padding":"15px","marginTop":"20px","display":"flex"}
    return <Paper sx={{ width: '17%', maxWidth: '100%', height: '10000px',  position: 'fixed' }} className='bg-slate-300' >{/*aqui esta el slate!!!*/}
    <MenuList>
        <Box><Button></Button></Box>

        <MenuItem >
            <ListItemIcon > <DashboardIcon /> </ListItemIcon>
                    {/* <Link href='/dashboard' > Dashboard </Link> */} 
                    <ListItemButton>
                    <Link href ='dashboard'><b>Dashboard</b></Link>

                    </ListItemButton>
        </MenuItem>

        <MenuItem className='p-3  m-2'>
            <ListItemIcon> <CreateNewFolderIcon /> </ListItemIcon>
                    {/* <Link href='/register'> <b>historia medica </b></Link> */}
                    <ListItemButton>
                    <Link href = '/register'><b>historia medica</b></Link>

                    </ListItemButton>
        </MenuItem>





    </MenuList>
  </Paper>
}

