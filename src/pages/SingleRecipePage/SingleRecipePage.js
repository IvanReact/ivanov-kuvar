import { React, useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./style.scss";

import { recipesContext } from "../../contexts/Contexts";
import { updateContext } from "../../contexts/Contexts";

import EditRecipeModal from "../../components/EditRecipeModal/EditRecipeModal";

function SingleRecipePage(props) {
  const { update } = useContext(updateContext);
  const { recipes } = useContext(recipesContext);

  const { id } = useParams();
  const singleRecipe = recipes.find((e) => e.id == id);

  let history = useHistory();

  const [editRecipeForm, setEditRecipeForm] = useState(false);
  function openEditRecipeForm() {
    props.setHidden(true);
    setEditRecipeForm(!editRecipeForm);
  }

  function deleteRecipe() {
    fetch(
      `https://6245a3486b7ecf057c21c8da.mockapi.io/recipes/${singleRecipe.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => update());
  }

  if (!singleRecipe) {
    return null;
  }

  if (singleRecipe) {
    return (
      <div className="singleRecipePage has-background-primary">
        <h1 className="title">{singleRecipe.recipeName}</h1>
        <img src={singleRecipe.image} />
        <br />
        <ul>
          <h2>SASTOJCI:</h2>
          {singleRecipe.ingredients.map((e) => {
            return <li key={Math.random() * 100}>{e}</li>;
          })}
        </ul>
        <br />
        <h2>VREME PRIPREME: {singleRecipe.prepTime} minuta</h2>
        <br/>
        <h2>PRIPREMA:</h2>
        <p>{singleRecipe.preparation}</p>
        <br />
        <div className="button-grouper">
          <button
            className="button is-info worker"
            onClick={() => {
              openEditRecipeForm();
            }}
          >
            <strong>IZMENI RECEPT</strong>
          </button>

          {editRecipeForm && (
            <EditRecipeModal
              singleRecipe={singleRecipe}
              setHidden={props.setHidden}
              openEditRecipeForm={openEditRecipeForm}
              update={update}
            />
          )}

          <button
            className="button is-info worker"
            onClick={() => {
              deleteRecipe(singleRecipe.id);
              history.push("/");
            }}
          >
            <strong>UBRIŠI RECEPT</strong>
          </button>
        </div>
      </div>
    );
  }
}

export default SingleRecipePage;
