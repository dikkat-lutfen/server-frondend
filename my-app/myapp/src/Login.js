//import axios from "axios";


import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login (){

    const [username, setUsername]= useState("") ;
    const [password, setPassword]= useState("");
    const navigate = useNavigate();


   function login (){
      axios
      .post("http://localhost:3500/login", {username, password})
      .then(({data})=>{
        console.log(data)
        if(data.token ){ // is saved we will go directly to login page so we need to import useNavigate react router dom
            localStorage.setItem("token", data.token)
            const aaa = localStorage.getItem("token")
            console.log("local storage bunu kaydettim:" + aaa)
            navigate("/profile")// we need to save token our localStorage
        }else{
            alert(data.message)
        }
      })
   }



    return (
        <div>
            <input onChange={(e)=>{setUsername(e.target.value)}}/>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <button onClick={()=>login()}>Login</button>
        </div>
    )


}

export default Login;