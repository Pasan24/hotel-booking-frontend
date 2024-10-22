

export default function AdminPage(){

    return(

    <>
  

    <div className=" w-full h-screen bg-red-600 flex flex-col items-center" >

    <div className=" w-[50px] h-[50px] border border-white
     bg-white w-[700px] h-[100px] rounded-lg justify-center flex items-center  "  > 


    <input type="date" />
    <input type="date" />

    <select>
      <option >Luxury</option>
      <option >Standed</option>
      <option >Deluxe</option>
    

    </select>
    <button>Book Now</button>
       </div>

       <h1 className="text-white text-[50px] ">
        
        Welcome to the Leonine Villa </h1>

    </div>
    
    
    </>

    )

}