import React, { ChangeEvent } from 'react';
import { SortType } from '../../interfaces/articleInterface';
import './filter.scss';

export const Filter = (props: { sortBy: SortType, handleFilter: (sort: SortType) => void }) => {
  const { sortBy, handleFilter } = props;
  return (
    <div style={{}} className="radios">
      <label htmlFor="relevancy">
        <input
          name="relevancy"
          type="radio"
          value={SortType.relevancy}
          checked={sortBy === SortType.relevancy}
          onChange={() => handleFilter(SortType.relevancy)}
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
          onChange={() => handleFilter(SortType.popularity)}
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
          onChange={() => handleFilter(SortType.publishedAt)}
        />
        {' '}
        publishedAt
      </label>
    </div>
  );
};
