import React from 'react';
import './Navbar.css'
function Navbar({ userEmail, onLogout }) {
    
    return (
    <nav className='navbar'>
      <div className="navbar-left">
        <span>{userEmail}</span>
      </div>
      <div className="navbar-center">
        <span>Dashboard</span>
      </div>
      <div className="navbar-right">
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;