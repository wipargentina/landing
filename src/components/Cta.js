import React from 'react';
import { Link as Scroll } from 'react-scroll';

const Cta =  (props) => (
  <div className="cta">
    <div className="container">
      <h3>¿Querés conocer nuestros beneficios?</h3>
      <Scroll
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={599}
        className="btn btn-lg btn-light text-dark"
      >
      contactá a un asesor
      </Scroll>
    </div>
  </div>
)

export default Cta;