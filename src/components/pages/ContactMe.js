import { useState } from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [areaMessage, setAreaMessage] = useState("");
  const [errorArea, setErrorArea] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello, Thank you for submitting your information`);
    setAreaMessage("");
    setTextMessage("");
    setMessage("");
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Not a valid email");
    } else {
      setError(null);
    }
    setMessage(event.target.value);
  };

  function isString(name) {
    return /(.*[a-z]){2,}/.test(name);
  }

  const handleTextChange = (e) => {
    if (!isString(e.target.value)) {
      setErrorMessage("Name is Required");
    } else {
      setErrorMessage(null);
    }
    setTextMessage(e.target.value);
  };

  function checkMessage(message) {
    return /(.*[a-z]){10,}/.test(message);
  }

  const handleMessageChange = (e) => {
    if (!checkMessage(e.target.value)) {
      setErrorArea("At least ten characters are Required");
    } else {
      setErrorArea(null);
    }
    setAreaMessage(e.target.value);
  };

  return (
    <div id="contact-container" className="section has-background-info-light">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-info"
            name="textMessage"
            type="text"
            placeholder="Name"
            value={textMessage}
            onChange={handleTextChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={solid("user")} />
          </span>
          {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-info"
            type="email"
            placeholder="Email"
            name="message"
            value={message}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={regular("envelope")} />
          </span>
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <textarea
            className="input is-info"
            name="areaMessage"
            placeholder="Leave A Message"
            value={areaMessage}
            onChange={handleMessageChange}
          />{" "}
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={solid("user-pen")} />
          </span>
          {errorArea && <h2 style={{ color: "red" }}>{errorArea}</h2>}
        </p>
        <div className="buttons has-addons is-centered" id="submit">
          <button
            className="button is-fullwidth is-info"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// {/* icons in use */}

// {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
// {/* <FontAwesomeIcon icon={regular('coffee')} /> */}
// {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} /> */}
// {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
// {/* <FontAwesomeIcon icon={"fa-brands fa-github"} /> */}
// {/* <FontAwesomeIcon icon={regular('envelope')} /> */}
