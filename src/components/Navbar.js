import React from 'react';
import { Link } from 'react-router-dom';
import logoSimonassi from '../assets/statics/logo-simonassi.svg';
import logoCaseIH from '../assets/statics/logo-case-ih.svg';

const Navbar =  (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logoSimonassi} alt="logo simonassi"/>        
      </Link>
      <div className="navbar-nav">
      <img src={logoCaseIH} alt="logo case ih" className="ml-auto" />
      </div>
    </div>
  </nav>
)

export default Navbar;