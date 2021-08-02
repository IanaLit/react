import React from 'react';
import Description from '../description/description';
import Photo from '../photo/photo';

import './card.scss';

const Card = () => {
  return (
    <div className="card">
        <Photo/>
        <Description/>
    </div>
  );
};

export default Card;