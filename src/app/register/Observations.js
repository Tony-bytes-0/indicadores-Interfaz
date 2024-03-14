import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setObservations } from "@/redux/register/preMedicalRecord/obsevations";
import Separador from "@/components/Separador";
import { Label } from "@mui/icons-material";

export default function Obsevations() {
  const dispatch = useDispatch();
  const x = useSelector((state) => state.obsevations);
  const handleX = (event) => {
    dispatch(setObservations(event.target.value));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className="text-center">
          <div className="rounded content-center my-5">
            <span><Typography className="font-bold">Observaciones</Typography></span>
            <TextareaAutosize
              className="text-center items-center m-auto border-solid border-4"
              aria-label="minimum height"
              minRows={3}
              style={{ width: "60%" }}
              value={x}
              onChange={handleX}
              label='Observaciones'
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
