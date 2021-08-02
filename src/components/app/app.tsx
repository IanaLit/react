import React from 'react';
import Card from '../card/card';
import SearchPanel from '../search-panel/search-panel';
import './app.scss';

export function App(): JSX.Element {
  return (
    <div className ="app">
      <SearchPanel />
      <Card/>
    </div>
  );
}
