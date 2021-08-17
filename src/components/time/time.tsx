import React from 'react';
import './time.scss';

const Time = (props: { time: string }) => {
  const { time } = props;
  return (
    <div className="time">{time}</div>
  );
};
export default Time;
