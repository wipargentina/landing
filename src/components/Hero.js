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
            <h1>Feria del Repuesto <br className="d-sm-none" />CASE IH</h1>
            <h3>Del 17 de agosto al 13 de septiembre. <br/> Importantes descuentos, financión y envío gratis a todo el país.</h3>
            <Scroll
              to="whatsapp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={599}
              className="btn btn-lg btn-light text-dark"
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