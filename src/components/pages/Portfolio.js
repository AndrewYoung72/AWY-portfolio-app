import React from "react";
import "bulma/css/bulma.min.css";
import CocktailCreations from "../Images/CocktailCreations.png";
import WeatherDashboard from "../Images/WeatherDashboard.png";
import justParkIt from "../Images/justParkIt.png";
import TeamDataTracker from "../Images/TeamDataTracker.png";
import ErieTechBlog from "../Images/ErieTechBlog.png";
import EcommerceBackend from "../Images/EcommerceBackend.png";

export default function Portfolio() {
  return (
    <div className="tile is-ancestor is-flex-direction-column">
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Cocktail Creations</p>
            <a
              className="subtitle"
              href="https://github.com/JesusRodriguezDev/Cocktail_Creations"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={CocktailCreations} alt="CocktailCreations"></img>
            </figure>
          </article>
        </div>
      </section>
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Just Park It</p>
            <a
              className="subtitle"
              href="https://github.com/Noah8863/Just-Park-It"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={justParkIt} alt="Project 2"></img>
            </figure>
          </article>
        </div>
      </section>
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Weather Dashboard</p>
            <a
              className="subtitle"
              href="https://github.com/AndrewYoung72/06-weather-dashboard-AWY"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={WeatherDashboard} alt="Weather Dashboard"></img>
            </figure>
          </article>
        </div>
      </section>
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Erie Tech Blog</p>
            <a
              className="subtitle"
              href="https://intense-ridge-37443.herokuapp.com/"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={ErieTechBlog} alt="Erie Tech Blog"></img>
            </figure>
          </article>
        </div>
      </section>
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">E-Commerce-Backend</p>
            <a
              className="subtitle"
              href="https://github.com/AndrewYoung72/sequalize-e-commerce-back-end"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={EcommerceBackend} alt=""></img>
            </figure>
          </article>
        </div>
      </section>
      <section className="section is-large">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Team Data Tracker</p>
            <a
              className="subtitle"
              href="https://github.com/AndrewYoung72/Team-data-tracker"
            >
              GitHub Repo
            </a>
            <figure className="image is-4by3">
              <img src={TeamDataTracker} alt=""></img>
            </figure>
          </article>
        </div>
      </section>
    </div>
  );
}
