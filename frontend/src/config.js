export const BASE_URL = "http://localhost:5000/api/v1";
export const token = localStorage.getItem("token");

export default {
  build: {
    rollupOptions: {
      external: ["mongoose"], // Exclude mongoose from the frontend build
    },
  },
};
