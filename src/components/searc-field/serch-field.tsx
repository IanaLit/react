import React, { ChangeEvent } from 'react';

import './search-field.scss';

const SearchField = (props: { searchValue: string; handleChange: (e: ChangeEvent<HTMLInputElement>) => void}) => (
  <input
    type="text"
    className="search-field"
    placeholder="type to search"
    value={props.searchValue}
    onChange={props.handleChange}
  />
);

export default SearchField;
