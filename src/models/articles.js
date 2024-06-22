const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("article", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },{
    timeStamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  })
};