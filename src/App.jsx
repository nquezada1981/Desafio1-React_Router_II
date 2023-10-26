import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"
import Contact from "./components/pages/contact/Contact"
import { } from "@fortawesome/react-fontawesome"
import NotFound from "./components/pages/NotFound/NotFound"


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App