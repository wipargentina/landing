import React from 'react';

import logo from '../assets/statics/logo-feria.svg';

const Hero =  (props) => (
  <div className="hero">
    <div className="content bg"></div>
    <div className="content caption">
      <img src={logo} alt="logo feria" className="logo" />
    </div>
  </div>
)

export default Hero;