import React from "react";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

function VipRecipeCard(props) {
  return (
    <div className="vipRecipeCard">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="picAndtitle">
              <p className="subtitle has-background-primary">
                {props.recipe.recipeName}
              </p>
              <figure className="image">
                <img src={props.recipe.image} />
              </figure>
            </div>

            <div className="data">
              <p>
                <b>Vreme pripreme:</b> {`${props.recipe.prepTime}`} minuta
              </p>
              <br />
              <p>
                <b>Sastojci:</b>
                {props.recipe.ingredients.map((e) => {
                  return <li key={Math.random() * 100}>{e}</li>;
                })}
              </p><br/>

              <p>
                <b>Instrukcije za pripremu:</b>{" "}
              </p>
              <p>{`${props.recipe.preparation}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VipRecipeCard;
