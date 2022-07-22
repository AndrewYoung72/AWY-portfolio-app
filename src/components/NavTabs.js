import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="tabs is-centered">
      <ul>
        <li>
          <a
            class="is-active"
            href="#aboutMe"
            onClick={() => handlePageChange("AboutMe")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>

        <li>
          <a
            class=""
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            class=""
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>

        <li>
          <a
            class=""
            href="#contact"
            onClick={() => handlePageChange("ContactMe")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
