import React, { FC } from 'react';
import { Article } from '../../interfaces/articleInterface';
import { Description } from '../description/description';
import { Photo } from '../photo/photo';
import './card.scss';

export const ArticleCard = (props: Article) => {
  const {
    urlToImage, publishedAt, author, title, description,
  } = props;
  return (
    <div className="card">
      <Photo imgUrl={urlToImage} time={publishedAt} />
      <Description author={author} title={title} description={description} />

    </div>
  );
};
