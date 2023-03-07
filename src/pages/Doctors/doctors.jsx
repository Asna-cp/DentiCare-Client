import React from "react";
import Navbar from "../navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../footer";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  async function getDoctors() {
    axios.get(`${process.env.REACT_APP_PORT}/alldoctors`).then((response) => {
      setDoctors(response?.data);
    });
  }
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div>
      <Navbar />
      <Link
      to= "/doctorDetails"
      className="grid grid-cols-12 p-12">
        {doctors?.map((doctor) => (
          <div class="rounded-lg shadow-lg bg-white m-3 col-span-4">
            
              <div>
                <img
                  class="rounded-t-lg w-full object-cover"
                  src={doctor.image}
                  alt="myimage"
                />

              </div>
              
            

            <div class="p-6 ">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {doctor.doctorName}
              </h5>
              <p class="text-gray-700 text-base mb-4">
                {doctor.specialist} Specialist
              </p>
              {/* <p class="text-gray-700 text-base mb-4">{doctor.description}</p>
              <p class="text-gray-700 text-base mb-4">
                {doctor.experience} Years Experience
              </p> */}
            </div>
          </div>
        ))}
      </Link>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Doctors;
