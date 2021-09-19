const db = require("../database/models");
const Op = db.Sequelize.Op;

let apiController = {

    list: function (req, res) 
    {
        return res.json("Hola");
    },

    canciones: function (req, res) 
    {
        db.Canciones
        .findAll()
        .then(canciones => 
        {
            return res.status(200).json
            ({
                total: canciones.length,
                data: canciones,
                status: 200
            })
        })
        
    },

    nuevaCancion: function (req, res) 
    {
        // return res.json(req.body)
        db.Canciones
        .create(req.body)
        .then(cancion => 
        {
            return res.status(200).json
            ({
                data: cancion,
                status: 200,
                created: "ok"
            })
        })
        .catch(function(e)
        {
            console.log(e);
        })
    },

    detalleCancion: function (req, res) { 
        db.Canciones
            .findByPk(req.params.id)
            .then(cancion => {
                return res.status(200).json({
                data: cancion,
                status: 200
            });
        })
    },
    
    cancionesGeneros: function (req, res) {
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
    


    edicionCancion: function(req, res){
        db.Producto
        .findByPk(req.params.id)
        .then(product =>{
            return res.status(200).json({
                data: product,
                status: 200
            })
        })      
    },

    edicionCancion: function(req, res){
        let image;
        db.Canciones
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

    eliminarCancion: function (req, res){
        db.Canciones
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

module.exports = apiController;