const express = require("express");
const cors = require("cors");
const banner = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const products = require("./products/index.get.json");
const addToCart = require("./addToCart/index.post.json");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/banners", (req, res) => res.json(banner));
app.get("/categories", (req, res) => res.json(categories));
app.get("/products", (req, res) => res.json(products));

app.post("/addToCart", (req, res) => {
  const myJson = JSON.stringify(req.body);

  if (myJson) {
    res.json(addToCart);
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
