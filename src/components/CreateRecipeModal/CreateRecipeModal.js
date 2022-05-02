import { React, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import "../../../node_modules/bulma/bulma.sass";

function CreateRecipeModal(props) {

  let history = useHistory();

  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    prepTime: 0,
    image: "",
    ingredients: [],
    preparation: "",
  });

  function submitRecipe() {
    fetch(`https://6245a3486b7ecf057c21c8da.mockapi.io/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then(() => {
        props.openRecipeForm();
        props.update();
      });
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="form">
          <button
            className="button is-primary close"
            onClick={() => props.openRecipeForm()}
          >
            X
          </button>
          <fieldset>
            <legend>Popunite informacije o receptu:</legend>
            <br />

            <label htmlFor="recipeName"> Naziv recepta: </label>
            <input
              type="text"
              id="meal"
              name="recipeName"
              placeholder="naziv recepta"
              onChange={(e) => {
                setNewRecipe({
                  ...newRecipe,
                  recipeName: e.target.value,
                });
              }}
            />

            <label htmlFor="prepTime"> Vreme pripreme (u minutima): </label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              placeholder="##"
              onChange={(e) => {
                setNewRecipe({
                  ...newRecipe,
                  prepTime: e.target.value,
                });
              }}
            />

            <label htmlFor="ingredients">
              Lista sastojaka, razdvojenih zarezom:{" "}
            </label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              placeholder="sastojak 1, sastojak 2, sastojak 3"
              onChange={(e) => {
                setNewRecipe({
                  ...newRecipe,
                  ingredients: e.target.value.split(","),
                });
              }}
            />

            <label htmlFor="image"> Slika recepta (URL): </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="npr. https://drive.google.com/..."
              onChange={(e) => {
                setNewRecipe({
                  ...newRecipe,
                  image: e.target.value,
                });
              }}
            />

            <label htmlFor="preparation"> Priprema: </label>
            <textarea
              type="text"
              id="preparation"
              name="preparation"
              placeholder="instrukcije za pripremu"
              onChange={(e) => {
                setNewRecipe({
                  ...newRecipe,
                  preparation: e.target.value,
                });
              }}
            />

            <br />
            <br />

            <button
              className="button is-primary"
              onClick={() => {
                submitRecipe();
                history.push("/");
              }}
            >
              KREIRAJ RECEPT
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipeModal;
