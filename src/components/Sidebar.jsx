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
import AssessmentIcon from "@mui/icons-material/Assessment";
import Link from "next/link";

export default function SideBar() {
  const itemStyleClases =
    "text-sm sm:text-xs md:text-lg lg:text-xl xl:text-2xl whitespace-pre-wrap overflow-visible break-words flex-wrap break-all text-black";
  const links = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Historia medica",
      link: "/register",
      icon: <CreateNewFolderIcon />,
    },
    { title: "Consultas", link: "/query", icon: <SearchIcon /> },
    { title: "Generar reportes", link: "/reports", icon: <AssessmentIcon /> },
  ];

  return (
    <Paper
      sx={{
        width: "17%",
        maxWidth: "100%",
        height: "10000px",
        position: "fixed",
        left: "0%",
      }}
      className="bg-slate-300"
    >
      {/*aqui esta el slate!!!*/}
      <MenuList>
        <Box>
          <Button></Button>
        </Box>
        {links.map((e) => (
          <MenuItem key={e.title}>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemButton>
              <Link href={e.link}>
                <Typography className={itemStyleClases}>{e.title}</Typography>
              </Link>
            </ListItemButton>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
