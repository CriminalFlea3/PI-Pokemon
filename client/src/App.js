import "./App.css";
import { Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Pokedex } from "./Pages/Pokedex/Pokedex"
import { Create } from "./Pages/Create/Create"
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
      <Route exact path="/create">
        <Create />
      </Route>
    </>
  );
}

export default App;
