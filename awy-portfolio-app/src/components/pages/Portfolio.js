import React from "react";
import "bulma/css/bulma.min.css";

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
            <img src="./images/CocktailCreations.png" alt="project 1"></img>
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
            <img src="images/justParkIt.png" alt="Project 2"></img>
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
            <img
              src="images/WeatherDashboard.png"
              alt="Weather Dashboard"
            ></img>
          </figure>
        </article>
      </div>
      </section>
      <section className="section is-large">
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Password Generator</p>
          <a
            className="subtitle"
            href="https://github.com/AndrewYoung72/password-generator-AWY"
          >
            GitHub Repo
          </a>
          <figure className="image is-4by3">
            <img
              src="images/PasswordGenerator.png"
              alt="Password Generator"
            ></img>
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
            <img
              src="https://bulma.io/images/placeholders/640x480.png"
              alt=""
            ></img>
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
            <img
              src=""
              alt=""
            ></img>
          </figure>
        </article>
      </div>
      </section>
    </div>
  );
}