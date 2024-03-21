"use client"
//modulos
import UserData from "./UserData"
import MedicalRecord from "./MedicalRecord"
import Medic from './Medic'
import PostBtn from "./PostBtn"
import LocalidadList from "./localidad/LocalidadList"
function Register (){
    
    return <div className="my-10">
    <UserData />{/* Ingresar los Datos del usuario*/}
    <LocalidadList />
    <MedicalRecord />
    <Medic /> 
    <PostBtn />
</div>}

export default function Page() {
  return <Register />
}






