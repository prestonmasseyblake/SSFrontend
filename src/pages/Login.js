import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { url } from "../utils/moreUtils";
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setInputField = (e) => {
    setUsername(e.target.value);
  };

  const setInputFieldPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    const headers = {
      // Authorization: "Bearer my-token",
      "Content-Type": "application/json",
    };
    setLoading(true);
    axios
      .post(`${url}/login`, body, { headers })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
      })
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
        navigate("swipe");
      });
    // console.log(email, password);
  };
  const Loading = () => (
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
  return (
    <div className="w-full h-full login-page">
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl text-black font-medium text-primary mt-4 mb-12 text-center">
            Log in to your account 🔐
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                value={username}
                type="text"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="username"
                placeholder="Your username"
                onChange={(e) => setInputField(e)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => {
                  setInputFieldPassword(e);
                }}
                value={password}
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className={`bg-green py-2 px-4 text-sm text-blue-500  
                    rounded border border-green focus:outline-none
                    focus:border-green-dark flex`}
              >
                {loading && <Loading />}
                Login
              </button>
            </div>
          </form>
          <div className="flex my-4 justify-center">
            <p>Dont have an account </p>
            <Link className="text-blue-400 ml-2" to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


