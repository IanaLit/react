import React from 'react';
import {
  BrowserRouter } from 'react-router-dom';

import './app.scss';
import { Navbar } from '../navbar/navbar';
import { AppRouter } from '../appRouter';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
