const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
    timeStamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  })
};