
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import AuthPage from "./Pages/Auth/AuthPage"
import PageLayout from "./Layouts/Pagelayout/PageLayout"



function App() {

  return (
    <PageLayout>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
