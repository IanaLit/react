import React from 'react';
import Card from '../card/card';
import SearchPanel from '../search-panel/search-panel';
import './app.scss';

const cardsData = [
  {
    time: '5 days ago',
    like: "true",
    imgUrl: '/619x291-apartment.35c.jpg',
    price: '$263,000',
    info: '2 bds 3 ba 1,900 sqft - For sale by realtor',
    address: '120 North Ballas Road, Kirkwood, MO 63122',
  },
  {
    time: '2 days ago',
    like: "true",
    imgUrl: '/gettyimages-1172217300-612x612.jpg',
    price: '$300,000',
    info: '2 bds 3 ba 1,900 sqft - For sale by realtor',
    address: '120 North Ballas Road, Kirkwood, MO 63122',
  },
  {
    time: 'today',
    like: "true",
    imgUrl: '/gettyimages-1199873461-612x612.jpg',
    price: '$266,000',
    info: '2 bds 3 ba 1,900 sqft - For sale by realtor',
    address: '120 North Ballas Road, Kirkwood, MO 63122',
  },
  {
    time: '1 month ago',
    like: "true",
    imgUrl: '/gettyimages-1213695547-612x612.jpg',
    price: '$563,000',
    info: '2 bds 3 ba 1,900 sqft - For sale by realtor',
    address: '120 North Ballas Road, Kirkwood, MO 63122',
  },
  {
    time: 'yesterday',
    like: "true",
    imgUrl: '/gettyimages-1216663592-612x612.jpg',
    price: '$200,000',
    info: '2 bds 3 ba 1,900 sqft - For sale by realtor',
    address: '120 North Ballas Road, Kirkwood, MO 63122',
  }
]

export function App(): JSX.Element {
  const cards = cardsData.map((card) =>{
        return <Card key = {card.imgUrl} {...card}/>
      });
  return (
    <div className ="app">
      <SearchPanel />
      <div className='cards'>
      {cards}
      </div>
    </div>
  );
}
