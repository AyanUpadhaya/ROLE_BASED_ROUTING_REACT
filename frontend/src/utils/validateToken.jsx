import {jwtDecode} from "jwt-decode";

// Validate token by checking its expiry
const validateToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime; // Token is valid if current time is less than expiry
  } catch (error) {
    console.error("Invalid token:", error);
    return false; // Invalid token
  }
};

export default validateToken;
