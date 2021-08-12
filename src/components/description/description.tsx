import React, { FC } from 'react';

import './description.scss';

export const Description = (props:{ author:string, title:string, description:string }) => (
  <div className="description">
    <div className="title">{props.title}</div>
    <div className="author">{props.author}</div>
    <div className="info">{props.description}</div>
  </div>
);
