"use client"
//MUI
import { Button } from "@mui/material"

//Redux
import { useDispatch, useSelector } from "react-redux"
//import { clearData } from "../../indexModles/features/userData/userData"

//modulos
import FilterUsers from "./FilterUsers"
import UserData from "./UserData"
import MedicalRecord from "./MedicalRecord"
import { togglefilterUser, toggleUserData } from "@/redux/Register/registerController/registerController"
import PostBtn from "./PostBtn"

function Jajano (){
    const registerState = useSelector(state => state.registerController)
    
    const dispatch = useDispatch()

    if(registerState.filterUserActive){
        return<>
            <FilterUsers />{/* Busqueda de usuarios */}
            <MedicalRecord /> <PostBtn />
        </>
    }

    else if(registerState.userDataActive) {return <>
        <UserData />{/* Ingresar los Datos del usuario*/}
        <MedicalRecord /> <PostBtn />
    </>}
    else{return<>
        {/* <SelectedUser /> */}
        <UserData />
        <div className="centrate horizontalFlex">
            <Button variant="contained" onClick={() => {dispatch(togglefilterUser(true))}}>Buscar Otro Usuario</Button>
            <Button variant="contained" onClick={() => {dispatch(toggleUserData(true))}}>Volver a Llenar Datos</Button>
        </div>

        <MedicalRecord />
        <PostBtn />
    </>}
    
}


export default function Page() {
    const registerState = useSelector(state => state.registerController)
    
  return <Jajano />
}


