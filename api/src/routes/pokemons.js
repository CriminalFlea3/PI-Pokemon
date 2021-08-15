const { Router } = require("express");
const fetch = require("node-fetch");
const { Pokemon, Tipo } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  const { page } = req.query;
  let limit = 9;

  const api = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await api.json();
  const api2 = await fetch(data.next);
  const data2 = await api2.json();

  const base = [...data.results, ...data2.results];
  let pokemonInfo = [];

  for (p of base) {
    const pokemon = await fetch(p.url);
    const info = await pokemon.json();
    pokemonInfo.push({
      id: info.id,
      name: info.name,
      type: info.types,
      img: info.sprites.front_shiny,
    });
  }
  const poke = await Pokemon.findAll({ include: Tipo });
  pokemonInfo.push({...poke});
  const maxPage = 

  res.json(pokemonInfo);
});

module.exports = router;
