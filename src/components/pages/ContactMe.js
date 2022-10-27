import {useState} from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

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
    return /^[a-zA-Z]{10,}/.test(message);
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
    <div className="tile ">
      <div className="field">
        
          <label className="label">Name</label>
          <input
            className="input"
            name="textMessage"
            type="text"
            placeholder="Name"
            value={textMessage}
            onChange={handleTextChange}
          ></input>
          {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
        
      </div>
      <div className="column is-four-fifths">
        <label className="label">Email</label>
        <i class="fa-solid fa-user"></i>
        <input
          className="input"
          type="text"
          name="message"
          placeholder="Email"
          value={message}
          onChange={handleChange}
        ></input>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </div>
      <div className="field">
        
          <label className="label">Message</label>
          <textarea
            className="input"
            name="areaMessage"
            placeholder="Textarea"
            value={areaMessage}
            onChange={handleMessageChange}
          ></textarea>
          {errorArea && <h2 style={{ color: "red" }}>{errorArea}</h2>}
        
        <div className="buttons has-addons is-centered">
          <button className="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<FontAwesomeIcon icon={solid('user-secret')} />

<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />


    </div>
  );
}

