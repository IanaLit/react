import React from 'react';

// import { StaticHelloComponent } from './components/StaticHelloComponent/StaticHelloComponent';
// import { SecondsCounter } from './components/SecondsCounter/SecondsCounter';
// import { RouterExample } from './components/RouterExample/RouterExample';
// import { RouterWithDataExample } from './components/RouterWithDataExample/RouterWithDataExample';

import './components/app/app.scss';
import SearchButton from './components/button/button';

export function renderApp() {
  return (
    <SearchButton />
    // <SecondsCounter />
    // <RouterExample />
    // <RouterWithDataExample />
  );
}
