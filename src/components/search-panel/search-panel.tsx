import React, { ChangeEvent } from 'react';
import SearchField from '../searc-field/serch-field';
import SearchButton from '../button/button';

import './search-panel.scss';
import '../form/form.scss';
import { Filter } from '../filter/filter';
import { SortType } from '../../interfaces/articleInterface';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const SearchPanel = () => {
  // searchValue: string,
  // sortBy: SortType,
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  // handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
//   handleFilter: (sort: SortType) => void,

  // const {
  //   //searchValue, sortBy, handleChange, handleFilter,
  // } = props;

  const {searchValue, sortBy } = useTypedSelector(state => state.article)
  // console.log(searchValue);
  const { fetchArticles} = useActions();
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      console.log(sortBy);
      fetchArticles(1, 5, searchValue, sortBy)
    }}>
      <div className="search-panel">
        <SearchField  />
        <SearchButton />
        <Filter/>
      </div>
    </form>
  );
};

export default SearchPanel;
