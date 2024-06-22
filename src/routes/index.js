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

let models = require('../db.js').conn.models; console.log({models})
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

router.get("/", (req, res)=> {
    res.status(200).json({
        message: 'Welcome to the API',
        routes: '/'
    })
})

Object.keys(models).map((m,i)=> Object.keys(actions).map((a) => router[a](
    `/${m}`, action(models[m], a, actions[a], m),
)))

// router.use("/boilerplate", boilerplateRoutes);

module.exports = router;
// Configurar los routers



