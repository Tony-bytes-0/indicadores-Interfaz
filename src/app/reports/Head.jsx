import { Typography } from "@mui/material";
import Separador from "@/components/Separador";

const Head = (props) => {
    return(
    <>
      <Typography fontSize={18} variant="overline">
        <b>{props.title}</b>
      </Typography>
      <Separador />
    </>)
  };

  export default Head