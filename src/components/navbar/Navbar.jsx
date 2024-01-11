"use client"
import { AppBar, Box, Stack, Typography } from '@mui/material';
import logo from '/public/staticAssets/logoMinisterioParaLaSalud.png';
//import cantarrana from '/public/staticAssets/logoAmbulatorio.png'
import Image from 'next/image';
import * as React from 'react';

function Item(props){
    return (<Box className='text-center justify-center bg-blue-700 rounded-lg' >
        <Typography className='font-mono' fontSize={19}>
            {props.text}
        </Typography>
    </Box>)
}

function DisplayUser(){
    return(<React.Fragment>
        <Typography className='font-mono text-black' fontSize={20} > Usuario registrado:  </Typography>
    </React.Fragment>)
}

export default function Navbar() {
    return(<AppBar position='fixed' className='p-1 bg-slate-300'>{/*aqui esta el slate!!!*/}

<Stack direction="row" spacing={2} className='justify-between'>

    <Image src={logo} width={150} height={90} alt='logo '/>
    {/* <Image src={cantarrana} width={200} height={200} alt='logo '/> */}
    
    <DisplayUser />
{/*     <Item text={'Inicio'} />
    <Item text={'Registrar'} />
    <Item text={'Administrar aplicacion'} /> */}

</Stack>


    </AppBar>)
}


