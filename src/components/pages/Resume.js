import React from "react";
import "bulma/css/bulma.min.css";
import resume from "../Images/resume.png"

export default function Resume() {
  return (
    <div className="container is-fluid">
      <div className="notification is-info" id="resume-ctr">
        <a clasName="button is-hovered" href="https://resume.io/r/wBcWFPraV">
          <button className="button ">Download My Resume</button>
        </a>
        <figure className="image is-4by3">
          <img src={resume} alt="my resume"></img>
        </figure>
      </div>
    </div>
  );
}
