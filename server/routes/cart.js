const ShopingCart = require('../services/ShopingCart');
const router = require('express').Router();

router.get('/view/:user_id', ShopingCart.getShopingCart);
router.post('/add_to_cart', ShopingCart.addBookToShopingCart);
router.delete('/delete/:user_id/:book_id', ShopingCart.deleteItem);

module.exports = router;