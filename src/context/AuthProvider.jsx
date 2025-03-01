import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "./AuthContext"; // Import the context
import { auth } from "../utils/firebase"; // Import Firebase auth

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes  //@ login logout signup
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);  
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ authUser  }}>
      {!loading && children}    {/* shortCircut based rendering */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
