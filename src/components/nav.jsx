import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
   <nav>
      <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">service</Link>

      </nav>     
  );
}

export default Nav;