
import React from 'react';
import Heart from '../heart/heart';
import Time from '../time/time';

    import './photo.scss';
    
    const Photo = () => {
      return (
        <div className="photo placeholder-img">
        <Time/>
        <Heart/>
        </div>
      );
    };
    
    export default Photo;