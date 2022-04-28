import { React, useState } from "react";

import "./style.scss";
import "../../../node_modules/bulma/bulma.sass";

function EditRecipeModal(props) {

  const [editedRecipe, setEditedRecipe] = useState({
    recipeName: props.singleRecipe.recipeName,
    prepTime: props.singleRecipe.prepTime,
    image: props.singleRecipe.image,
    ingredients: props.singleRecipe.ingredients,
    preparation: props.singleRecipe.preparation,
  });

  function editRecipe() {
    fetch(`https://6245a3486b7ecf057c21c8da.mockapi.io/recipes/${props.singleRecipe.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedRecipe),
    })
      .then((res) => res.json())
      .then(() => {
        props.openEditRecipeForm();
        props.update();
        props.setHidden(false)
      });
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="form">
          <button
            className="button is-primary close"
            onClick={() => {
                props.openEditRecipeForm()
                props.setHidden(false)
            
            }}
          >
            X
          </button>
          <fieldset>
            <legend>Unesite promene:</legend>
            <br />

            <label htmlFor="recipeName"> Naziv recepta: </label>
            <input
              type="text"
              id="meal"
              name="recipeName"
              defaultValue={props.singleRecipe.recipeName}
              onChange={(e) => {
                setEditedRecipe({
                  ...editedRecipe,
                  recipeName: e.target.value,
                });
              }}
            />

            <label htmlFor="prepTime"> Vreme pripreme (u minutima): </label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              defaultValue={props.singleRecipe.prepTime}
              onChange={(e) => {
                setEditedRecipe({
                  ...editedRecipe,
                  prepTime: e.target.value,
                });
              }}
            />

            <label htmlFor="ingredients">
            Lista sastojaka, razdvojenih zarezom:
            </label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              defaultValue={props.singleRecipe.ingredients}
              onChange={(e) => {
                setEditedRecipe({
                  ...editedRecipe,
                  ingredients : (e.target.value).split(',')
                });
              }}            
              />

            <label htmlFor="image"> Slika recepta (URL): </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={props.singleRecipe.image}
              onChange={(e) => {
                setEditedRecipe({
                  ...editedRecipe,
                  image: e.target.value,
                });
              }}
            />

            <label htmlFor="preparation"> Priprema: </label>
            <textarea
              type="text"
              id="preparation"
              name="preparation"
              defaultValue={props.singleRecipe.preparation}
              onChange={(e) => {
                setEditedRecipe({
                  ...editedRecipe,
                  preparation: e.target.value,
                });
              }}
            />

            <br />
            <br />

            <button
              className="button is-primary"
              onClick={() => {
                editRecipe()
              }}
            >
              SAČUVAJ PROMENE
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default EditRecipeModal;
