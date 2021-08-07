import React from 'react';
import CardInterface from '../../interfaces/cardInterface';
import Description from '../description/description';
import Photo from '../photo/photo';


import './card.scss';

const Card = (card: CardInterface) => {
  const { time, like, imgUrl, ...desc} = card;
  return (
    
    <div className="card">
        {Photo(imgUrl, time, like)}
        {Description(desc)}
    </div>
  );
};

export default Card;