import * as React from 'react';
//icons
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import PieChartSharpIcon from '@mui/icons-material/PieChartSharp';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
//MUI
import { Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Paper, Box } from '@mui/material';
//REdux
import { totalAdultsToggle, totalDiagnosticoToggle, totalEspecialidadesToggle, totalTensionToggle } from '../redux/graphState/activeGraphs';
import { useDispatch } from 'react-redux';

export default function DataDisplay(props) {
    const dispatch = useDispatch()


  return (<Box sx ={{borderStyle:'solid', borderRadius:'1rem'}}>
    <List
      sx={{
        width: '100%', maxWidth: 360,
        padding:'0.2rem', margin:'0.5rem',
        border: 1
      }}
    >
      <Divider variant="inset" component="li" />
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
        <ListItemAvatar>
          <Avatar>
            <PriorityHighIcon />
          </Avatar>
        </ListItemAvatar>
        <Paper sx={{ bgcolor: '#5FFFBF', padding: '0.5rem'}} > Estado de alerta segun datos (?)</Paper>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PieChartSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vista del Grafico"  />

        {(props.text === 'Triage') ? <Button variant="contained" 
          onClick={() =>{dispatch(totalAdultsToggle())}} >Grafico</Button> : null}

        {(props.text === 'Diagnóstico') ? <Button variant="contained" 
          onClick={() => { dispatch(totalDiagnosticoToggle())}}>Grafico</Button> : null}

        {(props.text === 'Tensión') ? <Button variant="contained"
          onClick={() => { dispatch(totalTensionToggle()) }}>Grafico</Button> : null}

        {(props.text === 'Atención especial') ? <Button variant="contained"
          onClick={() => { dispatch(totalEspecialidadesToggle()) }}>Grafico</Button> : null}
      </ListItem>

    </List></Box>
  );
}