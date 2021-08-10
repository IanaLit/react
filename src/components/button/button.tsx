import React, { MouseEvent } from 'react';

import './button.scss';

const SearchButton = () => (
  <button type="submit" className="button button_search"  >
    {' '}
    <i className="fas fa-search" />
    {' '}
  </button>
);

export default SearchButton;
