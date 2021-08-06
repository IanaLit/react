import React from 'react';

import './description.scss';

const Description = (desc: any) => {
  const { price, info, address } = desc;
  return (
    <div className="description">
      <div className="price">{price}</div>
      <div className="info">{info}</div>
      <div className="address">{address}</div>
    </div>
  );
};

export default Description;
