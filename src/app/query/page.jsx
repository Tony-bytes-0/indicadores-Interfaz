"use client";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicTable from "./BasicTable";
import axios from "axios";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (loading) {
      axios.get("http://localhost:4000/visitas").then((response) => {
        console.log(response.data);
        setUserList(response.data);
        setLoading(false);
      });
    }
  });
  return (
    <Grid container>
      {loading ? (
        <CircularProgress className="h-screen top-2/4 left-2/4 fixed" />
      ) : (
        <BasicTable userList={userList} />
      )}
    </Grid>
  );
}
