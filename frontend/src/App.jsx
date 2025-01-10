import './App.css'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />


      </Routes>
    </div>
    
    </>
  )
}

export default App
