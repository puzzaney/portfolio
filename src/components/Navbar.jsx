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
        </li>
        <li>
          <a href="#aboutme" className="nav__link">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="nav__link">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="nav__link">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
