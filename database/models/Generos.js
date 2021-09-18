module.exports = function (sequelize, dataTypes) {
    let alias = 'Generos';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 

        nombre: {
            type: dataTypes.STRING(255)
        },

        precio: {
            type : dataTypes.DECIMAL(10,2),
        },
    };
    
    const config = {

        tableName:'generos',
        timestamps: false

    };

    const Generos = sequelize.define(alias, cols, config);

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

    return Generos;
}