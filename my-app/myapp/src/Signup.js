import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Signup (){

    const [username, setUsername]= useState("") ;
    const [password, setPassword]= useState("");
    const navigate = useNavigate();


   function signup (){
      axios
      .post("http://localhost:3500/signup", {username, password})
      .then(({data})=>{
        console.log(data)
        if(data.message === "new user saved"){ // is saved we will go directly to login page so we need to import useNavigate react router dom
           navigate("/login")
        }else{
            alert(data.message)
        }
      })
   }



    return (
        <div>
            <input onChange={(e)=>{setUsername(e.target.value)}}/>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <button onClick={()=>signup()}>Signup</button>
        </div>
    )


}

export default Signup;