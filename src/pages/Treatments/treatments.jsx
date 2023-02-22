import React from "react";
import Navbar from "../navbar";
import axios from "axios";
import { useState, useEffect } from "react";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  
  async function viewTreatments() {
    axios
      .get(`${process.env.REACT_APP_PORT}/alltreatments`)
      .then((response) => {
        setTreatments(response?.data);
      });
  }
  useEffect(() => {
    viewTreatments();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        {treatments?.map((treatment) => (
          <div class=" justify-center mt-4 ml-5 col-span-6 ">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg h-72">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/Images/pediatric.jpg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start overflow-y-auto">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {treatment.treatmentname}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  {treatment.discription}
                </p>
                <p class="text-gray-700 text-base mb-4">{treatment.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
