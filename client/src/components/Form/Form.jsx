import React from "react";
import style from "./form.module.css";

export const Form = () => {
  return (
    <div className={style.containerCreate}>
      <form action="" className={style.form}>
        <div className={style.separado}>
          <h1>Crea tu propio Pokemon</h1>
          <p className={style.question}>
            <label>Pokemon name</label>
            <input type="text" placeholder="pikachu.." />
          </p>
          <p className={style.question}>
            <label>Vida</label>
            <input type="text" />
          </p>
          <p className={style.question}>
            <label>Fuerza</label>
            <input type="text" />
          </p>
          <p className={style.question}>
            <label>Defensa</label>
            <input type="text" />
          </p>
          <p className={style.question}>
            <label>Velocidad</label>
            <input type="text" />
          </p>
          <p className={style.question}>
            <label>Altura</label>
            <input type="text" />
          </p>
          <p className={style.question}>
            <label>Peso</label>
            <input type="text" />
          </p>
        </div>

        <div className={style.hiddenCB}>
          <h1>Tipos</h1>
          <div className={style.tipos}>
            <input type="checkbox" name="normal" id="normal" />
            <label for="normal">Normal</label>
            <input type="checkbox" name="fire" id="fire" />
            <label for="fire">Fuego</label>
            <input type="checkbox" name="watter" id="watter" />
            <label for="watter">Agua</label>
            <input type="checkbox" name="grass" id="grass" />
            <label for="grass">Planta</label>
            <br />
            <input type="checkbox" name="ice" id="ice" />
            <label for="ice">Hielo</label>
            <input type="checkbox" name="fighting" id="fighting" />
            <label for="fighting">Luchador</label>
            <input type="checkbox" name="poison" id="poison" />
            <label for="poison">Veneno</label>
            <input type="checkbox" name="ground" id="ground" />
            <label for="ground">Tierra</label>
            <br />
            <input type="checkbox" name="flying" id="flying" />
            <label for="flying">Volador</label>
            <input type="checkbox" name="psychic" id="psychic" />
            <label for="psychic">Psiquico</label>
            <input type="checkbox" name="bug" id="bug" />
            <label for="bug">Insecto</label>
            <input type="checkbox" name="rock" id="rock" />
            <label for="rock">Roca</label>
            <br />
            <input type="checkbox" name="ghost" id="ghost" />
            <label for="ghost">Fantasma</label>
            <input type="checkbox" name="dragon" id="dragon" />
            <label for="dragon">Dragon</label>
            <input type="checkbox" name="dark" id="dark" />
            <label for="dark">Oscuro</label>
            <input type="checkbox" name="stell" id="stell" />
            <label for="stell">Metal</label>
            <br />
            <input type="checkbox" name="electric" id="electric" />
            <label for="electric">Electrico</label>
            <input type="checkbox" name="fairy" id="fairy" />
            <label for="fairy">Hada</label>
            <br />
            <input type="submit" value="Crear" className={ style.submit } />
          </div>
        </div>
      </form>
    </div>
  );
};
