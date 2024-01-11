"use client"
//Redux
import { useDispatch, useSelector } from "react-redux"

//modulos
//import FilterUsers from "./FilterUsers"
import UserData from "./UserData"
import MedicalRecord from "./MedicalRecord"
//import { togglefilterUser, toggleUserData } from "@/redux/Register/registerController/registerController"
import PostBtn from "./PostBtn"

function Register (){
    const registerState = useSelector(state => state.registerController)
    
    const dispatch = useDispatch()

    return <div className="my-10">
    <UserData />{/* Ingresar los Datos del usuario*/}
    <MedicalRecord /> 
    <PostBtn />
</div>}

export default function Page() {
    const registerState = useSelector(state => state.registerController)
    
  return <Register />
}
/*     if(registerState.filterUserActive){
        return<>
        
            <FilterUsers />{// Busqueda de usuarios }
            <h1>una pinga!</h1>
            <MedicalRecord /> <PostBtn />
        </>
    } */


/*     else{return<>
        <UserData />
        <h1>INUTIL</h1>
        <div className="centrate horizontalFlex">
            <Button variant="contained" onClick={() => {dispatch(togglefilterUser(true))}}>Buscar Otro Usuario</Button>
            <Button variant="contained" onClick={() => {dispatch(toggleUserData(true))}}>Volver a Llenar Datos</Button>
        </div>

        <MedicalRecord />
        <PostBtn />
    </>} */





