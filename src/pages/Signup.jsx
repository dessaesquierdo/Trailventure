import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { auth } from "../utils/firebase";

function Signup() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const { register, watch, formState, setError, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // redirect to home page if user is logged in live
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSignup = async (data) => {
    try {
      setLoading(true);

      // create user with email and password
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      // firebase error handling
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          setError("email", {
            type: "custom",
            message: "Email already in use",
          });
        } else if (error.code === "auth/invalid-email") {
          setError("email", {
            type: "custom",
            message: "Invalid email",
          });
        } else if (error.code === "auth/operation-not-allowed") {
          setError("root", {
            type: "custom",
            message: "Operation not allowed",
          });

          // generic error handling
        } else {
          setError("root", {
            type: "custom",
            message: "Something went wrong",
          });
        }

        // generic error handling
      } else {
        setError("root", {
          type: "custom",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1 className="text-4xl text-whitefont-bold text-center mb-6">
        Create an Account
      </h1>

      <form onSubmit={handleSubmit(handleSignup)}>
        <div>
          {/* Email input */}
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Email"
              disabled={loading}
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <label
              htmlFor=""
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
          </div>
          {formState.errors.email && (
            <span className="text-red-500 text-sm">
              {formState.errors.email.message}
            </span>
          )}

          {/* Password input */}
          <div className="relative mt-4">
            <input
              type="password"
              disabled={loading}
              placeholder="Password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                },
              })}
            />
            <label
              htmlFor=""
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
          </div>
          {formState.errors.password && (
            <span className="text-red-500 text-sm">
              {formState.errors.password.message}
            </span>
          )}

          {/* Confirm password input */}
          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              disabled={loading}
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            <label
              htmlFor=""
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Confirm Password
            </label>
          </div>
        </div>
        {formState.errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {formState.errors.confirmPassword.message}
          </span>
        )}

        {formState.errors.root && (
          <span className="text-red-500 text-sm">
            {formState.errors.root.message}
          </span>
        )}

        <button
          type="submit"
          className="w-full  mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Redirect to Login page if dont have an account */}
        <div>
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500">
            Log in here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
