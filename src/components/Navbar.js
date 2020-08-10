import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logoSimonassi from '../assets/statics/logo-simonassi.svg';
import logoCaseIH from '../assets/statics/logo-case-ih.svg';

const Navbar =  (props) => {
  const { isTanks } = props;

  const navbarClass = classNames('navbar navbar-expand-lg navbar-dark', {
    isTanks
  });
  
  return (
    <nav className={navbarClass}>
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
}

export default Navbar;