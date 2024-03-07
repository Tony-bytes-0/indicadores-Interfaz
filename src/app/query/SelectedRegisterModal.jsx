import { Box, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Blood, Calendar, Danger, Gender, Height, House, Medic, Monitor, Number, Phone, Scale, Temp, Text, User, Virus } from "./Icons";

const yellowBg = {
  backgroundColor: "lightyellow",
  "&:hover": { backgroundColor: "yellow" },
};
const bluebg = {
  backgroundColor: "lightblue",
  "&:hover": { backgroundColor: "blue" },
};
const greenBg = {
  backgroundColor: "lightgreen",
  "&:hover": { backgroundColor: "darkgreen" },
};
function SelectedRegisterModal(props) {
  return (
    <Box className="flex flex-wrap p-1 m-5 flex-shrink w-full">
      <ListItem sx={bluebg}> {/* nombre Patologia */}
        {props.icon ? <User /> : <Virus />}
        <ListItemText
          primary={props.primary[0]}
          secondary={props.secundary[0]}
        />
      </ListItem>

      <ListItem sx={yellowBg}> {/* Identificacion / tension  */}
      {props.icon ? <Number /> : <Monitor />}
        <ListItemText
          primary={props.primary[1].replaceAll('_', ' ')}
          secondary={props.secundary[1]}
        />
      </ListItem> {/* Genero / Temp  */}
      <ListItem sx={yellowBg}>
        {props.icon ? <Gender Genero={props.Genero} /> : <Temp />}
        <ListItemText
          primary={props.primary[2]}
          secondary={props.secundary[2]}
        />
      </ListItem> {/* Fecha nacimiento / Peso  */}
      <ListItem sx={yellowBg}>
      {props.icon ? <Calendar /> : <Scale />}
        <ListItemText
          primary={props.primary[3].replaceAll('_', ' ')}
          secondary={props.secundary[3]}
        />
      </ListItem> {/* Alergias / Altura  */}
      <ListItem sx={yellowBg}>
        {props.icon ? <Danger /> : <Height />}
        <ListItemText
          primary={props.primary[4]}
          secondary={props.secundary[4]}
        />
      </ListItem>
      <ListItem sx={yellowBg}> {/* grupo sanguineo / observaciones  */}
      {props.icon ? <Blood /> : <Text />}
        <ListItemText
          primary={props.primary[5]}
          secondary={props.secundary[5]}
        />
      </ListItem>
      <ListItem sx={yellowBg}> {/* telefono / fecha visita  */}
      {props.icon ? <Phone /> : <Calendar /> }
        <ListItemText
          primary={props.primary[6].replaceAll('_', ' ')}
          secondary={props.secundary[6]}
        />
      </ListItem>
      <ListItem sx={yellowBg}> {/* Direccion  / medico responsable  */}
      {props.icon ? <House /> : <Medic />}
        <ListItemText
          primary={props.primary[7]}
          secondary={props.secundary[7]}
        />
      </ListItem>
    </Box>
  );
}

export default SelectedRegisterModal;
