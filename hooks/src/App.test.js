import React, {useState} from "react";
import "./stles.css";
import UserList from "./UserList";

const data = [
  {id : 1, name: "Ahmet", email : "deneme@deneme.com", age:25, color:"lightcyan"},
  {id : 2, name: "Ahmet", email : "deneme@deneme.com", age:25,color:"lightcyan"},
  {id : 3, name: "Ahmet", email : "deneme@deneme.com", age:25,color:"lightcyan"}
];


const App = () => {
  const [users,setUsers] = useState(data);
  const changeColor = (id,color) => setUsers(
    setUsers(
      users.map(user=>(user.id===id?))
    )
  )
}