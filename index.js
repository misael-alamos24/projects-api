const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const  PORT  = process.env.PORT || '3001' 

// Syncing all the models at once.
conn.sync({ force: false }).then(() => { //true olvida, false recuerda
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

// Import packages
// const express = require("express");
// const home = require("./routes/home.js");

// // Middlewares
// const app = express();
// app.use(express.json());

// // Routes
// app.use("/home", home);


// app.use("/", async (req, res, next) => {
//     return res.status(200).json({
//       title: "Hi I am the landing",
//       message: "The app is working properly!",
//     });
//   });

// // connection
// const port = process.env.PORT || 9001;
// app.listen(port, () => console.log(`Listening to port ${port}`));
