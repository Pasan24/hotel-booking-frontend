import { Link, Route, Routes } from "react-router-dom";


export default function AdminPage(){

    return(


    <div className=" w-full h-screen bg-red-600  ">
        <div>
            <Link className="mr-[20px]" to={"/admin/rooms"}> Rooms</Link>
            <Link to={"/admin/bookings"}> Bookings</Link>

        </div>

        
        <Routes path="/*">

                <Route path="/rooms" element={
                        <div>
                            <h1> Rooms</h1>
                        </div>
                }/>

                    <Route path="/bookings" element={
                        <div>
                            <h1> Bookings</h1>
                        </div>
                }/>


                

         </Routes>
         
         </div>
      



    
    

    )

}