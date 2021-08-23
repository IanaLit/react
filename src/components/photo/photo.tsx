import React from 'react';
import Time from '../time/time';

import './photo.scss';

export const Photo = (props: { imgUrl: string, time: string }) => {
  const { imgUrl, time } = props;
  return (
    <div
      className="photo placeholder-img"
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
    >
      <Time time={time} />
    </div>
  );
};
