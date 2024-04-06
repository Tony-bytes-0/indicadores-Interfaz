"use client";
//modulos
import UserData from "./UserData";
import MedicalRecord from "./MedicalRecord";
import Medic from "./medic/Medic";
import PostBtn from "./PostBtn";
import LocalidadList from "./localidad/LocalidadList";
import Satisfaction from "./Satisfaction"
import { useEffect, useState } from "react";
import axios from "axios";
function RegisterMain() {
  const [list, setList] = useState([]);
  //fetchs
  const fetchList = () => {
    axios.get("http://localhost:4000/localidad").then(function (response) {
      setList(response.data);
    });
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="my-10">
      <UserData />
      <LocalidadList list={list} fetchList={fetchList} />
      <MedicalRecord />
      <Satisfaction />
      <Medic />
      <PostBtn />
    </div>
  );
}

export default function Page() {
  return <RegisterMain />;
}
