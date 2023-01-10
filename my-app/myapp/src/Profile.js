import axios from "axios";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";


function Profile (){
const [username, setUsername] = useState("");

useEffect(()=>{
    if(localStorage.getItem("token")){
        console.log("benim token :", localStorage.getItem("token"))
        axios
        .post("http://localhost:3500/verify", {
            token: localStorage.getItem("token")
        })
        .then(({data})=>{
            console.log(data)
            setUsername(data.username)
        })
    }
})

    return(
        <div>
            <h1>this is {username} profile</h1>
        </div>
    )
}

export default Profile