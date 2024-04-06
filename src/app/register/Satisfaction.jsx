import React from 'react'
import {Box, Select, MenuItem} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { setSatisfaccion } from '@/redux/register/preMedicalRecord/satisfaccion';

export default function Satisfaction() {
  const dispatch = useDispatch()
  const options = ['Buena', 'Regular', 'Deficiente']
  const satisfaccion = useSelector((state) => state.satisfaccion)
  const handleChange = (event) => {
    dispatch(setSatisfaccion(event.target.value))
  }
  return (
    <Box flex >
        <Select 
        value={satisfaccion}
        defaultValue={""}
        onChange={handleChange}
        >
      {options.map((e) => (
        <MenuItem key={e} value={e}>
          {e}
        </MenuItem>
      ))}
        </Select>
    </Box>
  )
}

