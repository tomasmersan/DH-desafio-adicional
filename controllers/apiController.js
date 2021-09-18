const db = require("../database/models");
const Op = db.Sequelize.Op;


let productsController = {

    products: function (req, res) {
        db.Producto
        .findAll()
        .then(products => {
            return res.status(200).json({
                totalProducts: products.length,
                data: products.map(oneProduct => {
                    return{
                        ...oneProduct,
                        imagen: "http://localhost:3050/img/"+oneProduct.imagen
                    }
                }),
                status: 200
            }); 
        })
    },

    productDetail: function (req, res) { 
        db.Producto
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                data: product,
                status: 200
            });
        })
    },

    productCart: function (req, res) {
        res.json("");
    },
    
    
    newProduct: function (req, res) {
        db.Producto
            .findAll()
            .then(product =>{
                return res.status(200).json({
                data: product,
                status: 200,
                readyForCrete: "ok"
            });    
        })  
    },
    
    store: function (req, res) {
        db.Producto
        .create(req.body)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200,
                created: "ok"
                })
            })
        .catch(function(e){
            console.log(e);
        })
    },

    editProduct: function(req, res){
        db.Producto
        .findByPk(req.params.id)
        .then(product =>{
            return res.status(200).json({
                data: product,
                status: 200
            })
        })      
    },

    updateProduct: function(req, res){
        let image;
        db.Producto
        .findByPk(req.params.id)
        .then(product => {
            image = product.imagen;
            if (req.file) {
                image = req.file.filename;
            }
            db.Producto.update ({
                articulo: req.body.articulo,
                descripcion: req.body.descripcion,
                id_categoria: req.body.categoria,
                stock: req.body.stock,
                imagen: image,
                id_marca: req.body.marca,
                precio: req.body.precio
                },
                { 
                where: {
                id: req.params.id
                }
            });
        })
            return res.status(200).json({
                data: product,
                status: 200
            });
        //.catch(e => console.log(e))
    },

    destroy: function (req, res){
        db.Producto
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response)=>{
            return res.json(response)
        })   
    },

    search: function(req, res){
        db.Producto
        .findAll({
            where: {
                articulo: { [Op.like]: '%' + req.query.keyword + '%' } 
            }
        })
        .then(busqueda => {
            return res.status(200).json(busqueda);
        })
    },

    marcas: function (req, res) {
        db.Marca
        .findAll()
        .then(marca =>{
            return res.status(200).json({
            totalMarcas: marca.length,
            status: 200,
            });    
        })  
    },
    usuarios: function (req, res) {
        db.Usuario
        .findAll()
        .then(usuario =>{
            return res.status(200).json({
            totalUsuarios: usuario.length,
            status: 200,
            });    
        })  
    },
    ultimoProducto: function (req, res) {

        db.Producto.max("id").then(function(productoId){
            console.log(productoId)
            db.Producto.findByPk(productoId).then(function(ultimoProducto){
                return res.status(200).json({
                    data: ultimoProducto,
                    status: 200,
                    })
    
            })

        })
    
        
    },

    categorias:  function (req, res) {
        /*let producto = db.Producto.findAll()      
        const array = []

        Promise.all([producto])
        producto
        .then(product => {
            console.log(product)
            for(let i = 0; i < product.length; i++){
                let suma = db.Producto.count({where: {id_categoria: [i+1]}});
                console.log(suma)
                array.push(suma)
            } return res.status(200).json({
                data: array.map(prodCate =>{
                    return {prodCate}
                }),
                status: 200 
            })
        })*/


        db.Categoria
        .findAll()
        .then(categorias => {
            return res.status(200).json({
                data: categorias.map(unaCategoria => {
                    return{
                        ...unaCategoria
                    }
                }),
                status: 200
            }); 
        })
    }

}

module.exports = productsController;

// db.Producto
// .count({ where: 
//     {'id_categoria': {[Op.eq]: 1}},
//  })
// .then(analogicos => {
//     return res.status(200).json({
//                 analogicos: analogicos,
//                 status: 200
//     })
        
// }) 

// db.Producto
// .findAll()
// .then(function(producto){
//         const contadorAnalogico = 0;
//         const contadorDigital = 0;
//         let contadorLujo = 0;
//         let contadorSmart = 0;
//         for (let i = 0; i < producto.length; i++) {
//             if(producto.id_categoria == 1){
//                    return contadorAnalogico ++;
//             }else if(producto.id_categoria == 2){
//                     contadorDigital ++;
//             }else if(producto.id_categoria == 3){
//                 contadorLujo +=1;
//             }else if(producto.id_categoria == 4){
//                 contadorSmart +=1;
//             }
//             return res.status(200).json({
//                 analogicos: contadorAnalogico,
//                 digitales: contadorDigital,
//                 lujo: contadorLujo,
//                 smart: contadorSmart
//             })
//         }
// })

// }

// let listadoCategoria1;
// let listadoCategoria2;
// let listadoCategoria3;
// let listadoCategoria4;
// let productos = db.Producto.findAll();

// Promise.all([productos])

// .then(function([product]){
//     for (let i = 0; i < product.length; i++) {
//         if(product.id_categoria == 1){
//             listadoCategoria1++
//         }
//         if(product.id_categoria == 2){
//             listadoCategoria2++
//         }
//         if(product.id_categoria == 3){
//             listadoCategoria3++
//         }
//         if(product.id_categoria == 4){
//             listadoCategoria4++
//         }  
//     }
//     return res.status(200).json({
//         data1: listadoCategoria1,
//         data2: listadoCategoria2,
//         data3: listadoCategoria3,
//         data4: listadoCategoria4,
//         status: 200,
//         })




    
// })   
// }   