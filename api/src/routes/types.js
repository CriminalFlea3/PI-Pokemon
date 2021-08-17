const { Router } = require("express");
const fetch = require("node-fetch");
const { Tipo } = require("../db.js");

const router = Router();

router.get('/', async (req, res) => {
    const api = await fetch('https://pokeapi.co/api/v2/type');
    const types = await api.json();
    for( t of types.results ) {
        const existe = await Tipo.findOne({where: { name: t.name }})
        if(existe) return res.send('Ya existe')
        await Tipo.create({ name: t.name})
    }
    const type = await Tipo.findAll();
    res.json(type);
})



module.exports = router;