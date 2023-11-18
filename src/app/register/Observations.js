import { Button, Grid, TextareaAutosize } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setObservations } from "@/redux/Register/preMedicalRecord/obsevations"

export default function Obsevations() {
    const dispatch = useDispatch()
    const [showObservations, setShow] = useState(false)
    const x = useSelector(state => state.obsevations)
    const handleX = (event) => { dispatch(setObservations(event.target.value)) }



    if(showObservations){return<>
        <Grid container>
            <Grid item xs={12}>
                <TextareaAutosize className='text-center items-center m-auto' aria-label="minimum height" minRows={3} placeholder="" style={{ width: "60%" }}
                value={x} onChange={handleX}/>
            </Grid>

            <Grid item xs={12}>
                <div className="centrate">
                    <Button variant="contained" className="bg-blue-600" onClick={() => {setShow(false)} }>Eliminar Descripcion</Button>
                </div>
            </Grid>
        </Grid></>
    }
    
    
    
    else{
        return <Grid item xs={12} sx = {{"marginTop":"20px"}}>
            <div className="centrate" >
                <Button variant="contained" className="bg-blue-700" onClick={() => {setShow(true)} }>Insertar Descripcion de la Enfermedad Actual</Button>
            </div>
        </Grid>
    }
}