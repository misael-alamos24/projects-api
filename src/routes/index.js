const { Router } = require("express");
// Importar todos los routers;
// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://sudo-qubs-mu.vercel.app', {
//       waitUntil: 'domcontentloaded',
//     });
//     await page.screenshot({
//       path: 'hn.png',
//     });
    
//     await browser.close();
// })();

// const boilerplateRoutes = require ("./boilerplate.js");

const router = Router();

const { action } = require('../controllers/method.js');
const { arrayConst } = require("../db.js");

let models = require('../db.js').conn.models; console.log({models}, Object.keys(models))
let actions = {
    get: 'findAll', 
    post: 'create', 
    put: 'update', 
    delete: 'destroy'
};

let params = {
    get: [], 
    post: ['body'], 
    put: ['body', 'where'], 
    delete: ['where']
};

/*  verb    method      params  
    get     findAll     ()
    post    create      (body)
    put     update      (body, where)
    delete  destroy     (where)
*/

router.get("/", async (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the API',
        routes: arrayConst.map((a,i)=> {return{[a]: '/' + Object.keys(models)[i]}}),
        routesModels: Object.keys(models).map(a=> {return{[a]: '/' + a}}),
    })
})

Object.keys(models).map((m,i)=> Object.keys(actions).map((a) => router[a](
    `/${m}`, action(models[m], a, actions[a], m),
)))

// router.use("/boilerplate", boilerplateRoutes);

module.exports = router;
// Configurar los routers



