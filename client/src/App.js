import "./App.css";
import { Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Pokedex } from "./Pages/Pokedex/Pokedex"
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/pokedex">
        <Pokedex />
      </Route>
    </>
  );
}

export default App;
