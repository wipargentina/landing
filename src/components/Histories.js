import React from 'react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1596650858614-22233431ae80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1596646699948-d8e034bfcd21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
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