module.exports = function (sequelize, dataTypes) 
{
    let alias = 'Generos';

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
        }
        
    };
    
    const config = 
    {

        tableName:'generos',
        timestamps: false

    };

    const Generos = sequelize.define(alias, cols, config);

    Generos.associate = function(modelos) 
    {
        
        Generos.hasMany(modelos.Canciones, //Relación: Un género tiene muchas canciones
        {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }

    return Generos;
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