import React from 'react';
import Navbar from '../components/Navbar';

const Tanks =  (props) => (
  <>
  <Navbar isTanks />
  <div className="tanks">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3>Gracias por completar el formulario</h3>
          <h5>unos de nuestros asesores se pondrá en contacto contigo para informarte todo sobre la Feria del Repuesto CASE IH</h5>

          <h5>Te invitamos a que descargues la programación</h5>

          <a href="https://drive.google.com/file/d/1ouYpUnQTFfZMWeDl_acJUc08D3tSWsWW/view?usp=sharing" alt="programacion" className="btn btn-primary" target="_blank" rel="noopener noreferrer">DESCARGAR PROGRAMACIÓN</a>
          
          <h5>O que visites nuestra web</h5>

          <a href="http://www.simonassi.com.ar" target="_blank" rel="noopener noreferrer"><p className="lead">www.simonassi.com.ar</p></a>

        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;