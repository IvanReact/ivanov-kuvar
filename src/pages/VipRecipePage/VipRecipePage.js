import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

import { vipRecipesContext } from "../../contexts/Contexts";

import VipRecipeCard from "../../components/VipRecipeCard/VipRecipeCard";

function VipRecipePage() {
  const { vipRecipes } = useContext(vipRecipesContext);

  return (
      <div className="vip-recipe-page">
        <div className="vip-recipes">
          {vipRecipes.map((e) => {
            return (
                <VipRecipeCard recipe={e} key={e.id} />
            );
          })}
        </div>
      </div>

  );
}

export default VipRecipePage;
