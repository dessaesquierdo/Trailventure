import { Link } from "react-router-dom";
import React from "react";

function Login() {
  return (
    <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1 className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>

      <form>
        <div className="relative my-4">
          <input
            type="email"
            placeholder="Email"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label
            htmlFor=""
            class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Email
          </label>
        </div>

        <div className="relative my-4">
          <input
            type="password"
            placeholder="Password"
            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label
            htmlFor=""
            class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Password
          </label>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label>Remember Me</label>
          </div>

          <div>
            <span>Forgot Password?</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full  mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 transition-colors duration-300"
        >
          Login
        </button>

        <div>
          <span className="m-4">Don't have an account?</span>
          <Link className="text-blue-500" to="/signup">
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
