const express = require("express");
const hbs = require("hbs");
const path = require("path"); // core module
const news = require("../tools/news");

const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(publicDirectory));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  news((error, data) => {
    if (error) {
      res.render("404page", {
        img: "images/news.png",
      });
      console.log(error); //render 404 not found
    } else {
      console.log(data.body.articles.length); // render index.hbs
      res.render("index", {
        newsData: data.body.articles,
        img: "images/news.png",
      });
    }
  });
});

app.listen(port, () => console.log(`app is listening on ${port}`));
