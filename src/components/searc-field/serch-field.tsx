import React, { ChangeEvent } from 'react';

import './search-field.scss';

const SearchField = (props: { searchValue: string; handleChange: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const { searchValue, handleChange } = props;
  return (
    <input
      type="text"
      className="search-field"
      placeholder="type to search"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default SearchField;
