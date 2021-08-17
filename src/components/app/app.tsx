import React, { useState } from 'react';
import {
  BrowserRouter, Link, Route, Switch, Redirect,
} from 'react-router-dom';
import CardInterface from '../../interfaces/cardInterface';
import { Dashboard } from '../../pages/dashboard';
import Card from '../card/card';
import { Form } from '../form/form';
import './app.scss';
import { Navbar } from '../navbar/navbar';
import { AppRouter } from '../appRouter';

export function App(): JSX.Element {
  const [formValues, setFormValues] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
