const { Router } = require("express");
const { Pokemon, Tipo } = require("../db.js");
const { info, forName, forId } = require("../middlewares/middleware.js");

const router = Router();

router.get("/", async (req, res) => {
  let page = req.query.page;

  if (!page) page = 1;
  let pokemonInfo = await info(Number(page));
  if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });

  res.json(pokemonInfo);
});

router.get("/:param", async (req, res) => {
  const { param } = req.params;
  if (param > 0 || param.includes('-')) {
    const pokemonInfo = await forId(param);
    if (!pokemonInfo.length)
      return res.json({ info: "No se encontro el pokemon" });
    res.json(pokemonInfo);
  } else {
    const pokemonInfo = await forName(param);
    if (!pokemonInfo.length)
      return res.json({ info: "No se encontro el pokemon" });
    res.json(pokemonInfo);
  }
});

router.post("/", async (req, res) => {
  const { name, vida, fuerza, defensa, velocidad, altura, peso, tipos } = req.body;
  const existe = await Pokemon.findOne({ where: { name: name}});
  if(existe) return res.send('El pokemon ya existe')
  const pokemon = await Pokemon.create({
    name,
    vida,
    fuerza,
    defensa,
    velocidad,
    altura,
    peso,
  });

  await pokemon.setTipos(tipos);
  res.send('Pokemon creado')
});

module.exports = router;
