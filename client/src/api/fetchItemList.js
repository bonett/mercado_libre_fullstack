import axios from "axios";
const API_URL = `${process.env.REACT_APP_API_BASE}`;

export function fetchItemList({ query }) {
  return axios.request({
    method: "GET",
    url: `${API_URL}/items/list?q=${query}`,
  });
}
