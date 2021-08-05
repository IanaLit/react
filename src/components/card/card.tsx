import React from 'react';
import CardInterface from '../../interfaces/cardInterface';
import Description from '../description/description';
import Photo from '../photo/photo';


import './card.scss';

const Card = (card: CardInterface) => {
  const {firstName, lastName, zipCode, birthDate, deliveryDate, country, coupon, samples, pocket, gender, agree} = card;
  return (
    
    <div className="card">
        
        <p>Order Details</p>
      <div className = "properties"><span>First name:</span> {firstName}</div> 
      <div className = "properties"><span>Last name:</span> {lastName}</div> 
      <div className = "properties"><span>Zip code:</span> {zipCode}</div> 
      <div className = "properties"><span>Birh date:</span> {birthDate}</div> 
      <div className = "properties"><span>Delivery date:</span>{deliveryDate}</div> 
      <div className = "properties"><span>Country:</span>{country}</div> 
      <div className = "properties"><span>Gender:</span>{gender ? 'female' : 'male'}</div> 
      <div className="gifts">
        <div className = "properties"><span>Coupon:</span>{coupon && 'yes'}</div> 
        <div className = "properties"><span>Samples:</span>{samples && 'yes'}</div> 
        <div className = "properties"><span>Pocket:</span> {pocket && 'yes'}</div> 
      </div>
      
      {/* <div className = "properties"><span>Is agree:</span>{agree}</div>  */}

    </div>
  );
};

export default Card;