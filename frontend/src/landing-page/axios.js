// import axios from "axios";

// const api = axios.create({
//     baseURL: process.env.REACT_APP_DASHBOARD_URL,
//     withCredentials: true,
// });

// export default api;
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials: true,
});

export default api;
