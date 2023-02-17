import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import React from "react";
import "./App.css";
import HomePage from './pages/Homepage/HomePage';
import Register from "./pages/Register";
import Booking from './pages/Booking/booking';
import Doctors from './pages/Doctors/doctors';
import Treatments from './pages/Treatments/treatments'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appoinment' element={<Booking/>} />
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/treatments' element={<Treatments/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;