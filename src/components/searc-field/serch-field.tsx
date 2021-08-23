import React, { ChangeEvent } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './search-field.scss';

const SearchField = () => {
  // const { searchValue, handleChange } = props;
  // const { searchValue} = useTypedSelector(state => state.article)
  const {setValue } = useActions();
  return (
    <input
      type="text"
      className="search-field"
      placeholder="type to search"
      // value={searchValue}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchField;
