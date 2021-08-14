import React from "react";
import { Link } from "react-router-dom";
import style from './navbar.module.css';

export const Navbar = () => {
  return (
    <div>
      <header className={ style.header } >
        <Link to="/" className={ style.logo }>
          <img src="img/logo.png" alt="" />
        </Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/legendaries">Legendaries</Link></li>
            <li><Link to="/">Documentation</Link></li>
        </ul>
      </header>
    </div>
  );
};
