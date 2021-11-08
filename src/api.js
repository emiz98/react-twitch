import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "YOUT CLIENT ID",
    Authorization: "Bearer YOUR SECRET KEY",
  },
});

export default api;
