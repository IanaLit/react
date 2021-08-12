import React from 'react';
import './time.scss';

const Time = (props:{ time:string }) => (

  <div className="time">{props.time}</div>

);

export default Time;
