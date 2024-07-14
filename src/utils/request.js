import axios from "./baseUrl"; // Ensure axios instance is used from baseurl.js

export const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve(response.data); // Resolve with response data
      })
      .catch((error) => {
        reject(error);
      });
  });
}
