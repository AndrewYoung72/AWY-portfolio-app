import React from "react";
import "bulma/css/bulma.min.css";
import meWaterfall from "../Images/meWaterfall.png";

export default function Header() {
  return (
    <div className="hero has-background-info">
      
        <div className="hero-body">
          <p className="title" id="head-t">Andrew Young</p>
            <figure className="image is-128x128">
              <img className="is-rounded" src={meWaterfall} alt="it's me"></img>
            </figure>
        </div>

    </div>
  );
}
