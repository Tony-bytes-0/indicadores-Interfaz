import React from "react";
//MUI
import { Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Box } from '@mui/material';
    //icons
    import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
    import PieChartSharpIcon from '@mui/icons-material/PieChartSharp';
    import CircleIcon from '@mui/icons-material/Circle';
    import { green, yellow, red } from '@mui/material/colors';
//REdux
import { totalAdultsToggle, totalDiagnosticoToggle, totalEspecialidadesToggle, totalTensionToggle } from '@/redux/graphState/activeGraphs';
import { useDispatch } from 'react-redux';

const dots = {green: green[500], yellow: yellow[500], red: red[400] }



export default function DataDisplay(props) {
    const dispatch = useDispatch()

    function getColor(msj){
        if(msj === 'Todo normal'){return dots.green}
        else if(msj === 'Regular'){return dots.yellow}
        else if(msj === 'Alerta'){return dots.red}
    }; const dotColor = getColor(props.msj);

  
  return (<Box sx ={{borderStyle:'solid', borderRadius:'1rem'}}>
    <List sx={{ width: '100%', maxWidth: 360, padding:'0.2rem', margin:'0.5rem' }}>

      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary={props.total} />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar> <CircleIcon sx={{color: dotColor}} /> </ListItemAvatar>
        <ListItemText primary={'Estado: ' + props.msj} />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PieChartSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vista del Grafico"  />
      </ListItem>

      <Divider variant="inset" component="li" />
        <ListItem>
        {(props.text === 'Triaje') ? <Button variant="contained" className="bg-blue-600 mx-auto"
          onClick={() =>{dispatch(totalAdultsToggle())}} >Grafico</Button> : null}

        {(props.text === 'Diagnóstico') ? <Button variant="contained" className="bg-blue-600"
          onClick={() => { dispatch(totalDiagnosticoToggle())}}>Grafico</Button> : null}

        {(props.text === 'Tensión') ? <Button variant="contained" className="bg-blue-600"
          onClick={() => { dispatch(totalTensionToggle()) }}>Grafico</Button> : null}

        {(props.text === 'Atención especial') ? <Button variant="contained" className="bg-blue-600"
          onClick={() => { dispatch(totalEspecialidadesToggle()) }}>Grafico</Button> : null}

      </ListItem>
        
    </List></Box>
  );
}