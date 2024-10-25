import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/header.jsx"
import HomePage from "./pages/client-page/homePage.jsx"
import AdminPage from "./pages/adminPage/admin.jsx"



function App() {
  

  return (
   <BrowserRouter>
      <Routes path="/*"  >

        <Route path="/*" element={<HomePage/>} />
        
        <Route path="/admin/*" element= {<AdminPage/>} />

      
   
   
      </Routes>
   
   
   </BrowserRouter>
   
        
  )
}

export default App
