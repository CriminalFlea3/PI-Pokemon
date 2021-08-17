import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = () => {
 
  const type = [
    "fire",
    "normal",
    "ice",
    "dark",
    "watter",
    "grass",
    "fairy",
    "electric",
    "psychic",
  ];

  return (
    <>
      <div className="container">
        {type?.map((c) => (
          <Link to={`/${c}`} key={c}>
            <figure className={c}>
              <div className="cardImageContainer">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif"
                  alt=""
                  className="CardImage"
                />
              </div>
              <figcaption className="cardCaption">
                <h1 className="cardName">Diito</h1>
                {c.type ? (
                  <div className="types">
                    <h3 className="cardType">{c}</h3>
                    <h3 className="cardType">{c}</h3>
                  </div>
                ) : (
                  <div className="types">
                    <h3 className="cardType">{c}</h3>
                  </div>
                )}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
};
