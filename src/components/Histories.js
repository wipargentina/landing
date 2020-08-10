import React from 'react';

import photo1 from '../assets/statics/feria-simonassi-1.jpg';
import photo2 from '../assets/statics/feria-simonassi-2.jpg';
import photo3 from '../assets/statics/feria-simonassi-3.jpg';
import photo4 from '../assets/statics/feria-simonassi-4.jpg';
import photo5 from '../assets/statics/feria-simonassi-5.jpg';
import photo6 from '../assets/statics/feria-simonassi-6.jpg';
import photo7 from '../assets/statics/feria-simonassi-7.jpg';
import photo8 from '../assets/statics/feria-simonassi-8.jpg';

const photos = [
  {
    id: 1,
    url: photo1
  },
  {
    id: 2,
    url: photo2
  },
  {
    id: 3,
    url: photo3
  },
  {
    id: 4,
    url: photo4
  },
  {
    id: 5,
    url: photo5
  },
  {
    id: 6,
    url: photo6
  },
  {
    id: 7,
    url: photo7
  },
  {
    id: 8,
    url: photo8
  }
];

const photoItem = photos.map((photo, index) =>
  <div key={index} className="col-md-3">
    <img src={photo.url} alt={photo.id} className="photo" />
  </div>
);

const Histories =  (props) => (
  <div className="container">
    <div className="histories">
      <h2>Ferias anteriores</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="lead">
            Galería de experiencias previas, las ferias 2018 y 
            2019 en Río Cuarto, Un clásico! <br/>
            En 2020 extendemos un día, a un intenso mes de beneficios.
            Ahora desde donde estés.
          </p>
        </div>
      </div>
      <div className="row">
        {photoItem}
      </div>
    </div>
  </div>
)

export default Histories;