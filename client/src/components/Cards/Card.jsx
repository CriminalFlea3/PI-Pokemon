import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = () => {
  const pokemons = useSelector((store) => store.pokemons);
  return (
    <>
      <div className="container">
        { pokemons.length ? pokemons?.map((p) => (
          <Link to={`/${p.id}`} key={p.name}>
            <figure className={p.type[0].type.name}>
              <div className="cardImageContainer">
                <img src={p.img} alt="" className="CardImage" />
              </div>
              <figcaption className="cardCaption">
                <h1 className="cardName">{p.name}</h1>
                {p.type.length === 2 ? (
                  <div className="types">
                    <h3 className="cardType">{p.type[0].type.name}</h3>
                    <h3 className="cardType">{p.type[1].type.name}</h3>
                  </div>
                ) : (
                  <div className="types">
                    <h3 className="cardType">{p.type[0].type.name}</h3>
                  </div>
                )}
              </figcaption>
            </figure>
          </Link>
        )) : <img src="https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif" />
        }
      </div>
    </>
  );
};
