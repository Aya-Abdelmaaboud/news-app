const request = require("request");
console;

const getAllNews = (callback) => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=a2a95bbc3d0648c2b77d1f9c0e09bd47";
  request(
    {
      url,
      json: true,
      headers: {
        "User-Agent": "MY IPHINE 7s",
      },
    },
    (error, response) => {
      if (error) {
        callback("error", undefined);
      } else if (response.body.message) {
        callback(response.body.message, undefined);
      } else if (response.body.articles.length === 0) {
        callback("please enter valid country", undefined);
      } else {
        callback(undefined, response);
      }
    }
  );
};

module.exports = getAllNews;
