const express = require("express");
const ElectronicsModel = require("../model/Electronics.model");

const electronics_Router = express.Router();

electronics_Router.get("/", async (req, res) => {
  try {
    let sortOrder = 1;

    if (req.query._order && req.query._order.toLowerCase() === "desc") {
      sortOrder = -1;
    }

    let products;

    if (req.query._sort) {
      const sortField = req.query._sort;
      products = await ElectronicsModel.find().sort({ [sortField]: sortOrder });
    } else {
      products = await ElectronicsModel.find();
    }

    // Check if category filter is provided in the query
    if (req.query.category) {
      const categoryParam = req.query.category;
      products = products.filter(product => product.category === categoryParam);
    }

    res.send(products);
  } catch (error) {
    res.status(500).send({ msg: "Error getting product" });
  }
});

module.exports = electronics_Router;
