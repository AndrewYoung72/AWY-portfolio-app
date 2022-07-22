import React from "react";
import "bulma/css/bulma.min.css";

export default function Resume() {
  return (
    <div className="container is-fluid">
      <div className="notification is-info">
        <a clasName="button is-hovered" href="https://resume.io/r/wBcWFPraV">
          <button className="button is-hovered">Download My Resume</button>
        </a>
        <figure className="image is-4by3">
          <img src="img/ResumePhoto.png" alt="my resume"></img>
        </figure>
      </div>
    </div>
  );
}
