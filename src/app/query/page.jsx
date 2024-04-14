"use client";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import BasicTable from "./BasicTable";
import Filter from "./Filter";
import axios from "axios";
import Membrete from "@/components/membrete/Membrete";
import Swal from "sweetalert2";

export default function Page() {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const fetchData = () => {
    axios
      .get("http://localhost:4000/visitas/personalReport", { params })
      .then((response) => {
        console.log(response.data);
        if(response.data.length < 1){
          Swal.fire({
            title: 'No encontrado',
            text: 'Es posible que no existan registros con la cedula suministrada, verifique el numero introducido e intente nuevamente',
            icon:'info'
          })
        }
        else{
          setUserList(response.data);
          setShow(true);
        }

      });
  };
  const reset = () => {
    setUserList([]);
    setShow(false);
  };
  const params = {
    identificacion: filter,
  };

  return (
    <Grid container>
      <Filter
        filter={filter}
        handleFilter={handleFilter}
        fetchData={fetchData}
        show={show}
        reset={reset}
      />
      <Grid id={"pdf"}>
        {show ? <Membrete label={`Historia medica del paciente`} /> : <></>}
        <BasicTable userList={userList} />
      </Grid>
    </Grid>
  );
}
{
  /* <CircularProgress className="h-screen top-2/4 left-2/4 fixed" /> */
}
