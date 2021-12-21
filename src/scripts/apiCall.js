
//Return json data from api call 
const apiCall = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default apiCall;
