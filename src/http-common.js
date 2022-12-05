import axios from "axios";

export default axios.create({
  baseURL: "https://backend-nodejs-pi.vercel.app/api",
  headers: {
    "Content-type": "application/json"
  }
});