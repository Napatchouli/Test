import React from "react";
import Nav from "./nav";
import "./component.css"

function About() {
  return (
    <>
        <Nav />
    <div className="about">
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
    </>
  );
}

export default About;