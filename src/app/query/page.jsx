"use client";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicTable from "./BasicTable";
import Filter from "./Filter";
import axios from "axios";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const setFilterAsFunction = (newState) => {
    //to the Filter component, para actualizar desde el hijo
    setFilter(newState);
    setUserList(
      userList.filter(
        (entry) => entry.persona.identificacion === newState.param
      )
    );
  };
  const fetchUserList = () => {
    console.log('fetch!', loading)
    if (loading) {
      axios.get("http://localhost:4000/visitas").then((response) => {
        setUserList(response.data);
        setLoading(false);
      });
    }
  };
  const handleLoading = () => {
    setLoading(true)
  }
  useEffect(() => {
    fetchUserList();
  });
  return (
    <Grid container>
      <Filter setFilter={setFilterAsFunction} fetchUserList={fetchUserList} handleLoading= {handleLoading} />
      {loading ? (
        <CircularProgress className="h-screen top-2/4 left-2/4 fixed" />
      ) : (
        <BasicTable userList={userList} />
      )}
    </Grid>
  );
}
