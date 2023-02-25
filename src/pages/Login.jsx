import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [errMsg, setErrmessage] = useState("");
  useEffect(() => {
    setEmailIsValid(email.includes("@"));
  }, [email]);
  useEffect(() => {
    setPasswordIsValid(password.trim().length > 7);
  }, [password]);
  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_PORT}/login`, { email, password })
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", result.userName);

          navigate("/");
        } else {
          setErrmessage(result.error);
        }
      })
      .catch(() => setErrmessage("Server not found"));
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mt-9 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@gmail.com"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="bg-gray-50 border border-gray-300
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4
                   focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
