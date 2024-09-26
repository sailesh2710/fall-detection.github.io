import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/algorithms">Algorithms</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/bibliography">Bibliography</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
}

export default Header;