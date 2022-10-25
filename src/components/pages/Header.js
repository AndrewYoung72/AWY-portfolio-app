import React from "react";
import "bulma/css/bulma.min.css";
import meWaterfall from "../Images/meWaterfall.png";

export default function Header() {
  return (
    <div className="hero has-background-info">
      
        <div className="hero-body">
          <p className="title">Andrew Young</p>
          <p className="subtitle">A little about me</p>
          <div className="h-image">
            <figure className="image is-128x128">
              <img className="is-rounded" src={meWaterfall} alt="it's me"></img>
            </figure>
          </div>
        </div>

    </div>
  );
}
