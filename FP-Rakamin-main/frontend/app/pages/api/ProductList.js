// pages/api/index.js

import products from '../../data/products'; // Create a data file with your product information

export default function handler(req, res) {
  res.status(200).json(products);
}
