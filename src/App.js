import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="redirect-banner">
      <p className="redirect-banner__notice">Notice</p>
      <h2 className="redirect-banner__title">Hey, I'm Clement — I've moved!</h2>
      <p className="redirect-banner__message">
        My portfolio has a new home with a fresher look and better experience.
        Please update your bookmarks — this page is no longer being maintained.
      </p>
      <a
        href="https://clement-mapondera.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="redirect-banner__button"
      >
        Visit new site →
      </a>
    </div>
  );
};

export default App;
