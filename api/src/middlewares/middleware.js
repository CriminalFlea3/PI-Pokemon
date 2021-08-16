const fetch = require("node-fetch");
const { Pokemon, Tipo } = require("../db.js");

const info = async (num) => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await api.json();
  const api2 = await fetch(data.next);
  const data2 = await api2.json();
  const bd = await Pokemon.findAll();

  const base = [...data.results, ...data2.results, ...bd];
  let pokemonInfo = [];
  let inicio = num * 9 - 9;
  let antes = num * 9;

  for (i = inicio; i < antes; i++) {
    if (!base[i]) return pokemonInfo;
    const pokemon = await fetch(base[i].url);
    const info = await pokemon.json();
    pokemonInfo.push({
      id: info.id,
      name: info.name,
      type: info.types,
      img: info.sprites.front_shiny,
    });
  }
  // const poke = await Pokemon.findAll({ include: Tipo });
  // pokemonInfo.push({ ...poke });

  return pokemonInfo;
};

const forName = async (name) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await api.json();
    const pokemonName = [
      {
        id: data.id,
        name: data.name,
        type: data.types,
        img: data.sprites.front_shiny,
      },
    ];

    return pokemonName;
  } catch (e) {
    try {
      const db = await Pokemon.findOne({
        where: {
          name: name,
        },
        include: Tipo,
      });

      const pokemonDb = {
        id: db.id,
        name: db.name,
        img: "https://e7.pngegg.com/pngimages/799/234/png-clipart-pokxe9mon-go-pikachu-pokxe9-ball-icon-blue-eggs-blue-game.png",
      };
      return pokemonDb;
    } catch (error) {
      return [];
    }
  }
};

const forId = async (id) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await api.json();
    const pokemonId = [
      {
        id: data.id,
        name: data.name,
        type: data.types,
        img: data.sprites.front_shiny,
        vida: data.stats[0].base_stat,
        fuerza: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        velocidad: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
      },
    ];

    return pokemonId;
  } catch (error) {
    try {
      const db = await Pokemon.findOne({
        where: {
          id: id,
        },
        include: Tipo,
      });

      const pokemonDb = {
        id: data.id,
        name: data.name,
        img: "https://e7.pngegg.com/pngimages/799/234/png-clipart-pokxe9mon-go-pikachu-pokxe9-ball-icon-blue-eggs-blue-game.png",
        vida: db.vida,
        fuerza: db.fuerza,
        defensa: db.defensa,
        velocidad: db.velocidad,
        height: db.altura,
        weight: db.peso,
      };
      return pokemonDb;
    } catch (error) {
      return [];
    }
  }
};

module.exports = {
  info,
  forName,
  forId,
};
