import { ListItemIcon } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import NumbersIcon from "@mui/icons-material/Numbers";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScaleIcon from "@mui/icons-material/Scale";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DangerousIcon from "@mui/icons-material/Dangerous";
import HeightIcon from "@mui/icons-material/Height";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HouseIcon from "@mui/icons-material/House";

import React from "react";

export const User = () => {
  return (
    <ListItemIcon>
      <AccountBoxIcon />
    </ListItemIcon>
  );
};
export const Virus = () => {
  return (
    <ListItemIcon>
      <CoronavirusIcon />
    </ListItemIcon>
  );
};

export const Number = () => {
  return (
    <ListItemIcon>
      <NumbersIcon />
    </ListItemIcon>
  );
};

export const Monitor = () => {
  return (
    <ListItemIcon>
      <MonitorHeartIcon />
    </ListItemIcon>
  );
};

export const Gender = (Genero) => {
  return Genero ? (
    <ListItemIcon>
      <FemaleIcon />
    </ListItemIcon>
  ) : (
    <ListItemIcon>
      <MaleIcon />
    </ListItemIcon>
  );
};

export const Female = () => {
  return (
    <ListItemIcon>
      <FemaleIcon />
    </ListItemIcon>
  );
};
export const Temp = () => {
  return (
    <ListItemIcon>
      <DeviceThermostatIcon />
    </ListItemIcon>
  );
};

export const Calendar = () => {
  return (
    <ListItemIcon>
      <CalendarMonthIcon />
    </ListItemIcon>
  );
};

export const Scale = () => {
  return (
    <ListItemIcon>
      <ScaleIcon />
    </ListItemIcon>
  );
};

export const Phone = () => {
  return (
    <ListItemIcon>
      <SettingsCellIcon />
    </ListItemIcon>
  );
};
export const Blood = () => {
  return (
    <ListItemIcon>
      <BloodtypeIcon />
    </ListItemIcon>
  );
};
export const Text = () => {
  return (
    <ListItemIcon>
      <TextSnippetIcon />
    </ListItemIcon>
  );
};
export const House = () => {
  return (
    <ListItemIcon>
      <HouseIcon />
    </ListItemIcon>
  );
};
export const Height = () => {
  return (
    <ListItemIcon>
      <HeightIcon />
    </ListItemIcon>
  );
};
export const Danger = () => {
  return (
    <ListItemIcon>
      <DangerousIcon />
    </ListItemIcon>
  );
};
export const Medic = () => {
  return (
    <ListItemIcon>
      <LocalHospitalIcon />
    </ListItemIcon>
  );
};

/* 
export const = () => {
    return (
        <ListItemIcon>

        </ListItemIcon>
    )
} 
*/
