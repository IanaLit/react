
import React from 'react';
import Heart from '../heart/heart';
import Time from '../time/time';

    import './photo.scss';
    
    const Photo = (imgUrl:string, time:string, like:string) => {
      console.log(imgUrl);
      return (
        <div className="photo placeholder-img" style={{ 
          backgroundImage: `url("${imgUrl}")` 
        }}>
        {Time(time)};
        <Heart/>
        </div>
      );
    };
    
    export default Photo;