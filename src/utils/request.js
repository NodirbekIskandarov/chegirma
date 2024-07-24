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

export const postRequest = (url, data) => {
  return new Promise((resolve, reject) => {
      axios.post(
          url,
          data
      ).then((response) => {
          resolve(response)
      })
      .catch((error) => {
          console.log(error)
          reject(error)
      });
  });
}
