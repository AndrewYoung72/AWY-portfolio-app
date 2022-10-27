import React from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
  return (
    <div className="hero  is-info">
      <div className="hero-body">
        <p className="title" id="head-t">
          Andrew Young
        </p>
        <span className="head-icons">
          <FontAwesomeIcon icon={brands("square-js")} />
          <FontAwesomeIcon icon={brands("react")} />
          <FontAwesomeIcon icon={brands("node")} />
          <FontAwesomeIcon icon={brands("html5")} />
          <FontAwesomeIcon icon={brands("slack")} />
          <FontAwesomeIcon icon={brands("linkedin")} />
          <FontAwesomeIcon icon={brands("square-github")} />
        </span>
      
      </div>
    </div>
  );
}
