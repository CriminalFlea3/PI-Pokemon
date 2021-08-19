import React, { useState } from "react";
import style from "./search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filters, getByName } from "../../actions";

export const Search = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState("");

  const options = useSelector((store) => store.types);
  const button = style.button;

  const handleInputChange = (e) => {
    setPokemons(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getByName(pokemons));
    setPokemons("");
  };

  const ordenar = (e) => {
    console.log(e.target.value)
    dispatch(filters(e.target.value))
  }

  return (
    <div className={style.container}>
      <form onSubmit={submit}>
        <div className={style.field}>
          <input
            type="text"
            id="searchterm"
            value={pokemons}
            onChange={handleInputChange}
            placeholder="Encuentra tu pokemon..."
          />
          <input className={button} type="submit" value="Find!" />
        </div>
      </form>
      <div className={style.field2}>
        <select className={button} name="Type">
          <option value="">Tipo:</option>
          {options?.map((p) => (
            <option value={p.slot} key={p.slot}>
              {p.name}
            </option>
          ))}
        </select>
        <select name="creado" className={button} onChange={ordenar}>
          <option value="0">Creado por:</option>
          <option value="1">API</option>
          <option value="2">Fandom</option>
        </select>
        <select name="Ordenar" className={button}>
          <option value="">Ordenar por:</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="fuerza+">Fuerza+</option>
          <option value="fuerza">Fuerza-</option>
        </select>
      </div>
    </div>
  );
};
