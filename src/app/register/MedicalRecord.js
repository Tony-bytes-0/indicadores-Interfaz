import Separador from "@/components/Separador";

//MUI
import { Grid } from "@mui/material";
import Obsevations from "./Observations";
import PreMedicalRecord from "./PreMedicalRecord";

export default function MedicalRecord() {
  //Main

  return (
    <>
      <Grid container className="fadeIn p-6">
        <Separador label={"Datos de la Historia Medica"} />
        {/* SEPARADOR */}
        <PreMedicalRecord />
        <Obsevations />
      </Grid>
    </>
  );
}
