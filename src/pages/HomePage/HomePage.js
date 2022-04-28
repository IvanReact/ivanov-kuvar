import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

import { recipesContext } from "../../contexts/Contexts";

import RecipeCard from "../../components/RecipeCard/RecipeCard";

function HomePage() {
  const { recipes } = useContext(recipesContext);

  return (
    <>
      <div className="homepage">
        <div className="recipes">
          {recipes.map((e) => {
            return (
              <Link to={`/singlerecipe/${e.id}`}>
                <RecipeCard recipe={e} key={e.id} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
