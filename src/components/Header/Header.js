import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

import CreateRecipeModal from "../../components/CreateRecipeModal/CreateRecipeModal";

import { updateContext } from "../../contexts/Contexts";

function Header(props) {
  const { update } = useContext(updateContext);

  const [newRecipe, setNewRecipe] = useState(false);
  function openRecipeForm() {
    setNewRecipe(!newRecipe);
  }

  if (props.hidden) {
    return null;
  }

  return (
    <div className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="website-title is-12">IVANOV KUVAR</div>

        <div id="navbarBasicExample" className="navbar-menu is-active">
          <div className="navbar-start">
            <Link to="/">
              <button className="navbar-item button is-primary space">
                Veggie recepti
              </button>
            </Link>
            <Link to="/vip">
              <button className="navbar-item button is-primary space">
                VIP recepti
              </button>
            </Link>
          </div>

          <button
            className="button is-info"
            onClick={() => {
              openRecipeForm();
            }}
          >
            <strong>DODAJ RECEPT</strong>
          </button>
          {newRecipe && (
            <CreateRecipeModal
              update={update}
              openRecipeForm={openRecipeForm}
            />
          )}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-primary"
                  href="https://my-portfolio-b98k9.ondigitalocean.app/"
                  target="_blank"
                >
                  <strong>Ivanov portfolio</strong>
                </a>
                <a
                  className="navbar-item button is-primary"
                  href="https://www.linkedin.com/in/ivan-%C5%A1u%C5%A1nica-520b9a1a2"
                  target="_blank"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
