import React from "react";
import "bulma/css/bulma.min.css";
import CocktailCreations from "../Images/CocktailCreations.png";
import WeatherDashboard from "../Images/WeatherDashboard.png";
import justParkIt from "../Images/justParkIt.png";
import TeamDataTracker from "../Images/TeamDataTracker.png";
import ErieTechBlog from "../Images/ErieTechBlog.png";
import EcommerceBackend from "../Images/EcommerceBackend.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Portfolio() {
  return (
    <div className="tile is-ancestor" id="container">
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <a
            className="title"
            id="titles"
            href="https://jesusrodriguezdev.github.io/Cocktail_Creations/"
          >
            Cocktail Creations
          </a>

          <figure className="image is-4by3" >
            <img src={CocktailCreations} alt="CocktailCreations" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://github.com/JesusRodriguezDev/Cocktail_Creations"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <a
            className="title"
            id="titles"
            href="https://github.com/Noah8863/Just-Park-It#readme"
          >
            Just Park It
          </a>
          <figure className="image is-4by3">
            <img src={justParkIt} alt="Project 2" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://github.com/Noah8863/Just-Park-It"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <a
            className="title"
            id="titles"
            href="https://andrewyoung72.github.io/06-weather-dashboard-AWY/"
          >
            Weather Dashboard
          </a>
          <figure className="image is-4by3">
            <img src={WeatherDashboard} alt="Weather Dashboard" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://github.com/AndrewYoung72/06-weather-dashboard-AWY"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title" id="titles">
            Erie Tech Blog
          </p>
          <figure className="image is-4by3">
            <img src={ErieTechBlog} alt="Erie Tech Blog" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://intense-ridge-37443.herokuapp.com/"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title" id="titles">
            E-Commerce-Backend
          </p>
          <figure className="image is-4by3">
            <img src={EcommerceBackend} alt="" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://github.com/AndrewYoung72/sequalize-e-commerce-back-end"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title" id="titles">
            Team Data Tracker
          </p>
          <figure className="image is-4by3">
            <img src={TeamDataTracker} alt="" id="projects"></img>
          </figure>
          <a
            className="subtitle"
            href="https://github.com/AndrewYoung72/Team-data-tracker"
          >
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={brands("github")} id="g-font" />
            </span>
          </a>
        </article>
      </div>
    </div>
  );
}
