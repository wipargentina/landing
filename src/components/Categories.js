import React from 'react';

import imgCategory1 from '../assets/statics/categoria1.svg';
import iconTractor from '../assets/statics/icon-tractor.svg';
import iconPulverizadores from '../assets/statics/icon-pulverizadores.svg';
import iconPrecision from '../assets/statics/icon-precision.svg';
import iconLubricantes from '../assets/statics/icon-lubricantes.svg';


const Categories =  (props) => (
  <div className="container">
    <div className="categories">
      <h2>Aprovechá de todos nuestro beneficios</h2>
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
              <img src={imgCategory1} alt=""/>
            </div>
            <div className="card-body">
              <h3 className="card-title">Cosechadoras</h3>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-3">
        <div className="card">
          <div className="card-img">
            <img src={imgCategory1} alt=""/>
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