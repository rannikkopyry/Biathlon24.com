const PORT = 8000;
import axios from "axios";
import { load } from "cheerio";
import * as cheerio from "cheerio";
import express, { response } from "express";
const app = express();
import cors from "cors";
app.use(cors());

const url = "https://biathlonresults.com/";
const url_calendar = "https://www.biathlonworld.com/calendar?CupLevel=all"

app.get("/", function (req, res) {
  res.json("This is my webscraper");
});

app.get("/news", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];

      console.log($("class=['panel-heading']", html)).each(function () {
        //<-- cannot be a function expression
        const title = $(this).find("h2");
        const url = $(this).find("a").attr("href");

        articles.push({
          title,
          url,
        });
      });
      console.log(articles);
      res.json(articles);
    })
    .catch((err) => console.log(err));
});

app.get("/calendar", (req, res) => {
  axios(url_calendar)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html)

    console.log($('div', html))
  })
  .catch((error) => console.log(error))
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
