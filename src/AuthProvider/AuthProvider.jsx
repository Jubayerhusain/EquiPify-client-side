import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const authInfo = {
    name: "Jubayer",
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
