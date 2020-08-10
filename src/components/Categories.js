import React from 'react';

import imgCosechadora from '../assets/statics/icon-cosechadora.svg';
import iconTractor from '../assets/statics/icon-tractor.svg';
import iconPulverizadores from '../assets/statics/icon-pulverizadores.svg';
import iconTechnical from '../assets/statics/icon-technical.svg';
import iconPrecision from '../assets/statics/icon-precision.svg';
import iconLubricantes from '../assets/statics/icon-lubricantes.svg';


const Categories =  (props) => (
  <div className="container">
    <div className="categories">
      <h2>Encontrá tu próximo repuesto y beneficios para:</h2>
      <div className="row justify-content-center">
        <div className="col-8 col-md-3">
          <div className="card">
            <div className="card-img">
              <img src={iconTractor} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Tractores</h3>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-3">
          <div className="card">
            <div className="card-img">
              <img src={iconPulverizadores} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Pulverizadores</h3>
            </div>
          </div>
        </div>        
        <div className="col-8 col-md-3">
          <div className="card">
            <div className="card-img">
              <img src={imgCosechadora} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Cosechadoras</h3>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-3">
        <div className="card">
          <div className="card-img">
            <img src={iconTechnical} alt=""/>
          </div>
          <div className="card-body">
            <h3 className="card-title">Servicio Técnico</h3>
          </div>
        </div>
      </div>
        <div className="col-8 col-md-3">
          <div className="card">
            <div className="card-img">
              <img src={iconLubricantes} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Lubricantes y Adhitivos</h3>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-3">
          <div className="card">
            <div className="card-img">
              <img src={iconPrecision} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Agricultura de Precisión</h3>
            </div>
          </div>
        </div>       
      </div>
    </div>
  </div>
)

export default Categories;