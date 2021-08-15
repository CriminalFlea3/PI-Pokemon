import React from "react";
import style from "./search.module.css";

export const Search = () => {
  const button = style.button;
  return (
    <div className={style.container}>
      <form>
        <div className={style.field}>
          <input
            type="text"
            id="searchterm"
            placeholder="Encuentra tu pokemon..."
          />
          <input className={button} type="submit" value="Find!" />
        </div>
        <div className={style.field2}>
          <select className={button} name="Type">
            <option value="">Tipo:</option>
            <option value="fire">Fuego</option>
            <option value="fairy">Hada</option>
            <option value="watter">Agua</option>
            <option value="normal">Normal</option>
            <option value="electric">Electrico</option>
            <option value="psychic">Psiquico</option>
            <option value="dark">Oscuro</option>
            <option value="grass">Planta</option>
            <option value="ice">Hielo</option>
            <option value="fighting">Luchador</option>
            <option value="poison">Veneno</option>
            <option value="ground">Tierra</option>
            <option value="flying">Volador</option>
            <option value="bug">Insecto</option>
            <option value="rock">Roca</option>
            <option value="ghost">Fantasma</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Metal</option>
          </select>
          <select name="creado" className={button}>
            <option value="">Original</option>
            <option value="mios">Creados</option>
          </select>
          <select name="Ordenar" className={button}>
            <option value="">Ordenar</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="fuerza+">Fuerza+</option>
            <option value="fuerza">Fuerza-</option>
          </select>
        </div>
      </form>
    </div>
  );
};
