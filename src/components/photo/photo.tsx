import React from 'react';
import Time from '../time/time';

import './photo.scss';
    
export const Photo = (props: { imgUrl: string, time: string }) => {
    return (
    <div className="photo placeholder-img" style={{ 
        backgroundImage: `url("${props.imgUrl}")` 
        }}>
        <Time time={props.time}/>
    </div>
    );
};
