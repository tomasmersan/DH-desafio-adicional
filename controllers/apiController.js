const db = require("../database/models");
const Op = db.Sequelize.Op;

let apiController = 
{

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

    detalleCancion: function (req, res) 
    { 
        db.Canciones
            .findByPk(req.params.id)
            .then(cancion => {
                if (cancion == null)
                {
                    return res.status(500).json({
                        error: "No se encontró ningún ID"
                    });
                }
                
                return res.status(200).json({
                data: cancion,
                status: 200
            });
        })
    },
    
    edicionCancion: function(req, res)
    {
        db.Canciones
        .update
        ({
            id: req.params.id,
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero_id,
            album_id: req.body.album_id,
            artista_id: req.body.artista_id
        },
        { 
            where: 
                {
                    id: req.params.id
                }
        })
        .then(cancion =>
        {
            return res.status(200).json
                ({
                    id: req.params.id,
                    titulo: req.body.titulo,
                    duracion: req.body.duracion,
                    genero_id: req.body.genero_id,
                    album_id: req.body.album_id,
                    artista_id: req.body.artista_id,
                    data: cancion,
                    status: 200,
                    edited: "ok"
                })
        })
        .catch(function (e) 
        {
            console.log(e)
        })
    },

    eliminarCancion: function (req, res)
    {
        db.Canciones
        .destroy
        ({
            where: 
            {
                id: req.params.id
            }
        })
        .then((response)=>
        {
            return res.json(response)
        })   
    },

    cancionesGeneros: function(req, res)
    {
        db.Canciones
        .findAll
        ({
            where: 
            {
                genero_id: req.params.id 
            }
        })
        .then(busqueda => {
            return res.status(200).json(busqueda);
        })
    },
}

module.exports = apiController;

// edicionCancion: function(req, res){
//     db.Cancion
//         .findByPk(req.params.id)
//         .then(cancion => {               
//         db.Canciones  
//             .update ({
//                 id: req.body.id, 
//                 titulo: req.body.titulo, 
//                 duracion: req.body.duracion,
//                 created_at: req.body.created_at,
//                 updated_at: req.body.updated_at,
//                 genero_id: req.body.genero_id,
//                 album_id: req.body.album_id,
//                 artista_id: req.body.artista_id
//             }, 
//             {
//                 where:
//                 {
//                     id:req.params.id
//                 }
//             })
//             return res.status(200).json({
//                 data: cancion,
//                 status: 200
//             })
//         })
// }