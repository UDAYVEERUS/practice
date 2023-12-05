const express = require('express');
const {productAdd, productsGet, productUpdate, productDelete} = require('./controller');
const router = express.Router();

router.post("/add",productAdd);
router.get("/get",productsGet);
router.patch("/update/:id", productUpdate);
router.delete("/delete/:id", productDelete);

module.exports = router;