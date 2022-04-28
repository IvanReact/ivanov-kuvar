import React from "react";

import "../../../node_modules/bulma/bulma.sass";
import "./style.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Ivanov kuvar</strong>
          </p>
          <p><i>Ivan Šušnica; april 2022</i></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
