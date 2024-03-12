import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { setSize } from "@/redux/register/preMedicalRecord/size";
import { setTemp } from "@/redux/register/preMedicalRecord/temp";
import { setObservations } from "@/redux/register/preMedicalRecord/obsevations";
import { setWeight } from "@/redux/register/preMedicalRecord/weight";
import { setSistolic } from "@/redux/register/preMedicalRecord/sistolic";
import { setDiastolic } from "@/redux/register/preMedicalRecord/diastolic";
import { setMedicalRecordDate } from "@/redux/register/preMedicalRecord/MedicalRecordDate";
import { setNombre } from "@/redux/register/userData/person/nombre";
import { setApellido } from "@/redux/register/userData/person/apellido";
import { setIdentificacion } from "@/redux/register/userData/person/identificacion";
import { setGenero } from "@/redux/register/userData/person/genero";
import { setTipoSangre } from "@/redux/register/userData/person/tipoSangre";
import { setFechaNacimiento } from "@/redux/register/userData/person/fechaNacimiento";
import { setTelefono } from "@/redux/register/userData/person/telefono";
import { setTelefonoEmergencia } from "@/redux/register/userData/person/telefonoEmergencia";
import { setDireccion } from "@/redux/register/userData/person/direccion";

//import { setDiastolic } from "@/redux/register/preMedicalRecord/diagnostico";
import { setIndications } from "@/redux/register/preMedicalRecord/indications";
import store from "@/redux/store";

export default function PostBtn() {
  //const navigate = useNavigate()
  const dispatch = useDispatch();
  const style = { margin: "2%" };
  const updatePerson = useSelector((state) => state.updatePerson);

  function dataObject() {
    return {
      user: {
        identificacion: store.getState().identificacion,
        nombre: store.getState().nombre,
        apellido: store.getState().apellido,
        genero: store.getState().genero,
        telefono: store.getState().telefono,
        telefonoEmergencia: store.getState().telefonoEmergencia,
        fechaNacimiento: store.getState().fechaNacimiento,
        tipoSangre: store.getState().tipoSangre,
        direccion: store.getState().direccion,
        alergias: "prueba",
        //"sector": store.getState().sectorList.find(x => x.nombre_sector === store.getState().sector).id, //esto me trae el id del sector
      },

      historiaMedica: {
        altura: store.getState().altura,
        peso: store.getState().peso,
        temperatura: store.getState().temperatura,
        tensionSistolica: store.getState().sistolica,
        tensionDiastolica: store.getState().diastolica,
        observaciones: store.getState().observaciones,
        fechaVisita: store.getState().fechaVisita,
      },

      enfermedades: store.getState().enfermedades,

      medic: {
        sacs: store.getState().sacs,
        nombreMedico: store.getState().nombreMedico,
        especialidad: store.getState().especialidad,
      },
    };
  }
  function sendData(personaHistoriaDto) {//esto crea la historia medica
    axios
      .post("http://localhost:4000/visitas/personaHistoria", personaHistoriaDto)
      .then(function () {
        alert("registro exitoso");
        //location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert("ha ocurrido un error desconocido");
      });
    //}
  }
  function updateFunction(personaHistoriaDto) {
    if (updatePerson.id !== "") {
      //caso si se trajo alguna persona existente
      axios
        .patch(
          "http://localhost:4000/persona/" + updatePerson.id,
          personaHistoriaDto.user
        )
        .then(() => {
          console.log("actualizacion del id: ", updatePerson.id, " completa");
          sendData(personaHistoriaDto);
        })
        .catch((e) => {
          console.log(e, "error actualizando persona", personaHistoriaDto.user);
        });
    } else {
      sendData(personaHistoriaDto);
    }
  }

  const updateThenPost = () => {
    updateFunction(dataObject());
  };

  function normalize() {
    dispatch(setSize(""));
    dispatch(setTemp(""));
    dispatch(setDiastolic(""));
    dispatch(setSistolic(""));
    dispatch(setObservations(""));
    dispatch(setWeight(""));
    dispatch(setMedicalRecordDate("1999-01-01"));
    dispatch(setNombre(""));
    dispatch(setApellido(""));
    dispatch(setIdentificacion(""));
    dispatch(setGenero(""));
    dispatch(setFechaNacimiento("2000-01-01"));
    dispatch(setTelefono(""));
    dispatch(setTelefonoEmergencia(""));
    dispatch(setDireccion(""));
    dispatch(setTipoSangre(""));
    dispatch(setRecipe(""));
    dispatch(setIndications(""));
  }

  return (
    <div className="text-center">
      <Button
        variant="contained"
        className="bg-blue-600 "
        style={style}
        onClick={updateThenPost}
      >
        {" "}
        Registar Historia Medica{" "}
      </Button>
    </div>
  );
}
