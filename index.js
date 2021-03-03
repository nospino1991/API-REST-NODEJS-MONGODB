'use strict'

const mongoose=require("mongoose");
const app=require("./app");
const config= require('./util/config')

const Port=process.env.PORT || config.port

mongoose.connect(`${config.server}:${config.port_db}/${config.bd}`,{useNewUrlParser: true },(err,resp)=>{
     if(err) throw err;
     console.log("Conexión con MongoDB establecida",config);
     app.listen(Port,()=>{
          console.log(`API-REST corriendo en el puerto http://localhost:${Port}`);
     })
})

