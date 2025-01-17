export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://healioo.onrender.com/api/v1" // Production backend
    : "http://localhost:5000/api/v1"; // Development backend

export const token = localStorage.getItem("token");
