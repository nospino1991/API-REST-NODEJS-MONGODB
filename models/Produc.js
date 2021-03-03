'use strict'

const mongoose= require ("mongoose");
const Schema=mongoose.Schema;

const productSchema=Schema({
       name:        String,
       picture:     String,
       price:       { type:Number, default: 0 },
       category:    {type : String, enum:['Accesorios','Phone','Computers']},
       description: String
     
})

module.exports=mongoose.model('product',productSchema)