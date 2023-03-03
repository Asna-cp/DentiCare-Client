import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar";
import { useEffect } from "react";
import Footer from "../footer";

const Profile = () => {
  const [user, setUser] = useState("");
  async function getProfile() {
    await axios
      .get(`${process.env.REACT_APP_PORT}/profile`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((result) => {
        const userData = result.data.user;
        setUser(userData);
      });
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Navbar />

      <div class="w-full">
        <div class="bg-gradient-to-b from-white-800 to-blue-600 h-20"></div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-19">
            <p class="text-3xl font-bold leading-7 text-center">Your Profile</p>
            <form action="" method="post">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div class="md:flex items-center mt-12">
                <div class="w-full md:w-1/2 flex flex-col">
                  <label class="font-semibold leading-none">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                </div>
                <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label class="font-semibold leading-none">Phone</label>
                  <input
                    type="number"
                    value={user.phonenum}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                </div>
              </div>
              <div class="md:flex items-center mt-8">
                <div class="w-full flex flex-col">
                  <label class="font-semibold leading-none">Email</label>
                  <input
                    type="text"
                    value={user.email}
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
