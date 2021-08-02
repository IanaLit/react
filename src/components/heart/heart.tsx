    import React from 'react';

    import './heart.scss';
    
    const Heart = () => {
      return (
        <div className="heart static">
        <svg id="heart" width="40px" height="35px"><path id="heart-path" className="love" d="M 20 9 V 9 C 24 0 32 0 36 8.64 S 20 30 20 30.24 C 20 30.24 20 30 20 30.24 S 0 17.28 4 8.64 C 8 0 16 0 20 9"></path></svg>
      </div>
      );
    };
    
    export default Heart;