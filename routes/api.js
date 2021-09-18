const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiController");
// const multer = require("multer");

// //---------------MULTER-----------------------
// const storage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         cb(null, path.join(__dirname, "../../public/img"));
//     },
//     filename:(req, file, cb)=>{
//         const imageName = "product-" + Date.now() + path.extname(file.originalname);
//         cb(null, imageName);
//     }
// })
// const fileUpload = multer({ storage: storage });

router.get("/productos", apiController.products); // todos los productos

router.get("/productos/search", apiController.search); // buscar productos

router.get("/productos/create", apiController.newProduct); // vista de creación

router.get("/productos/:id", apiController.productDetail); // detalle de un producto

router.get("/productos/carrito", apiController.productCart);

router.post("/productos", fileUpload.single("imagen"), apiController.store); // crear de un producto

router.get("/productos/edit/:id", apiController.editProduct); // vista de la edicion

router.put("/productos/update/:id", apiController.updateProduct); // logica de la edicion************

router.delete('/productos/delete/:id', apiController.destroy); // eliminar un producto

router.get('/marcas', apiController.marcas); // total de marcas

router.get('/usuarios', apiController.usuarios); // total de usuarios

router.get('/ultimoProducto', apiController.ultimoProducto); // todas las marcas

router.get('/categorias', apiController.categorias); // todas las categorias

module.exports = router;


// /canciones (GET) que muestre un listado de las canciones con sus propiedades
// /canciones (POST) para crear un nuevo registro de una canción
// /canciones/:id (GET) que muestre una canción 
// /canciones/:id (PUT) para editar una canción
// /canciones/:id (DELETE) para eliminar una canción 
// /canciones/generos/:id (GET) listado de canciones que coincidan con el género