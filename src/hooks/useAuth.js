import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase"; // Ensure db is imported
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods

// listening for live user session data
function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // add listener on component mount
  useEffect(() => {
    // listen for changes to the user session data and set the user state
    const unSubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUser({ uID: user.uid, ...userDoc.data() });
        }
      } else {
        setUser(null);
      }
    });

    // when the component unmounts, remove the listener to avoid memory leaks
    return () => unSubscribeAuth();
  }, [navigate]);

  // return user session data
  // user can be User object or null
  // https://firebase.google.com/docs/reference/js/v8/firebase.User
  console.log(user);
  return { user };
}

export default useAuth;
