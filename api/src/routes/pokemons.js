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
  if (param > 0 || param.includes("-")) {
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
  let { name, vida, fuerza, defensa, velocidad, altura, peso, tipos } =
    req.body;
  console.log(req.body)
  if (
    isNaN(vida) ||
    isNaN(fuerza) ||
    isNaN(defensa) ||
    isNaN(velocidad) ||
    isNaN(altura) ||
    isNaN(peso)
  )
    return res.json({info: "Alguno de los argumentos no es un numero"});

  if (!name) return res.json({info: "El nombre es obligatorio"});

  const existe = await Pokemon.findOne({ where: { name: name } });
  if (existe) return res.json({info: "El pokemon ya existe"});

  const pokemon = await Pokemon.create({
    name: name.toLowerCase(),
    vida: Number(vida),
    fuerza: Number(fuerza),
    defensa: Number(defensa),
    velocidad: Number(velocidad),
    altura: Number(altura),
    peso: Number(peso),
  });

  if (!tipos.length) tipos = [1];

  await pokemon.setTipos(tipos);
  res.json({ info: "Pokemon creado" });
});

module.exports = router;
