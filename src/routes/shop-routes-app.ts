import express from "express";
import Shop from "../models/Shop";
const shopRoutesApp = express.Router();

const shops: Shop[] = [
  { id: 1, name: "Pepper's Pizza", rating: 4.5 },
  { id: 2, name: "Clive's Chives", rating: 3.4 },
  { id: 3, name: "Bretty's Brews", rating: 4.3 },
  { id: 4, name: "Sylvester's Shoes", rating: 3.8 },
  { id: 5, name: "Teddy's Tunes", rating: 4.7 },
];

let nextId: number = 6;

shopRoutesApp.get("/", (req, res) => {
  res.render("home");
});

shopRoutesApp.get("/shop-details/:id", (req, res) => {
  const url = req.url;
  const id = parseInt(req.params.id);

  if (url == `/shop-details/${id}`) {
    let i = 0;
    while (i < id) {
      i++;
      console.log(i);
      if (i !== id) continue;
      console.log(i);
      res.render("shop-details", {
        name: shops[i - 1].name,
        rating: shops[i - 1].rating,
      });
      if (i > shops.length) {
        res.render("shop-not-found", {
          id: id,
        });
      }
    }
  }
});

shopRoutesApp.get("/shop-list", function (req, res) {
  let minRatingParam: string = req.query.minRating as string;
  let url = req.url;
  let filteredShops: Shop[] = [];
  if (url == "/shop-list") {
    res.render("shop-list", {
      shops: shops,
      name: req.body.name,
      rating: req.body.rating,
      id: req.body.id,
    });
  }
  if (url == `/shop-list?minRating=${minRatingParam}`) {
    //req.query.minRating
    let minRating: number = Number.parseFloat(minRatingParam);
    // if shops[i].rating >= req.query.minRating
    console.log(minRating);
    for (let i = 0; i < shops.length; i++) {
      if (shops[i].rating >= minRating) {
        filteredShops.push(shops[i]);
      }
    }
    res.render("shop-list", {
      shops: filteredShops,
      name: req.body.name,
      rating: req.body.rating,
      id: req.body.id,
    });
  }
});

shopRoutesApp.get("/search-shop-forms", (req, res) => {
  res.render("search-shop-forms", {
    minRating: req.body.minRating,
  });
});

export default shopRoutesApp;
