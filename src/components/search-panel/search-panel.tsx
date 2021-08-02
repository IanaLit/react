import React from 'react';
import SearchField from '../searc-field/serch-field';
import SearchButton from '../button/button';

import './search-panel.scss';

const SearchPanel = () => {
  return (
    <div className = "search-panel">
      <SearchField/>
      <SearchButton/>
    </div>
  );
};

export default SearchPanel;