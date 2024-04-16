import { Grid, Typography } from "@mui/material";
import ambulatorioPrincipal from "/public/staticassets/logoAmbulatorio.png";
import Image from "next/image";
import Separador from "@/components/Separador";

export default function page() {
  return (
    <Grid container marginTop={10}>
      <Typography fontSize={18} variant="overline" textAlign={'center'} padding={5}>
        Bienvenido al sistema informático para el apoyo a la toma de
        decisiones en el ambulatorio tipo I  `&quot;`Dr. Bernardino Martinez `&quot;`
      </Typography>
      <Separador />
      <Grid
        item
        xs={12}
        container
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Image
          src={ambulatorioPrincipal}
          alt="logo ambulatorio"
          height={"auto"}
        />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
