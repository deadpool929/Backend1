require("dotenv").config();
const express = require("express");
const app = express();

const data = {
  name: "Hulk",
  email: "hulk@gmail.com",
  postcode: "fjkdkfdslj",
  phoneNumber: "546456564",
  city: "London",
  country: "England",
  favouriteQuote: "The answer is banner",
};

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/youtube", (req, res) => {
  res.send("Youtube");
});

app.get("/data", (req, res) => {
  res.json(data);
});
app.listen(process.env.PORT, () => {
  console.log(`My App is running on ${process.env.PORT}`);
});
