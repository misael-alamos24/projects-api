const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("boilerplate", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
    timeStamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  })
}