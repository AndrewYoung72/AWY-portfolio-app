import React from "react";
import 'bulma/css/bulma.min.css';

export default function ContactMe() {
  return (
    <div class="container">
      <div class="notification is-info">
        <h2 class="title">Contact Me</h2>
        <input class="input is-focused" type="text" placeholder="Name"></input>
        <input class="input is-focused" type="text" placeholder="Email"></input>
        <textarea class="textarea is-info" placeholder="Message"></textarea>
        <input class="button" type="submit" value="Submit input"></input>
      </div>
    </div>
  )
}