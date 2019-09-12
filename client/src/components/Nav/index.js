import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">
        REACT Google Books
      </div>
      <a className="navbar-brand" href="/">
        Saved
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
    </nav>
  );
}

export default Nav;
