import React from 'react';
import './time.scss';
    
    const Time = (publishDate:string) => {
      return (

          <div className="time">{publishDate}</div>

      );
    };
    
    export default Time;