import { useState } from "react";
import "./login.css";
import axios from "axios";

export default function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login", {

        email: email,
        password: password,

      })

      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
        

       if(res.data.user.type=="customer"){
        window.location.href = " / "

       }else if(res.data.user.type=="admin") {
         window.location.href = " /admin "

       }

      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div className="w-full h-[100vh] bg-blue-600 pic-bg  flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
        <h1 className=" text-4xl text-white text-center p-[15px] absolute top-[40px] text-center">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter your Email  Address "
          className="w-[80%] border text-white bg-[#00000000] 
                     border-[2px] placeholder:text-white border-white h-[50px] px-[5px] mb-[5px]"
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter your Password "
          className="w-[80%] border text-white bg-[#00000000] 
                     border-[2px] placeholder:text-white border-white h-[50px] px-[5px] mb-[5px]"
          defaultValue={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className=" w-[80%] absolute bottom-[40px] text-white h-[50px] bg-red-500 "
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
