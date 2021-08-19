import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ordered, tipos } from "../../helpers/filtros";
import "./card.css";

export const Card = () => {
  let pokemons = useSelector((store) => store.pokemons);
  const type = useSelector((store) => store.type);
  const order = useSelector((store) => store.order);

  if (type) pokemons = tipos(type, pokemons);
  if(order) pokemons = ordered(order, pokemons)


  const [page, setPage] = useState(0);

  const pagination = () => {
    if (pokemons.length) return pokemons.slice(page, page + 9);
    return [];
  };

  const nextPage = () => {
    if (pokemons.length > page + 9) {
      setPage(page + 9);
    }
  };

  const previusPage = () => {
    if (page > 0) {
      setPage(page - 9);
    }
  };

  return (
    <>
      <div className="botones">
        <button onClick={previusPage} className="pages"> &laquo; Previus</button>
        <button onClick={nextPage} className="pages">Next &raquo;</button>
      </div>

      <div className="container">
        {pagination().length ? (
          pagination().map((p) => (
            <Link to={`/${p.id}`} key={p.name}>
              <figure className={p.type[0]}>
                <div className="cardImageContainer">
                  <img src={p.img} alt="" className="CardImage" />
                </div>
                <figcaption className="cardCaption">
                  <h1 className="cardName">{p.name}</h1>
                  {p.type.length === 2 ? (
                    <div className="types">
                      <h3 className="cardType">{p.type[0]}</h3>
                      <h3 className="cardType">{p.type[1]}</h3>
                    </div>
                  ) : (
                    <div className="types">
                      <h3 className="cardType">{p.type[0]}</h3>
                    </div>
                  )}
                </figcaption>
              </figure>
            </Link>
          ))
        ) : (
          <img
            src="https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif"
            alt="Not found"
          />
        )}
      </div>
    </>
  );
};
