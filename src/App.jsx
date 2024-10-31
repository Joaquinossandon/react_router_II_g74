import { Navigate, Route, Routes } from "react-router-dom"
import MainNav from "./components/MainNav"
import Home from "./pages/Home"
import Personaje from "./pages/Personaje"
import { useUser } from "./context/UserContext"
import Login from "./pages/Login"

function App() {
  const { user } = useUser()

  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:idPersonaje" element={user ? <Personaje /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/fresca" element={<h1>Soy una ruta fresca 🍋</h1>} />
      </Routes>
    </>
  )
}

export default App
