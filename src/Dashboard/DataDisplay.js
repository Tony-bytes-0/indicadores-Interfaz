/* import { Stack, Box, Typography } from "@mui/material";
import { useState } from "react";

export default function DataDisplay(props) {
    const [adults, setAdults] = useState(false);
    const handleAdults = function (){ setAdults((adults) => !adults); console.log(adults) }

    const Firstsettings ={ padding:1,
        alignContent:'center', justifyContent:'center',
        backgroundColor: props.color,
        '&:hover': {
        opacity: [0.9, 0.8, 0.7],
        },
    }
    const SecundSetting ={ padding:2,
        alignContent:'left', justifyContent:'left',
        backgroundColor: props.color,
        '&:hover': {
        opacity: [0.9, 0.8, 0.7],
        },
    }

    return <Stack direction={'column'} padding={1} onClick={() => handleAdults()} >

        <Box display={'flex'} sx={Firstsettings} >
            <Typography variant="h5"> {props.text} </Typography>
        </Box>
        
        <Box display={'flex'}  sx={SecundSetting}>
            <Typography variant="h5"> {props.data} </Typography>
        </Box>

        </Stack>
    //{props.data} {props.text}
} */

import * as React from 'react';
//icons
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import PieChartSharpIcon from '@mui/icons-material/PieChartSharp';
//MUI
import { Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
//REdux
import { totalAdultQueryToggle, totalAdultsToggle } from '../redux/graphState/activeGraphs';
import { useDispatch } from 'react-redux';

export default function DataDisplay(props) {
    const dispatch = useDispatch()

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
     {console.log(props)}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PieChartSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.data}  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PieChartSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vista del Grafico"  />

        {(props.text === 'Total Adultos') ? <Button variant="contained" 
        onClick={() =>{dispatch(totalAdultsToggle())}} >Vista del Grafico</Button> : null}

        {(props.text === 'Total de Consultas Adulto') ? <Button variant="contained" 
        onClick={() =>{dispatch(totalAdultQueryToggle())}}>Vista del Grafico</Button> : null}

      </ListItem>

    </List>
  );
}