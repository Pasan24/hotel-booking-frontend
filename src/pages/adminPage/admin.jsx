import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import {
  AiOutlineBook,
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineComment,
  AiOutlinePicture,
} from "react-icons/ai";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-red-500 h-[100vh] flex flex-col p-4 space-y-4">
        
        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlineBook />
          <Link to="/admin/bookings">Bookings</Link>
        </div>

        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlineAppstore />
          <Link to="/admin/categories">Categories</Link>
        </div>

        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlineHome />
          <Link to="/admin/rooms">Rooms</Link>
        </div>

        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlineUser />
          <Link to="/admin/users">Users</Link>
        </div>

        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlineComment />
          <Link to="/admin/feedbacks">Feedbacks</Link>
        </div>

        <div className="text-white text-[24px] flex items-center gap-3 p-2 hover:bg-blue-400 rounded-md">
          <AiOutlinePicture />
          <Link to="/admin/gallery">Gallery Items</Link>
        </div>
      </div>

      {/* Main content area */}
      <div className="w-[80%] max-h-[100vh] bg-blue-600 overflow-y-scroll   ">
       
        <Routes path="/">
          <Route path="/bookings" element={<h1> Bookings</h1>} />
          <Route path="/categories" element={<h1>Categories</h1>} />
          <Route path="/rooms" element={<h1>Rooms</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/feedbacks" element={<h1>Feedbacks</h1>} />
          <Route path="/gallery" element={<h1>Gallery Items</h1>} />
        </Routes>
    
      </div>
    </div>
  );
}
