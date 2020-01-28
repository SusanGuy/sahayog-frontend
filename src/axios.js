import axios from "axios";

if (localStorage.token) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}
export default axios.create({
  baseURL: "http://localhost:3000"
});
