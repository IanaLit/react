import React, { ChangeEvent } from 'react';
import SearchField from '../searc-field/serch-field';
import SearchButton from '../button/button';

import './search-panel.scss';
import '../form/form.scss';
import { Filter } from '../filter/filter';
import { SortType } from '../../interfaces/articleInterface';

const SearchPanel = (props: {
  searchValue: string,
  sortBy: SortType,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
  handleFilter: (sort: SortType) => void,
}) => {
  const {
    searchValue, sortBy, handleChange, handleSubmit, handleFilter,
  } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-panel">
        <SearchField searchValue={searchValue} handleChange={handleChange} />
        <SearchButton />
        <Filter sortBy={sortBy} handleFilter={handleFilter} />
      </div>
    </form>
  );
};

export default SearchPanel;
