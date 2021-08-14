import React from "react";
import style from "./card.module.css";

export const Card = () => {
  //   const colors = {
  //     fire: "#FDDFDF",
  //     grass: "#DEFDE0",
  //     electric: "#FCF7DE",
  //     water: "#DEF3FD",
  //     ground: "#f4e7da",
  //     rock: "#d5d5d4",
  //     fairy: "#fceaff",
  //     poison: "#98d7a5",
  //     bug: "#f8d5a3",
  //     dragon: "#97b3e6",
  //     psychic: "#eaeda1",
  //     flying: "#F5F5F5",
  //     fighting: "#E6E0D4",
  //     normal: "#F5F5F5",
  //   };

  return (
    <>
      <div className={ style.container }>
        <figure className={ style.fire }>
          <div className={ style.cardImageContainer }>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif"
              alt=""
              className="CardImage"
            />
          </div>
          <figcaption class={ style.cardCaption }>
            <h1 class={ style.cardName }>Diito</h1>

            <h3 class={ style.cardType }>normal</h3>
          </figcaption>
        </figure>
      </div>
    </>
  );
};
