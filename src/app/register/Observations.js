import { Grid, TextareaAutosize, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setObservations } from "@/redux/register/preMedicalRecord/obsevations";

export default function Obsevations() {
  //const alphanumeric = /^[a-zA-Z0-9 ]+$/
  
  const dispatch = useDispatch();
  const x = useSelector((state) => state.observaciones);

/*   const handleX = (event) => {
    if (
      event.target.value.match(alphanumeric) != null ||
      event.target.value === ""
    ) {
      dispatch(setObservations(event.target.value));
    }
  }; */
  const handleX = (event) => {
    dispatch(setObservations(event.target.value));
  }

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
