import axios from "axios";
const API_URL = `${process.env.REACT_APP_API_BASE}`;

export function fetchItemList({ payload }) {
  return axios.get(`${API_URL}/items?q=${payload}`);
}
