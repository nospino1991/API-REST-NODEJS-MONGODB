'use strict'

const express= require("express");
const router=express.Router();
const ProductController= require('../Controllers/ProductController');

 router.get('/api/product', ProductController.ProductAll);
 router.get('/api/product/:productId', ProductController.ProductId);
 router.post('/api/product', ProductController.ProductCreate);
 router.put('/api/product/:productId', ProductController.ProductUpdate);
 router.delete('/api/product/:productId', ProductController.ProductDrop);


module.exports=router;

