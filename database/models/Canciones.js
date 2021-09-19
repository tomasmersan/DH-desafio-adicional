module.exports = function (sequelize, dataTypes) 
{
    let alias = 'Canciones';

    let cols = 
    {
        id: 
        {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 

        titulo: 
        {
            type: dataTypes.STRING(45)
        },

        duracion: 
        {
            type: dataTypes.INTEGER
        }, 

        created_at:
        {
            type: dataTypes.DATE
        },
        
        updated_at:
        {
            type: dataTypes.DATE
        },
        genero_id: 
        {
            type : dataTypes.INTEGER,
            allowNull: false
        }, 

        album_id: 
        {
            type : dataTypes.INTEGER,
            allowNull: false
        },

        artista_id: 
        {
            type : dataTypes.INTEGER,
            allowNull: false
        },
    };
    
    const config = 
    {

        tableName:'canciones',
        timestamps: false

    };

    const Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = function(modelos) 
    {
        
        Canciones.belongsTo(modelos.Artistas, //Relación: Una canción tiene un artista
        {
            as: "artistas",
            foreignKey: "artista_id"
        })

        Canciones.belongsTo(modelos.Albumes, //Relación: Una canción tiene un álbum
            {
                as: "albumes",
                foreignKey: "album_id"
            })
        
        Canciones.belongsTo(modelos.Generos, //Relación: Una canción tiene un género
        {
            as: "generos",
            foreignKey: "genero_id"
        })
    }

    return Canciones;
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