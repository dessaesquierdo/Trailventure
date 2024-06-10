import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { FirebaseError } from "firebase/app";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // run once when component mounts
  useEffect(() => {
    // listen whenever user is logged in, redirect to home page
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    // when component unmounts, unsubscribe from listener
    return () => unSubscribe();
  }, [navigate]);

  // for form validation
  const { register, setError, formState, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleLogin = async (data) => {
    try {
      setLoading(true);

      // set browser session persistence if remember me is checked
      if (data.remember) {
        await setPersistence(auth, browserLocalPersistence);
      }

      // sign in with email and password
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      // firebase error handling
      if (error instanceof FirebaseError) {
        // email error handling
        if (error.code === "auth/invalid-email") {
          setError("email", {
            type: "custom",
            message: "Invalid email",
          });
        } else if (error.code === "auth/user-not-found") {
          setError("email", {
            type: "custom",
            message: "User not found",
          });

          // password error handling
        } else if (error.code === "auth/missing-password") {
          setError("password", {
            type: "custom",
            message: "Missing password",
          });
        } else if (error.code === "auth/wrong-password") {
          setError("password", {
            type: "custom",
            message: "Wrong password",
          });

          // form error handling
        } else if (error.code === "auth/too-many-requests") {
          setError("root", {
            type: "custom",
            message: "Too many requests",
          });
        } else if (error.code === "auth/invalid-credential") {
          setError("root", {
            type: "custom",
            message: "Invalid credential",
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
      <h1 className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="relative mt-4">
          <input
            placeholder="Email"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
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

        <div className="relative mt-4">
          <input
            type="password"
            placeholder="Password"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            {...register("password", {
              required: "Please enter your password",
              // only validate on signup page
              // minLength: {
              //   value: 8,
              //   message: "Password must be at least 8 characters",
              // },
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

        {formState.errors.root && (
          <span className="text-red-500 text-sm">
            {formState.errors.root.message}
          </span>
        )}

        <div className="mt-4 flex justify-between items-center text-sm">
          <div>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              {...register("remember")}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <div>
            <span>Forgot Password?</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full  mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 transition-colors duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div>
          <span className="m-4">Don&apos;t have an account?</span>
          <Link className="text-blue-500" to="/signup">
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
