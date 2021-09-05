import axios from "axios";

export function fetchItemListByParam({ query }) {
  return axios.request({
    method: "GET",
    url: `https://bing-video-search1.p.rapidapi.com/videos/search?q=${query}`,
  });
}
