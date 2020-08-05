import React from 'react';
import { Link } from 'react-router-dom';
import logoSimonassi from '../assets/statics/logo-simonassi.svg';

const Navbar =  (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logoSimonassi} alt=""/>
      </Link>
    </div>
  </nav>
)

export default Navbar;