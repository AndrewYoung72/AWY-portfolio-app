import React from "react";
import "bulma/css/bulma.min.css";

export default function AboutMe() {
  return (
    <div>
      <section class="hero has-background-info">
        <div class="hero-body">
          <p class="title">Andrew Young</p>
          <p class="subtitle">A little about me</p>
        </div>
      </section>
      <section class="section is-medium has-background-info-light">
        <h1 class="title">About Me</h1>
        <h2 class="subtitle">
          The forest is my favorite place to be. That's what brought me to
          Colorado in the mid 1990's, and that's what brought me back to
          Colorado in 2018, with my family. I am not a career driven ladder
          climber. Titles hold little value to me. My life and family are my
          career and my profession a means to provide the necessities, goals,
          and dreams of life. However, my work ethic was forged in the Mid-West
          on long hours and hardwork. And I apply those principles in every task
          I perform. Now I am applying the same tenacious work ethic to learning
          web development with the goal of a career change into a feild I am
          passionate about. My jobs have always been out of necessity, now I am
          pursuing a career that I am passionate about for the first time in my
          life.
        </h2>
      </section>
      <footer class="footer has-background-info">
        <div class="content has-text-centered">
          <p>
            CSS by
            <strong> Bulma</strong> site by{" "}
            <a href="https://github.com/AndrewYoung72"> AndrewYoung72</a>. July
            2022.
          </p>
        </div>
      </footer>
    </div>
  );
}
