import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import HomePage from "./pages/client-page/homePage.jsx"
import AdminPage from "./pages/adminPage/admin.jsx"
import TestComponent from "./components/test/test.jsx"
import LoginPage from "./pages/login/login.jsx"



function App() {
  

  return (
   <BrowserRouter>
      <Routes path="/*"  >

        <Route path="/*" element={<HomePage/>} />
        
        <Route path="/admin/*" element= {<AdminPage/>} />

        <Route path="/login" element= {<LoginPage/>} />

      
   
   
      </Routes>
   
   
   </BrowserRouter>
   
        
  )
}

export default App
