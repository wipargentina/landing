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
        <div className="col-md-8">
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sunt nihil laudantium officia et. Numquam perspiciatis, mollitia dolore modi consectetur tenetur autem adipisci tempore architecto odio asperiores, impedit quo atque?
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