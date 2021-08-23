import React, { ChangeEvent } from 'react';
import SearchField from '../searc-field/serch-field';
import SearchButton from '../button/button';

import './search-panel.scss';
import '../form/form.scss';
import { Filter } from '../filter/filter';
import { SortType } from '../../interfaces/articleInterface';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const SearchPanel = (props: {
  // searchValue: string,
  // sortBy: SortType,
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  // handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
  handleFilter: (sort: SortType) => void,
}) => {
  const {
    //searchValue, sortBy, handleChange, handleFilter,
  } = props;

  const {searchValue } = useTypedSelector(state => state.article)
  console.log(searchValue);
  const { fetchArticles} = useActions();
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      fetchArticles(1, 5, searchValue)
    }}>
      <div className="search-panel">
        <SearchField  />
        <SearchButton />
        {/* <Filter sortBy={sortBy} handleFilter={handleFilter} /> */}
      </div>
    </form>
  );
};

export default SearchPanel;
