import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Article } from '../../interfaces/articleInterface';
import { Description } from '../description/description';
import { Photo } from '../photo/photo';
import './card.scss';

export const ArticleCard = (props: Article) => {
  const {
    urlToImage, publishedAt, author, title, description,
  } = props;
  const router = useHistory();
  const clickHandler = () => router.push(`/details/${title}
    ?urlToImage=${urlToImage}
    &publishedAt=${publishedAt}
    &author=${author}
    &description=${description}`);
  return (
    <div
      role="button"
      tabIndex={0}
      className="card"
      onClick={clickHandler}
      onKeyDown={clickHandler}
    >
      <Photo imgUrl={urlToImage} time={publishedAt} />
      <Description author={author} title={title} description={description} />
    </div>
  );
};
