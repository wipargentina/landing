import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsapp =  (props) => (
  <div className="whatsapp">
    <div className="container">
      <h4>Escribinos por Whatsapp según tu zona</h4>
      <div>
        <a href="https://wa.me/5493585083890" className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="lg"
          />
          {' '}
          Río Cuarto
        </a>
        <a href="https://wa.me/5492302690874" className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="lg"
          />
          {' '}
          Huinca Renancó
        </a>
      </div>
    </div>
  </div>
)

export default Whatsapp;