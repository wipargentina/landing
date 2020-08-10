import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage, faHandHoldingUsd, faTruck } from '@fortawesome/free-solid-svg-icons';

const Benefits =  (props) => (
  <div className="benefits">
    <div className="container">
      <div className="row justify-content-center">        
        <div className="col-md-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon
                icon={faPercentage}
                size="2x"
              />
            </div>
            <div className="benefits-item-title">
              Descuentos hasta 50%
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                size="2x"
              />
            </div>
            <div className="benefits-item-title">
              Plazo de financiación en <br/> pesos hasta 270 días
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <FontAwesomeIcon
                icon={faTruck}
                size="2x"
              />
            </div>
            <div className="benefits-item-title">
              Envío gratis a todo el país
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Benefits;