import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

// for live user data
function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // add listener on component mount
  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setUser(user);
    });

    return () => unSubscribeAuth();
  }, [navigate]);

  return { user };
}

export default useAuth;
