import { Link } from 'react-router-dom';
import React from "react";
const Header = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button>FI</button></li>
          <li><button>EN</button></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
