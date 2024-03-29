import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import "./App.css";

import HomePage from "./pages/Homepage/HomePage";
import Register from "./pages/Register";
import Booking from "./pages/Booking/booking";
import Doctors from "./pages/Doctors/doctors";
import Treatments from "./pages/Treatments/treatments";
import Profile from "./pages/Profile/profile";
import Details from "./pages/Doctors/doctorDetails"
function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!token && <Route path="/register" element={<Register />} />}
          {!token && <Route path="/login" element={<Login />} />}
          {token ? <Route path="/appointment" element={<Booking />} /> :    <Route path="/" element={<HomePage />} />}
          {token && <Route path="/doctors" element={<Doctors />} />}
          {token && <Route path="/treatments" element={<Treatments />} />}
          {token && <Route path="/profile" element={<Profile/>} />}
          {token && <Route path="/doctorDetails" element={<Details/>} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
