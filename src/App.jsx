import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"
import Contact from "./components/pages/contact/Contact"
import { } from "@fortawesome/react-fontawesome"


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App