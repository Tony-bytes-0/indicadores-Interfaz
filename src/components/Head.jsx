import { Typography } from "@mui/material";
import Separador from "@/components/Separador";

const Head = (props) => {
    return(
    <>
      <Typography fontSize={18} variant={props.caption ? 'caption' : 'overline'}>
        <b>{props.title}</b>
      </Typography>
      <Separador />
    </>)
  };

  export default Head