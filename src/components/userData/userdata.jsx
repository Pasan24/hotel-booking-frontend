import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function UserTag(){

    const [name,setName] = useState("")

    const[userFound,setUserFound]  = useState(false) 
    
    const token = localStorage.getItem("token");
   

    //useEffect(function,[] )
    useEffect(
        ()=>{

            
        if (token != null){
    

            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users/",
            {
                headers : {
                    Authorization : " Bearer " + token,
                    "Content-Type"  : "application/json"
                }

            }
            ).then((res)=>{
                console.log(res)
            setName(res.data.user.firstName+" "+res.data.user.lastName)
            setUserFound(true)

            })

        }
        else{
            setName("")

        }


        },[userFound]  //dependency array  . These array values aresensitive to this cmponenet
    )








    return(
        <div className="absolute right-0 flex items-center 
         cursor-pointer">

        <img 
        className=" rounded-full w-[75px] h-[75px] "

        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
        alt="User Avatar" />

        <span className="text-white ml-[5px] text-lg mr-[10px]">{name}</span>

        <button onClick={ ()=>{
            localStorage.removeItem("token")
           
           setUserFound(false)
        } } >
            Log Out

        </button>


        </div>

    )
}

export default UserTag;