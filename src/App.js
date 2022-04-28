import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import VipRecipePage from "./pages/VipRecipePage/VipRecipePage";
import SingleRecipePage from "./pages/SingleRecipePage/SingleRecipePage";

import {
  RecipesProvider,
  VipRecipesProvider,
  UpdateProvider,
} from "./contexts/Contexts";

import "./_baseline.scss";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [vipRecipes, setVipRecipes] = useState([]);

  const [hidden, setHidden] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  function update() {
    setShouldUpdate(!shouldUpdate);
  }

  useEffect(() => {
    fetch("https://6245a3486b7ecf057c21c8da.mockapi.io/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [shouldUpdate]);

  useEffect(() => {
    fetch("https://6245a3486b7ecf057c21c8da.mockapi.io/vip-recipes")
      .then((res) => res.json())
      .then((data) => setVipRecipes(data));
  }, [shouldUpdate]);

  return (
    <>
      <RecipesProvider value={{ recipes, setRecipes }}>
        <VipRecipesProvider value={{ vipRecipes, setVipRecipes }}>
          <UpdateProvider value={{ update }}>

            <Header hidden={hidden} />

            <Switch>
              <Route path="/singlerecipe/:id">
                <SingleRecipePage setHidden={setHidden} />
              </Route>
              <Route exact path="/vip">
                <VipRecipePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>

          </UpdateProvider>
        </VipRecipesProvider>
      </RecipesProvider>

      <Footer />
    </>
  );
}

export default App;
