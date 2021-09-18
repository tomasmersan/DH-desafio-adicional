module.exports = function (sequelize, dataTypes) {
    let alias = 'Canciones';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 

        articulo: {
            type: dataTypes.STRING(255)
        },

        descripcion: {
            type: dataTypes.STRING(255)
        }, 

        id_categoria: {
            type : dataTypes.INTEGER,
        }, 

        id_marca: {
            type : dataTypes.INTEGER,
        },

        stock: {
            type : dataTypes.INTEGER,
        }, 

        precio: {
            type : dataTypes.DECIMAL(10,2),
        },
        imagen: {
            type: dataTypes.STRING(255),
        },
        oferta: {
            type: dataTypes.STRING(255)
        }


    };
    
    const config = {

        tableName:'canciones',
        timestamps: false

    };

    const Canciones = sequelize.define(alias, cols, config);

    // Producto.associate = function(modelos) {
        
    //     Producto.belongsTo(modelos.Categoria, {
    //         as: "categoria",
    //         foreignKey: "id_categoria"
    //     })
        
    //     Producto.belongsTo(modelos.Marca, {
    //         as: "marca",
    //         foreignKey: "id_marca"
    //     })
    
    //     Producto.belongsToMany(modelos.Venta, {
    //         as: "ventas",
    //         through: "detalle_venta",
    //         foreignKey: "id_venta",
    //         otherKey: "id_producto", 
    //         timestamps: false,
    //     })
    // }

    return Cancion;
}