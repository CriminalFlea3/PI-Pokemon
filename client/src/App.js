import "./App.css";
import { Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/pokedex">
      </Route>
    </>
  );
}

export default App;
