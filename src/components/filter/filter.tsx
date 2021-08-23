import React from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SortType } from '../../interfaces/articleInterface';
import './filter.scss';

export const Filter = () => {
  const { sortBy } = useTypedSelector((state) => state.article);
  const { setSortBy } = useActions();
  return (
    <div style={{}} className="radios">
      <label htmlFor="relevancy">
        <input
          name="relevancy"
          type="radio"
          value={SortType.relevancy}
          checked={sortBy === SortType.relevancy}
          onChange={(e) => {
            setSortBy(SortType.relevancy);
            console.log('change');
          }}
        />
        {' '}
        relevancy
      </label>
      <label htmlFor="popularity">
        <input
          name="popularity"
          type="radio"
          value={SortType.popularity}
          checked={sortBy === SortType.popularity}
          onChange={() => setSortBy(SortType.popularity)}
        />
        {' '}
        popularity
      </label>
      <label htmlFor="publishedAt">
        <input
          name="publishedAt"
          type="radio"
          value={SortType.publishedAt}
          checked={sortBy === SortType.publishedAt}
          onChange={() => setSortBy(SortType.publishedAt)}
        />
        {' '}
        publishedAt
      </label>
    </div>
  );
};
