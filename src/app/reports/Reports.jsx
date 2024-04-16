"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Filter from "./filter/Filter";
import PaginatedTable from "./table/PaginatedTable";
import ButtonActions from "./filter/ButtonActions";
import axios from "axios";
import Swal from "sweetalert2";
import Membrete from "@/components/membrete/Membrete";

function Reports() {
  const url = "http://localhost:4000/visitas/reports";
  const [enfermedad, setEnfermedad] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [fechaInicio, setInicio] = useState("");
  const [fechaFin, setFinal] = useState("");
  const [genero, setGenero] = useState("Ambos");
  const [edadMin, setMin] = useState("");
  const [edadMax, setMax] = useState("");
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);

  const handleEnfermedad = (event) => {
    setEnfermedad(event);
  };
  const handleLocalidad = (event) => {
    setLocalidad(event);
  };
  const handleGenero = (event) => {
    setGenero(event.target.value);
  };
  const handleFechaInicio = (event) => {
    setInicio(event.target.value);
  };
  const handleFechaFinal = (event) => {
    setFinal(event.target.value);
  };
  const handleEdadMin = (event) => {
    setMin(event.target.value);
  };
  const handleEdadMax = (event) => {
    setMax(event.target.value);
  };
  const emptyMsj = () => {
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "No existen registros con las filtros aplicados",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const fetchReport = () => {
    axios.get(url, { params }).then((response) => {
      if (response.data.length > 0) {//si hay datos
        console.log("llenando la lista", response.data);
        handleTableData(response.data);
        setShow(true);
      } else {
        emptyMsj();
      }
    });
  };
  const normalize = () => {
    console.log("normalizando campos de busqueda!");
    handleTableData([]);
    setShow(false);
    setEnfermedad("");
    setLocalidad("");
    setInicio("");
    setFinal("");
    setGenero("Ambos");
    setMin("");
    setMax("");
  };
  const params = {
    localidad: localidad !== null ? localidad.id : "",
    enfermedad: enfermedad !== null ? enfermedad.id : "",
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    edadMin: edadMin,
    edadMax: edadMax,
    genero: genero !== "Ambos" ? genero : "",
  };

  const handleTableData = (data) => {
    setTableData(data);
  };
  return (
    <Grid container marginTop={5} paddingRight={7}>
      {show ? (
        <></>
      ) : (
        <Filter
          handleEnfermedad={handleEnfermedad}
          handleLocalidad={handleLocalidad}
          handleGenero={handleGenero}
          handleFechaInicio={handleFechaInicio}
          handleFechaFinal={handleFechaFinal}
          handleEdadMin={handleEdadMin}
          handleEdadMax={handleEdadMax}
          enfermedad={enfermedad}
          localidad={localidad}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          genero={genero}
          edadMin={edadMin}
          edadMax={edadMax}
          tableData={tableData}
        />
      )}
      <ButtonActions
        tableData={tableData}
        fetchReport={fetchReport}
        normalize={normalize}
      />
      <Grid id="pdf" item xs={12}>
        {show ? (
          <Membrete
            label={"reporte general de pacientes"}
            enfermedad={enfermedad.nombreEnfermedad}
            localidad={localidad.nombreLocalidad}
            fechaInicio={fechaInicio !== "" && fechaFin !== "" ? fechaInicio : ""}
            fechaFin={fechaInicio !== "" && fechaFin !== "" ? fechaFin : ""}
            edadMin={edadMin !== "" && edadMax !== "" ? edadMin : ""}
            edadMax={edadMin !== "" && edadMax !== "" ? edadMax : ""}
          />
        ) : (
          <></>
        )}
        <PaginatedTable data={tableData} handler={handleTableData} />
      </Grid>
    </Grid>
  );
}

export default Reports;
