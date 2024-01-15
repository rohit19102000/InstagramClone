
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import AuthPage from "./Pages/Auth/AuthPage"



function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    </Routes>
    </>
  )
}

export default App
