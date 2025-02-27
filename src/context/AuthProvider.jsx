import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthContext from "./AuthContext"; // Import the context
import { auth } from "../utils/firebase"; // Import Firebase auth

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ authUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
