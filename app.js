
const express=require("express");
const app= express();
const BodyParser=require("body-parser");

app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

app.use(require("./router/router-product"));

module.exports=app
