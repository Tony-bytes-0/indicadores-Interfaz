import * as React from 'react';
//icons
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
//MUI
import { Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Separador from '../Separador';
//REdux
//import { useDispatch } from 'react-redux';

function giveMeTotal(obj){
  const x = Object.values(obj); let total = 0; for(let i of x){ total+=i;} return total
}

export default function LastMonthResume(props) {
    //const dispatch = useDispatch()
    const triage = useSelector(state => state.lastMonth.triage)
    const diagnostico = useSelector(state => state.diagnostico.diagnostico)
    const tension = useSelector(state => state.tension.tension)
    const atencionEspecial = useSelector(state => state.atencionEspecial.atencionEspecial)

  return (<Grid item xs={12}>
    <Separador />
    <Typography textAlign={'center'} fontSize={30}>Totales del mes anterior</Typography>
    <List
      sx={{
        width: '100%', maxWidth: 360,
        padding:'0.2rem', margin:'0.2rem',
        display: 'flex', flexDirection: 'row',
      }}
    >
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Triage'} secondary={giveMeTotal(triage)}/>
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Diagnostico'} secondary={giveMeTotal(diagnostico)} />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Tension'} secondary={giveMeTotal(tension)} />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <AccessibilityNewSharpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Atencion especial'} secondary={giveMeTotal(atencionEspecial)} />
      </ListItem>
      <Divider variant="inset" component="li" />
      

    </List></Grid>
  );
}
