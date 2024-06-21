const express = require('express');
const router = express.Router();

const { boilerplate } = require('../db.js');

router.get('/', async (req, res) => {

    let boilerplateSequelize = await boilerplate.findAll();

    return res.status(200).json({boilerplateSequelize});
})

module.exports= router;
// let o = {a: 1, b: () => 1, $: function () {return 1}}

// o.a
// o.b
