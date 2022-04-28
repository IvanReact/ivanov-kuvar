import React from "react";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

function RecipeCard(props) {
  return (
    <div className="recipeCard">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box is-3">
            <p className="subtitle has-background-primary">
              {props.recipe.recipeName}
            </p>
            <figure className="image">
              <img src={props.recipe.image} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
