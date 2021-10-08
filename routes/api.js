const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiController");

router.get("/", apiController.canciones); // un listado de canciones con sus propiedades

router.post("/", apiController.nuevaCancion); // creación de una nueva canción

router.get("/:id", apiController.detalleCancion); // detalle de una canción

router.put("/:id", apiController.edicionCancion); // edición de una canción

router.delete('/:id', apiController.eliminarCancion); // eliminar una canción

router.get('/generos/:id', apiController.cancionesGeneros); // listado de canciones que coincidan con los géneros

module.exports = router;

// /canciones (GET) que muestre un listado de las canciones con sus propiedades
// /canciones (POST) para crear un nuevo registro de una canción
// /canciones/:id (GET) que muestre una canción 
// /canciones/:id (PUT) para editar una canción
// /canciones/:id (DELETE) para eliminar una canción 
// /canciones/generos/:id (GET) listado de canciones que coincidan con el género