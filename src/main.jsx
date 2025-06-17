import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"
import AppointmentBooking from "./pages/AppointmentBooking.jsx"
import Prescriptions from "./pages/Prescriptions.jsx"
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className='h-screen'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/appointment-booking' element={<AppointmentBooking />} />
          <Route path='/prescriptions' element={<Prescriptions />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
