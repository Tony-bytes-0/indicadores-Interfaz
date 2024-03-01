"use client";
//MUI
import Button from "@mui/material/Button";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
//iconos

import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export default function SideBar() {
  //MAIN

  //const basicStyles = {"padding":"15px","marginTop":"20px","display":"flex"}
  return (
    <Paper
      sx={{
        width: "17%",
        maxWidth: "100%",
        height: "10000px",
        position: "fixed",
      }}
      className="bg-slate-300"
    >
      {/*aqui esta el slate!!!*/}
      <MenuList>
        <Box>
          <Button></Button>
        </Box>

        <MenuItem className="p-3  m-2">
          <ListItemIcon>
            {" "}
            <DashboardIcon />{" "}
          </ListItemIcon>
          {/* <Link href='/dashboard' > Dashboard </Link> */}
          <ListItemButton>
            <Link href="dashboard">
              <Typography className="text-sm sm:text-xs md:text-lg lg:text-xl xl:text-2xl whitespace-pre-wrap text-black">
                Dashboard
              </Typography>
            </Link>
          </ListItemButton>
        </MenuItem>

        <MenuItem className="p-3  m-2">
          <ListItemIcon>
            {" "}
            <CreateNewFolderIcon />{" "}
          </ListItemIcon>
          {/* <Link href='/register'> <b>historia medica </b></Link> */}
          <ListItemButton>
            <Link href="/register">
              <Typography className="text-sm sm:text-xs md:text-lg lg:text-xl xl:text-2xl whitespace-pre-wrap text-black">
                Historia Medica
              </Typography>
            </Link>
          </ListItemButton>
        </MenuItem>

        <MenuItem className="p-3  m-2">
          <ListItemIcon>
            {" "}
            <SearchIcon />{" "}
          </ListItemIcon>
          {/* <Link href='/register'> <b>historia medica </b></Link> */}
          <ListItemButton>
            <Link href="/query">
              <Typography className="text-sm sm:text-xs md:text-lg lg:text-xl xl:text-2xl whitespace-pre-wrap text-black">
                Consulta
              </Typography>
            </Link>
          </ListItemButton>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
