import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/login" className="navbar-item">Login</Link>
      <Link to="/register" className="navbar-item">sign Up</Link>
      <Link to="/contact" className="navbar-item">Contact</Link>
  </section>
  )

}

export default Navbar;