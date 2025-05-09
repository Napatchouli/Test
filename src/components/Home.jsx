import React from  "react";
import Nav from "./nav";

function Home() {
  return (
    <>
        <Nav />
    <div className="home">
      <h1>Home</h1>
      <p>This is the Home page.</p>
    </div>
    </>
  );
}

export default Home;