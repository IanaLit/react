import React, { FC } from 'react';
import { Article } from '../../interfaces/articleInterface';
import { Description } from '../description/description';
import { Photo } from '../photo/photo';
import './card.scss';

export const ArticleCard = (props:Article) => (
  <div className="card">
    <Photo imgUrl={props.urlToImage} time={props.publishedAt} />
    <Description author={props.author} title={props.title} description={props.description} />

  </div>
);
