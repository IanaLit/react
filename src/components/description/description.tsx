import React, { FC } from 'react';

import './description.scss';

export const Description = (props: { author: string, title: string, description: string }) => {
  const { author, title, description } = props;
  return (
    <div className="description">
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <div className="info">{description}</div>
    </div>
  );
};
