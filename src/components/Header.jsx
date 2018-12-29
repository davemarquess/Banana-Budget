import React from 'react';
import { Link } from 'react-router-dom';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="buttonContainer">
        <li className="buttonLinks"><Link to='/' className="linkText">Home</Link></li>
        <li className="buttonLinks"><Link to='/roster' className="linkText">Roster</Link></li>
        <li className="buttonLinks"><Link to='/schedule' className="linkText">Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
