import React from "react";
import "bulma/css/bulma.min.css";


export default function Portfolio() {
  return (
    <div className="tile is-ancestor">
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="images/CocktailCreations.png" alt="project 1"></img>
          </figure>
        </article>
      </div>
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="images/justParkIt.png" alt="Project 2"></img>
          </figure>
        </article>
      </div>
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="images/WeatherDashboard.png" alt="Weather Dashboard"></img>
          </figure>
        </article>
      </div>
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="images/PasswordGenerator.png" alt="Password Generator"></img>
          </figure>
        </article>
      </div>
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" alt=""></img>
          </figure>
        </article>
      </div>
       <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" alt=""></img>
          </figure>
        </article>
      </div>
    </div>
  );
}
