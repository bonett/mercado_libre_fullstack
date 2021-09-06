import axios from "axios";
const API_URL = `${process.env.REACT_APP_API_BASE}`;

export function fetchItemList({ query }) {
  console.log(query, "asjsahsdja");
  return axios.get(`${API_URL}/items/list?q=${query}`);
}
