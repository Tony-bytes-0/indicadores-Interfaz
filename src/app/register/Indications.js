import { Grid, TextareaAutosize, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setIndications } from "@/redux/Register/preMedicalRecord/indications"

export default function Indications() {
    const dispatch = useDispatch()
    const x = useSelector(state => state.indications)
    const handleX = (event) => { dispatch(setIndications(event.target.value)) }



    return<>
        <Grid container>
            <Grid item xs={12}>
                <Box className = 'text-center' >
                <h4><b>Indicaciones</b></h4>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box className='m-auto flex-auto text-center'>
                    <TextareaAutosize className='m-auto items-center border-solid border-4' aria-label="minimum height" minRows={3} placeholder="" style={{ width: "60%" }}
                    value={x} onChange={handleX}/>
                </Box>


            </Grid>
        </Grid></>
}