import axios from "axios";

export default axios.create({
  baseURL: "https://vercel.com/khieuduong/backend-nodejs/api",
  headers: {
    "Content-type": "application/json"
  }
});