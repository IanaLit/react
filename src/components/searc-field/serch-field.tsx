import React from 'react';

import './search-field.scss';

const SearchField = () => {
  return (
    <input type="text"
              className="search-field"
              placeholder="type to search" />
  );
};

export default SearchField;