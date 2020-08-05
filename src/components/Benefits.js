import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTruck } from '@fortawesome/free-solid-svg-icons';

const Benefits =  (props) => (
  <div className="benefits">
    <div className="container">
      <div className="row justify-content-center">        
        <div className="col-md-4">
          <div className="benefits-item">
            <FontAwesomeIcon
              icon={faHome}
              size="lg"
            />
            Descuentos y Ofertas          
          </div>
        </div>
        <div className="col-md-4">
          <div className="benefits-item">
            <FontAwesomeIcon
              icon={faHome}
              size="lg"
            />
            Lotes en Liquidación
          </div>
        </div>
        <div className="col-md-4">
          <div className="benefits-item">
            <FontAwesomeIcon
              icon={faTruck}
              size="lg"
            />
            Envío Gratis a todo el País
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Benefits;