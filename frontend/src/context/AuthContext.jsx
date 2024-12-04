import { createContext, useState, useEffect } from "react";
import validateToken from "../utils/validateToken";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  // Function to save user data in local storage
  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to load user data from local storage
  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const isValid = validateToken(parsedUser.token);

      if (isValid) {
        setUser(parsedUser);
      } else {
        logout("Session expired. Please log in again.");
      }
    }
  };

  // Function to register a user
  const register = async (registrationData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registrationData),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  };

  // Function to log in a user
  const login = async (loginData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        saveUserToLocalStorage(data.data);
        setUser(data.data);
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  // Function to log out the user
  const logout = (message = "You have been logged out.") => {
    localStorage.removeItem("user");
    setUser(null);
    alert(message);
  };
  // Check if the user is authenticated
  const isAuthenticated = !!user;

  // Load user data from local storage on component mount
  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
