require('dotenv').config();
const { Sequelize , Op} = require('sequelize');
// const Boilerplate = require('./models/boilerplate.js');
// const Categories = require('./models/categories.js');
// const User = require("./models/5-User.js");// cambios importantes
// const Admin = require("./models/6-Admin.js");// cambios importantes
// const Image = require("./models/8-Image.js");
let arrayFiles = require('node:fs').readdirSync('./src/models/')
let arrayConst = arrayFiles.map(a=>a.split('.')[0]); 
console.log({arrayFiles, arrayConst})
let global = {}
arrayConst.map((ac,i) => global[ac] = require(`./models/${arrayFiles[i]}`))
console.log({global})

// const fs = require('fs');
// const path = require('path');
// const { PassThrough } = require('stream');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

// let DB = DB_USER === 'postgres' ? 'projects' : DB_USER ;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_USER}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'sqlite',    
  storage: 'database.sqlite'
});

// ModelCat(sequelize); //agregado
// User(sequelize);
// Admin(sequelize);
// Image(sequelize);
Object.keys(global).map((g,i) => typeof global[g] === 'function' && global[g](sequelize))
// Categories(sequelize);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { 
  
} = sequelize.models; 
// Aca vendrian las relaciones

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op,
  arrayConst,
};
