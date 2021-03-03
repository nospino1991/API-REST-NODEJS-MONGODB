const Product=require('../models/Produc')

exports.ProductAll=function(req,resp) {
     Product.find({},(err,products)=>{
        if (err) return resp.status(500).send({message:`Ha sucedido un error al buscar un producto, ${err}`})    
        resp.status(200).send({ products })  
    })
}

exports.ProductId=(req,resp)=>{
          Product.findByIdAndUpdate(req.params.productId,req.body,(err,ProductUpdate)=>{
          if (err) return resp.status(500).send({message:`Ha sucedido un error al altualizar el producto, ${err}`}) 
          resp.status(200).send({message:`Producto actualizado con éxito`,Produc:ProductUpdate})
      })
}

exports.ProductCreate=(req,resp)=>{
          let ProductObject=new Product();
          ProductObject.name           = req.body.name;
          ProductObject.picture        = req.body.picture;
          ProductObject.price          = req.body.price;
          ProductObject.category       = req.body.category;
          ProductObject.description    = req.body.description;

          ProductObject.save((err,productStored)=>{
               if (err)  resp.status(500).send({message: `Error al salvar los cambios ${err}`});
               resp.status(200).send({message:"200 OK",data:productStored})
          })
}

exports.ProductUpdate=(req,resp)=>{
          Product.findByIdAndUpdate(req.params.productId,req.body,(err,ProductUpdate)=>{
          if (err) return resp.status(500).send({message:`Ha sucedido un error al altualizar el producto, ${err}`}) 
          resp.status(200).send({message:`Producto actualizado con éxito`,Produc:ProductUpdate})
      })
}

exports.ProductDrop=(req,resp)=>{
     Product.findById(req.params.productId,(err,product)=>{
          if (err) return resp.status(500).send({message:`Ha sucedido un error al buscar un producto, ${err}`}) 
          product.remove(err=>{
                  if(err) return resp.status(500).send({message:`Ha sucedido un error al borrar el producto, ${err}`}) 
                  resp.status(200).send({message:`El Producto ha sido eliminado`}) 
          })
     })
}

