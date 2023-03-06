import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Cards = () => {

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
      <h1 className="text-center font-bold text-4xl mt-5"> Doctors </h1>
      <div className="flex justify-center">
        {/* {doctors?.map((doctor) => (  
        <div class="rounded-lg shadow-lg mt-5 bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg w-full"
             src={doctor.image} 
             alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
            {doctor.doctorName}
            </h5>
            <p class="text-gray-700 text-base mb-4">
            {doctor.specialist} 
            </p>
          </div>
        </div>
      ))} */}
      <div className="rounded-lg shadow-lg mt-5 mx-3 bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg w-full h-44"
             src={doctors?.[0]?.image} 
             alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            {doctors?.[0]?.doctorName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
            {doctors?.[0]?.specialist} 
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mt-5 mx-3 bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg w-full h-44"
             src={doctors?.[1]?.image} 
             alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            {doctors?.[1]?.doctorName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
            {doctors?.[1]?.specialist} 
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mt-5 mx-3 bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg w-full h-44"
             src={doctors?.[2]?.image} 
             alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            {doctors?.[2]?.doctorName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
            {doctors?.[2]?.specialist} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
