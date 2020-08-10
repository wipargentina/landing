import React from 'react';
import { Link as Scroll } from 'react-scroll';

import logo from '../assets/statics/logo-feria.svg';

const Hero =  (props) => (
  <div className="hero">
    <div className="content bg"></div>
    <div className="content caption">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Feria del Repuesto CASE IH</h1>
            <h3>Del 17 de Agosto al 13 de Septiembre. <br/> Importantes Descuentos, financión y envío gratis a todo el pais.</h3>
            <Scroll
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={599}
              className="btn btn-lg btn-outline-light"
            >
              contactá a un asesor
            </Scroll>
          </div>
          <div className="col-md-4 logo">
            <img src={logo} alt="logo feria" className="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero;