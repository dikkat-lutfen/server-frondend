import axios from "axios";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";


function Profile (){
const [user, setUser] = useState("");
const [imageUrl, setImageUrl] = useState ("")
const [list, setList] = useState ([]);


function saveImage (){
    axios.post("http://localhost:3500/image",  {imageUrl: imageUrl, userId :user._id})
    .then(({data})=>{
        console.log(data)
       
    })
}

function del (id){
    axios
    .delete("http://localhost:3500/image/" + id)
    .then(({data})=>{
        console.log(data)
       
    })
}


useEffect(()=>{
    if(localStorage.getItem("token")){
        
        axios
        .post("http://localhost:3500/verify", {
    
            token: localStorage.getItem("token")
        })
        .then(({data})=>{
            //console.log(data)
            setUser(data)
            // after getting user I want invoke her/his images whenI open the page so ı wtire the code that are below
            axios.get("http://localhost:3500/image/" + user._id)
            .then(({data})=>{
              
                setList(data.list)
               
            })
        })
    }
},[list])

    return(
        <div>
            <h1>this is {user.username} profile</h1>
            <input onChange = { (e)=>setImageUrl(e.target.value)} />
            <button onClick = {()=> saveImage()}> save Img</button>
            {list.map((e,index)=>{
               return(
                
                <div key={index}>
                  <img src={e.imageUrl}/>
                  <h1>title</h1>
                  <button onClick={()=>{
                    del(e._id);
                   
                  } 
                  }>delete</button>
                </div>
               )
            })}
        </div>
    )
}

export default Profile