import React, { useState } from 'react';
import CardInterface from '../../interfaces/cardInterface';
import { Dashboard } from '../../pages/dashboard';
import Card from '../card/card';
import { Form } from '../form/form';
import SearchPanel from '../search-panel/search-panel';
import './app.scss';

export function App(): JSX.Element {
  const [formValues, setFormValues] = useState([]);
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}
