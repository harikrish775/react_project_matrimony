import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className="navbar responsive">
    //   <div ><Link to="/" className="navbar-logo">Matrimony</Link></div>
    //   <ul className="navbar-links">
        // <li><Link to="/">Home</Link></li>
        // <li><Link to="/about">About</Link></li>        
        // <li><Link to="/service">Service</Link></li>
        // <li><Link to="/content">Content</Link></li>   
        // <li><Link to="/login">Login</Link></li>
    //   </ul>  
    // </nav>

    <nav class="navbar navbar-expand-lg responsive">
    <Link to="/" className="navbar-logo">Matrimony</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-links mt-2" >
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/about">About</Link></li>        
        <li><Link className='nav-link' to="/service">Service</Link></li>
        <li><Link className='nav-link' to="/content">Content</Link></li>   
        <li><Link className='nav-link' to="/login">Login</Link></li>
      </ul>
    </div>
    </nav>
        
  );
};

export default Navbar;
