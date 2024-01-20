"use client"
//Redux
import {  useSelector } from "react-redux"

//modulos
import UserData from "./UserData"
import MedicalRecord from "./MedicalRecord"
import Medic from './Medic'
import PostBtn from "./PostBtn"

function Register (){
    const registerState = useSelector(state => state.registerController)
    
    return <div className="my-10">
    <UserData />{/* Ingresar los Datos del usuario*/}
    <MedicalRecord />
    <Medic /> 
    <PostBtn />
</div>}

export default function Page() {
    const registerState = useSelector(state => state.registerController)
    
  return <Register />
}






