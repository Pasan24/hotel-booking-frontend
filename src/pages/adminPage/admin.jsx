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
import AdminBooking from "../admin/Bookings/adminBooking.jsx";
import AdminCategories from "../admin/categories/adminCategories.jsx";
import Rooms from "../admin/rooms/rooms.jsx";
import Users from "../admin/users/users.jsx";
import AdminFeedback from "../admin/feedback/feedback.jsx";
import GalleryItems from "../admin/galleryItems/galleryItem.jsx";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh]  flex">
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

            
      <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking/>} />
          <Route path="/categories" element={< AdminCategories/> } />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/feedbacks" element={<AdminFeedback/>} />
          <Route path="/gallery" element={<GalleryItems/>} />
        </Routes>
    
   
      </div>
    </div>
  );
}
