import "./login.css";

export default function LoginPage() {

    

  return (
    <div className="w-full h-[100vh] bg-blue-600 pic-bg  flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
        <h1 className=" text-4xl text-black text-center p-[15px] absolute top-[40px] text-center">
            Login
        </h1>

        <input
          type="text"
          placeholder="Enter your Email  Address "
          className="w-[80%] border text-white bg-[#00000000] 
                     border-[2px] placeholder:text-white border-white h-[50px] px-[5px] mb-[5px]"
        />

        <input
          type="password"
          placeholder="Enter your Password "
          className="w-[80%] border text-white bg-[#00000000] 
                     border-[2px] placeholder:text-white border-white h-[50px] px-[5px] mb-[5px]"
        />

        <button  className=" w-[80%] absolute bottom-[40px] text-white h-[50px] bg-red-500 " > Login</button>


      </div>
    </div>
  );
}
