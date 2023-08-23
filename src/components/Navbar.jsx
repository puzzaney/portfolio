import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__title">PuzZan;</div>
      <ul className="nav__items">
        <li>
          <a href="#" className="nav__link">
            Home
          </a>
          <a href="#" className="nav__link">
            About Me
          </a>
          <a href="#" className="nav__link">
            Projects
          </a>
          <a href="#" className="nav__link">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}