import React, { ChangeEvent } from 'react';
import { SortType } from '../../interfaces/articleInterface';
import './filter.scss';

export const Filter = (props:{ sortBy:SortType, handleFilter:(sort:SortType)=>void }) => (
  <div style={{}} className="radios">
    <label>
      <input
        type="radio"
        value={SortType.relevancy}
        checked={props.sortBy === SortType.relevancy}
        onChange={() => props.handleFilter(SortType.relevancy)}
      />
      {' '}
      relevancy
    </label>
    <label>
      <input
        type="radio"
        value={SortType.popularity}
        checked={props.sortBy === SortType.popularity}
        onChange={() => props.handleFilter(SortType.popularity)}
      />
      {' '}
      popularity
    </label>
    <label>
      <input
        type="radio"
        value={SortType.publishedAt}
        checked={props.sortBy === SortType.publishedAt}
        onChange={() => props.handleFilter(SortType.publishedAt)}
      />
      {' '}
      publishedAt
    </label>
  </div>
);
