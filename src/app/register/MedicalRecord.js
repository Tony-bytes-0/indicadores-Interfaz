import Separador from "@/components/Separador";

//MUI
import { Grid } from "@mui/material";
import Obsevations from "./Observations";
import PreMedicalRecord from "./PreMedicalRecord";
import SymptompList from "./sintomas/SymptomList";

export default function MedicalRecord() {
  //Main

  return (
    <>
      <Grid container className="fadeIn p-6">
        <Separador label={"Datos de la Historia Medica"} />
        <PreMedicalRecord />
      </Grid>
      <SymptompList />
      <Obsevations />
    </>
  );
}
