

function UserTag(){

    return(
        <div className="absolute right-0 flex items-center 
         cursor-pointer">

        <img 
        className=" rounded-full w-[75px] h-[75px] "

        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
        alt="User Avatar" />

        <span className="text-white ml-[5px] text-lg mr-[10px]">Jhon Doe</span>

        </div>

    )
}

export default UserTag;