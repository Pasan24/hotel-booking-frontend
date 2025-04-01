import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import HomePage from "./pages/client-page/homePage.jsx"
import AdminPage from "./pages/adminPage/admin.jsx"
import TestComponent from "./components/test/test.jsx"
import LoginPage from "./pages/login/login.jsx"
import CategoriesPage from "./pages/client-page/categories.jsx"
import { Toaster } from "react-hot-toast"



function App() {
  

  return (
   <BrowserRouter>

   <Toaster position="top-right" reverseOrder={false} />
      <Routes path="/*"  >

        <Route path="/*" element={<HomePage/>} />
        
        <Route path="/admin/*" element= {<AdminPage/>} />

        <Route path="/login" element= {<LoginPage/>} />

        <Route path="/categories" element= {<CategoriesPage/>} />

        <Route path="/test" element= {<TestComponent/>} />
      
   
   
      </Routes>
   
   
   </BrowserRouter>
   
        
  )
}

export default App
