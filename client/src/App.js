import "./App.css";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Pokedex } from "./Pages/Pokedex/Pokedex"
import { Create } from "./Pages/Create/Create"
import { Navbar } from "./components/Navbar/Navbar";
import { getTypes } from "./actions";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  });

  return (
    <>
      <Navbar />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/pokedex">
        <Pokedex />
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
    </>
  );
}

export default App;
