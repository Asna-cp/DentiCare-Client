import React from "react";
import Navbar from "../navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  async function getDoctors() {
    axios
      .get("http://localhost:8080/api/v1/user/alldoctors")
      .then((response) => {
        setDoctors(response?.data);
      });
  }
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-12 p-12">
        {doctors?.map((doctor) => (
          <div class="rounded-lg shadow-lg bg-white m-3 col-span-4">
            <a href="#!">
              <img
                class="rounded-t-lg w-full object-cover"
                src="/Images/cardd.jpeg"
                alt=""
              />
            </a>
            <div class="p-6 ">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {doctor.doctorName}
              </h5>
              <p class="text-gray-700 text-base mb-4">{doctor.specialist}</p>
              <p class="text-gray-700 text-base mb-4">{doctor.discription}</p>
              <p class="text-gray-700 text-base mb-4">{doctor.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
