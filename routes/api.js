const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiController");

router.get("/", apiController.list) // prueba

router.get("/canciones", apiController.canciones); // un listado de canciones con sus propiedades

router.post("/canciones", apiController.nuevaCancion); // creación de una nueva canción

router.get("/canciones/:id", apiController.detalleCancion); // detalle de una canción

router.put("/canciones/:id", apiController.edicionCancion); // edición de una canción

router.delete('/canciones/:id', apiController.eliminarCancion); // eliminar una canción

router.get('/canciones/generos/:id', apiController.cancionesGeneros); // listado de canciones que coincidan con los géneros

module.exports = router;

// /canciones (GET) que muestre un listado de las canciones con sus propiedades
// /canciones (POST) para crear un nuevo registro de una canción
// /canciones/:id (GET) que muestre una canción 
// /canciones/:id (PUT) para editar una canción
// /canciones/:id (DELETE) para eliminar una canción 
// /canciones/generos/:id (GET) listado de canciones que coincidan con el género