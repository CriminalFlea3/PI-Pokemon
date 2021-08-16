const { Router } = require("express");
const { info, forName, forId } = require("../middlewares/middleware.js");

const router = Router();

router.get("/", async (req, res) => {
  let page = req.query.page;

  if (!page) page = 1;
  let pokemonInfo = await info(Number(page));
  if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });

  res.json(pokemonInfo);
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const pokemonInfo = await forName(name);
  if (!pokemonInfo.length)
    return res.json({ info: "No se encontro el pokemon" });
  res.json(pokemonInfo);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonInfo = await forId(Number(id));
  if (!pokemonInfo.length)
    return res.json({ info: "No se encontro el pokemon" });
  res.json(pokemonInfo);
});

module.exports = router;
