import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      .post(`${url}/login`, { body }, { headers })
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
        </div>
      </div>
    </div>
  );
}

export default Login;

//   <section className="login-page h-full gradient-form bg-gray-200 md:h-screen">
//         <div className="container py-12 px-6 h-full">
//           <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
//             <div className="xl:w-10/12">
//               <div className="block bg-white shadow-lg rounded-lg">
//                 <div className="lg:flex lg:flex-wrap g-0">
//                   <div className="lg:w-6/12 px-4 md:px-0">
//                     <div className="md:p-12 md:mx-6">
//                       <div className="text-center">
//                         <img
//                           className="mx-auto w-48"
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                           alt="logo"
//                         />
//                         <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
//                           We are The Lotus Team
//                         </h4>
//                       </div>
//                       <form>
//                         <p className="mb-4">Please login to your account</p>
//                         <div className="mb-4">
//                           <input
//                             type="text"
//                             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                             id="exampleFormControlInput1"
//                             placeholder="Username"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <input
//                             type="password"
//                             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                             id="exampleFormControlInput1"
//                             placeholder="Password"
//                           />
//                         </div>
//                         <div className="text-center pt-1 mb-12 pb-1">
//                           <button
//                             className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
//                             type="button"
//                             data-mdb-ripple="true"
//                             data-mdb-ripple-color="light"
//                             style="
//                         background: linear-gradient(
//                           to right,
//                           #ee7724,
//                           #d8363a,
//                           #dd3675,
//                           #b44593
//                         );
//                       "
//                           >
//                             Log in
//                           </button>
//                           <a className="text-gray-500" href="#!">
//                             Forgot password?
//                           </a>
//                         </div>
//                         <div className="flex items-center justify-between pb-6">
//                           <p className="mb-0 mr-2">Don't have an account?</p>
//                           <button
//                             type="button"
//                             className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                             data-mdb-ripple="true"
//                             data-mdb-ripple-color="light"
//                           >
//                             Danger
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                   <div
//                     className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
//                     style="
//                 background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
//               "
//                   >
//                     <div className="text-white px-4 py-6 md:p-12 md:mx-6">
//                       <h4 className="text-xl font-semibold mb-6">
//                         We are more than just a company
//                       </h4>
//                       <p className="text-sm">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit, sed do eiusmod tempor incididunt ut labore et
//                         dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation ullamco laboris nisi ut aliquip ex
//                         ea commodo consequat.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
