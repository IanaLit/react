import React from 'react';
import { useActions } from '../../hooks/useAction';
import './search-field.scss';

const SearchField = () => {
  const { setValue } = useActions();
  return (
    <input
      type="text"
      className="search-field"
      placeholder="type to search"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchField;
