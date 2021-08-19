const fetch = require("node-fetch");
const { Pokemon, Tipo } = require("../db.js");
const { alphabetically, byType } = require("./filtros.js");

const info = async (num, alpha, by, tipos) => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await api.json();
  const api2 = await fetch(data.next);
  const data2 = await api2.json();
  const bd = await Pokemon.findAll({ include: Tipo });

  let base = [...bd, ...data.results, ...data2.results];

  if (alpha) base = alphabetically(base);
  if (by === "2") {
    base = [...bd];
  } else if (by === "1") {
    base = [...data.results, ...data2.results];
  }

  let pokemonInfo = [];
  let inicio = num * 9 - 9;
  let antes = num * 9;

  for (i = inicio; i < antes; i++) {
    if (!base[i]) return pokemonInfo;
    if (base[i].url) {
      const pokemon = await fetch(base[i].url);
      const info = await pokemon.json();

      pokemonInfo.push({
        id: info.id,
        name: info.name,
        type: info.types,
        img: info.sprites.front_shiny,
      });
    } else {
      const types = base[i].tipos.map((t) => {
        return {
          type: {
            name: t.name,
          },
        };
      });
      pokemonInfo.push({
        id: base[i].id,
        name: base[i].name,
        type: types,
        img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
      });
    }
  }
  // const poke = await Pokemon.findAll({ include: Tipo });
  // pokemonInfo.push({ ...poke });
  if(tipos) pokemonInfo = byType(pokemonInfo);
  console.log(pokemonInfo[0].type[0].type.name);
  return pokemonInfo;
};

const forName = async (name) => {
  try {
    const db = await Pokemon.findOne({
      where: {
        name: name,
      },
      include: Tipo,
    });
    if (db) {
      const types = db.tipos.map((t) => {
        return {
          type: {
            name: t.name,
          },
        };
      });

      const pokemonDb = [
        {
          id: db.id,
          name: db.name,
          type: types,
          img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
        },
      ];
      return pokemonDb;
    } else {
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
    }
  } catch (error) {
    return [];
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
  } catch (error) {}
  try {
    const db = await Pokemon.findByPk(id, { include: Tipo });

    const types = db.tipos.map((t) => {
      return {
        type: {
          name: t.name,
        },
      };
    });

    const pokemonDb = [
      {
        id: db.id,
        name: db.name,
        type: types,
        img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
        vida: db.vida,
        fuerza: db.fuerza,
        defensa: db.defensa,
        velocidad: db.velocidad,
        height: db.altura,
        weight: db.peso,
      },
    ];
    return pokemonDb;
  } catch (error) {
    return [];
  }
};

module.exports = {
  info,
  forName,
  forId,
};
