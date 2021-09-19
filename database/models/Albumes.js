module.exports = function (sequelize, dataTypes) 
{
    let alias = 'Albumes';

    let cols = 
    {
        id: 
        {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        }, 

        nombre: 
        {
            type: dataTypes.STRING(45)
        },

        duracion: 
        {
            type: dataTypes.INTEGER
        }
        
    };
    
    const config = 
    {

        tableName:'albumes',
        timestamps: false

    };

    const Albumes = sequelize.define(alias, cols, config);

    Albumes.associate = function(modelos) 
    {
        
        Albumes.hasMany(modelos.Canciones, //Relación: Un álbum tiene muchas canciones
        {
            as: "canciones",
            foreignKey: "album_id"
        })
    }

    return Albumes;
}

// ### Esta es la base de datos musicando, a continuación vas a ver como fue creada
// _Esta base de datos está compuesta por las siguientes tablas_
// - Artistas
// - Canciones
// - Albumes
// - Generos

// _Las relaciones están definidas de la siguiente forma_
// - Una canción tiene un album
// - Un albun tiene muchas canciones

// - Una canción tiene un genero
// - Un genero tiene muchas canciones

// - Una canción tiene un artista
// - Un artista tiene muchas canciones