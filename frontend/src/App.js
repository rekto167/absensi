import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Beranda from './pages/Beranda'
import Profil from './pages/Profil'
// components
import Menu from './components/Menu'
// layout
import Layout from './layouts/Layout'
import { Fragment } from 'react'
import Notifikasi from './pages/Notifikasi'
import Kehadiran from './pages/Kehadiran'
import UbahProfil from './pages/UbahProfil'
import Registrasi from './pages/Registrasi'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto w-[35%] h-screen bg-a17" >
          <div className="container p-5">
            <Routes>
              <Route index path="/beranda" element={<Beranda/>} />
              <Route exact path="/kehadiran" element={<Kehadiran/>} />
              <Route exact path="/notifikasi" element={<Notifikasi/>} />
              <Route exact path="/profil" element={<Profil/>} />
              <Route exact path="/ubahprofil" element={<UbahProfil/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/registrasi" element={<Registrasi/>} />
              <Route exact path="/reset_password" element={<ResetPassword/>} />
            </Routes>
          </div>
          <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
