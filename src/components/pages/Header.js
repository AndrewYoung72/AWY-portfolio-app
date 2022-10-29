import React from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
  return (
    <div className="hero  is-info">
      <div className="hero-body">
       <h1 className="is-size-1">Andrew Young</h1>
        <span className="head-icons">
          <FontAwesomeIcon icon={brands("square-js")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("react")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("node-js")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("node")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("npm")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("html5")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("square-git")} className="icon is-medium" />
          <FontAwesomeIcon icon={brands("css3")} className="icon is-medium" />
        </span>
      
      </div>
    </div>
  );
}
