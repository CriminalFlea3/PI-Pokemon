import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./pokedex.module.css";
import { Card } from "../../components/Cards/Card";
import { Search } from "../../components/Search/Search";
import { getPokemons } from "../../actions";

export const Pokedex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  });
  
  return (
    <div className={style.container}>
      <Search />
      <Card />
    </div>
  );
};
