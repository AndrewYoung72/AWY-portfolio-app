import React from "react";
import "bulma/css/bulma.min.css";
import resume from "../Images/resume.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Resume() {
  return (
    <div className="container is-fluid">
      <div className="notification is-info" id="resume-ctr">
        <a clasName="button is-hovered" href="https://resume.io/r/wBcWFPraV">
          <span>
            <FontAwesomeIcon
              icon={solid("download")}
              className="icon is-medium"
              id="download"
            />
          </span>
        </a>
        <figure className="image is-4by3">
          <img src={resume} alt="my resume"></img>
        </figure>
      </div>
    </div>
  );
}
