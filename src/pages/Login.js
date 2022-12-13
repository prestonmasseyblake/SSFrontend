import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { url } from "../utils/moreUtils";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
   const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const setInputField = (e) => {
        console.log("trying to change",email)
        setEmail(e.target.value)
    }

    const setInputFieldPassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
         
          e.preventDefault();
          // const body = {
          //     "email": email,
          //     "password": password   
          // };
          // const headers = {
          //   // Authorization: "Bearer my-token",
          //   "Content-Type": "application/json",
          // };
          // axios
          //     .post(`${url}/login`, {body}, { headers })
          //     .then((response) => (
          //       console.log(response)
          //     ));
        // console.log(email, password);
      console.log("trying to navigate")
      navigate("swipe");
      
    };
  
  
    return (
      <div className="w-full h-full login-page">
        <div className="h-screen flex bg-gray-bg1">
          <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
            <h1 className="text-2xl text-black font-medium text-primary mt-4 mb-12 text-center">
              Log in to your account 🔐
            </h1>

            <form onSubmit={(e) =>handleFormSubmit(e)}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  type="email"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="email"
                  placeholder="Your Email"
                  onChange={(e) => setInputField(e)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => {setInputFieldPassword(e)}}
                  value={password}
                  type="password"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="password"
                  placeholder="Your Password"
                />
              </div>

              <div className="flex justify-center items-center mt-6">
                <Link to="">
                  <button onClick={(e) => {handleFormSubmit(e) }}
                    className={`bg-green py-2 px-4 text-sm text-blue-500  
                    rounded border border-green focus:outline-none
                    focus:border-green-dark`}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login


