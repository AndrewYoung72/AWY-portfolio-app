import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Header from "./pages/Header";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div >
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} className="navtabs" />
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
