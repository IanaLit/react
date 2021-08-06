import React from 'react';
import Heart from '../heart/heart';
import Time from '../time/time';

import './photo.scss';

const Photo = (imgUrl:string, publishDate:string, like:string) => {
  console.log(imgUrl, publishDate);
  return (
    <div
      className="photo placeholder-img"
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
    >
      {Time(publishDate)}
      ;
      <Heart />
    </div>
  );
};

export default Photo;
