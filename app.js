import fetch from "node-fetch";
import express from "express";
import * as dotenv from "dotenv";
import { engine } from "express-handlebars";

dotenv.config();
const apiKey = process.env.API_KEY;

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", async (req, res) => {
  const response = await fetch(
    "https://rest.coinapi.io/v1/exchangerate/USD?invert=true",
    {
      headers: {
        "X-CoinAPI-Key": apiKey,
      },
    }
  );

  if (!response.ok) {
    console.log(response);
    res.status(500).json({ msg: "Something went wrong on the server-side" });
    return;
  }

  const data = await response.json();

  res.render("home", { time: Date.now(), data: data });
});

app.listen(80, () => console.log("App is running now"));
