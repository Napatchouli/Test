import React from "react";
import Nav from "./nav";

function NotFound() {
  return (
    <>
        <Nav />
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    </>
  );
}

export default NotFound;