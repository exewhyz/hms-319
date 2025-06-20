import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"
import AppointmentBooking from "./pages/AppointmentBooking.jsx"
import Prescriptions from "./pages/Prescriptions.jsx"
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home.jsx"
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

export default function App() {

  const { isAuthenticated } = useAuth()
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='h-screen p-8'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path='/appointment-booking' element={isAuthenticated ? <AppointmentBooking /> : <Navigate to="/login" />} />
          <Route path='/prescriptions' element={isAuthenticated ? <Prescriptions /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </>
  )
}