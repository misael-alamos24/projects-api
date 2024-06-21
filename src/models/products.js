const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
        },
        mark: {
            type: DataTypes.TEXT,
        },
        category: {
            type: DataTypes.TEXT,
        },
        type: {
            type: DataTypes.TEXT,
        },
        desc: {
            type: DataTypes.TEXT,
        },
        size: {
            type: DataTypes.TEXT,
        },
        weight: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
        },
        date: {
            type: DataTypes.DATE,
        },
        // Nombres, Marcas, descripción, tamaño, peso, precio, fecha (todos opcionales)
    },{
    timeStamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  })
}