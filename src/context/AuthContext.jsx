// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Create a context for authentication
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userEmail, setUserEmail] = useState(""); // Track the user's email
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const email = localStorage.getItem("email");

//     // If a token and email are found, the user is considered logged in
//     if (token && email) {
//       setIsAuthenticated(true);
//       setUserEmail(email); // Set the user's email from localStorage
//       navigate("/landing"); // Redirect to landing if authenticated
//     } else {
//       setIsAuthenticated(false); // Treat as not authenticated if no token/email
//       setUserEmail(""); // Clear user email from state
//       navigate("/"); // Redirect to sign-in page if not authenticated
//     }
//   }, [navigate]);

//   const login = (email, password) => {
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");

//     if (email === storedEmail && password === storedPassword) {
//       // Simulate successful login by saving an auth token
//       localStorage.setItem("authToken", "dummy-auth-token"); // Save token
//       setIsAuthenticated(true);
//       setUserEmail(email); // Set email after login
//       navigate("/landing"); // Redirect to landing page after login
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   const signup = (email, password) => {
//     // Simulate sign-up by saving email and password in localStorage
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     localStorage.setItem("authToken", "dummy-auth-token"); // Save token
//     setIsAuthenticated(true);
//     setUserEmail(email); // Set email after sign-up
//     navigate("landing"); // Redirect to sign-in page after signIn
//   };

//   const logout = () => {
//     // Remove the authentication token from localStorage, but retain the email/password
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false); // Clear auth state
//     setUserEmail(""); // Clear user email from state
//     navigate("/"); // Redirect to sign-in page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userEmail, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to access authentication context
// export const useAuth = () => useContext(AuthContext);
