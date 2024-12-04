const { getProducts } = require('../controllers/productsController');
const verifyToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.route("/products").get(verifyToken,getProducts);

module.exports = router;