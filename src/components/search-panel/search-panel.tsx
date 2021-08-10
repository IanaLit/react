import React, { ChangeEvent } from 'react';
import SearchField from '../searc-field/serch-field';
import SearchButton from '../button/button';

import './search-panel.scss';
import '../form/form.scss';
import { Filter } from '../filter/filter';
import { SortType } from '../../interfaces/articleInterface';

const SearchPanel = (props: {
  searchValue: string,
  sortBy:SortType,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
  handleFilter: (sort:SortType) => void,
}) => (
  <form className="form" onSubmit={props.handleSubmit}>
    <div className="search-panel" >
      <SearchField searchValue={props.searchValue} handleChange={props.handleChange} />
      <SearchButton />
      <Filter sortBy={props.sortBy} handleFilter={props.handleFilter} />
      </div>
  </form>
);

export default SearchPanel;
