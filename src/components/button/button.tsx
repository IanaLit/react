import React from 'react';

import './button.scss';

const SearchButton = () => (
  <button data-testid = "test-button"  type="submit" className="button button_search">
    {' '}
    <i className="fas fa-search" />
    {' '}
  </button>
);

export default SearchButton;
