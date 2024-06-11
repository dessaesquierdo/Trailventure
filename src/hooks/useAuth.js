import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

// listening for live user session data
function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // add listener on component mount
  useEffect(() => {
    // if the user is logged in set the user session data to loggedin or true
    const unSubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setUser(user);
    });

    // if the use is logged out or none set the user session data to loggedout or false
    return () => unSubscribeAuth();
  }, [navigate]);

  return { user };
}

export default useAuth;
