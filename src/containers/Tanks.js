import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Tanks =  (props) => (
  <>
  <Navbar isTanks />
  <div className="tanks">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3>Gracias por completar el formulario</h3>
          <p>Uno de nuestros asesores se pondrá en contacto con vos para informarte todo sobre la Feria del Repuesto CASE IH.</p>

          <p>Te invitamos a que descargues la guía de beneficios</p>

          <a href="https://drive.google.com/file/d/1ouYpUnQTFfZMWeDl_acJUc08D3tSWsWW/view?usp=sharing" alt="programacion" className="btn btn-primary" target="_blank" rel="noopener noreferrer">DESCARGAR GUÍA DE BENEFICIOS</a>
          
          <p>
            Visitanos en nuestra web <br/>
            <a href="http://www.simonassi.com.ar" target="_blank" rel="noopener noreferrer">www.simonassi.com.ar</a>          
          </p>


          <p>ó en nuestras redes sociales</p>

          <div className="social">
            <a href="https://www.facebook.com/GrupoSimonassi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
              />
            </a>
            <a href="https://www.instagram.com/simonassi_maquinaria_agricola/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
              />
            </a>
            <a href="https://www.linkedin.com/company/simonassi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
              />
            </a>
          </div>
          
          <div className="mt-3">
            <a href="https://wa.me/5493585083890" className="btn btn-success" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
              />
              {' '}
              Escribinos
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;