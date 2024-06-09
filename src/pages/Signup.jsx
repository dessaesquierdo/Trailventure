import { Link } from "react-router-dom";
import React from "react";

function Signup() {
  return (
    <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1>Login</h1>

      <form>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Username" />
        </div>

        <div>
          <label>Username</label>
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div>
          <div>
            <label>
              <input type="checkbox" name="remember" id="remember" />
              Remember me
            </label>
          </div>

          <div>
            <span>Forgot Password?</span>
          </div>
        </div>

        <button type="submit">Create Account</button>

        <div>
          <span>Already have an account? </span>
          <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
